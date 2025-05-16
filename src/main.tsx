import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "@/shared/store/index.ts";
import "@/styles/globals.css";
import { GlobalHistory } from "@/shared/components/GlobalHistory/GlobalHistory.tsx";
import Providers from "@/providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Providers>
        <GlobalHistory />
        <App />
      </Providers>
    </Provider>
  </StrictMode>
);
