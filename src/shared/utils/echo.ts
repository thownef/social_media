import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { camelizeKeys } from 'humps';

window.Pusher = Pusher;

class CustomEcho extends Echo<'reverb'> {
  listen(channel: string, event: string, callback: Function) {
    return super.listen(channel, event, (data: any) => {
      callback(camelizeKeys(data));
    });
  }

  private(channel: string) {
    const privateChannel = super.private(channel);
    const originalListen = privateChannel.listen.bind(privateChannel);

    privateChannel.listen = (event: string, callback: Function) => {
      return originalListen(event, (data: any) => {
        callback(camelizeKeys(data));
      });
    };

    return privateChannel;
  }

  join(channel: string) {
    const presence = super.join(channel);
    const originalHere = presence.here.bind(presence);
    const originalJoining = presence.joining.bind(presence);
    const originalLeaving = presence.leaving.bind(presence);

    presence.here = (callback: Function) => {
      return originalHere((data: any) => {
        callback(camelizeKeys(data));
      });
    };

    presence.joining = (callback: Function) => {
      return originalJoining((data: any) => {
        callback(camelizeKeys(data));
      });
    };

    presence.leaving = (callback: Function) => {
      return originalLeaving((data: any) => {
        callback(camelizeKeys(data));
      });
    };

    return presence;
  }
}

export const echo = new CustomEcho({
  broadcaster: "reverb",
  key: import.meta.env.VITE_APP_REVERB_APP_KEY,
  wsHost: import.meta.env.VITE_APP_REVERB_HOST,
  wsPort: import.meta.env.VITE_APP_REVERB_PORT ?? 80,
  wssPort: import.meta.env.VITE_APP_REVERB_PORT ?? 443,
  forceTLS: (import.meta.env.VITE_APP_REVERB_SCHEME ?? "https") === "https",
  enabledTransports: ["ws", "wss"],
  authEndpoint: "http://localhost:8000/broadcasting/auth",
  auth: {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      Accept: "application/json",
    },
  },
});
