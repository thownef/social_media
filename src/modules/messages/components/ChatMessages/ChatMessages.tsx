import { Avatar, Button, Input } from "@heroui/react";
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  VideoCameraIcon,
  PlusIcon,
  PhotoIcon,
  GifIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const ChatMessages = () => {
  return (
    <div className="flex flex-col flex-1 border-r border-gray-200">
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <Avatar src="https://storage.googleapis.com/a1aa/image/bc2dd2ca-abd1-4933-8693-cdafca1c06e9.jpg" className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">Ava Thompson</span>
            <span className="text-gray-400 !text-sm">Online now</span>
          </div>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <div className="flex items-center gap-2">
          <Button isIconOnly variant="flat" radius="full" aria-label="Search">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </Button>
          <Button isIconOnly variant="flat" radius="full" aria-label="Call">
            <PhoneIcon className="w-5 h-5" />
          </Button>
          <Button isIconOnly variant="flat" radius="full" aria-label="Video call">
            <VideoCameraIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-4 bg-white">
        <div className="text-center text-xs text-gray-400 mb-4">Tues 9:11 PM</div>

        <div className="max-w-xs ml-auto mb-3">
          <div className="bg-blue-600 text-white text-sm rounded-2xl px-4 py-2 break-words">
            I'm on my way but there is crying baby in a bus and I forgot my headphones at home. Uh....
          </div>
        </div>

        <div className="max-w-xs mb-3">
          <div className="bg-gray-200 text-gray-900 text-sm rounded-2xl px-4 py-2 break-words">
            Oh boy! You will manage. Just don't be late.
          </div>
        </div>

        <div className="max-w-xs ml-auto mb-3">
          <div className="bg-blue-600 text-white text-sm rounded-2xl px-4 py-2 break-words">I'm here. Where are you?</div>
        </div>

        <div className="max-w-xs mb-3">
          <div className="bg-gray-200 text-gray-900 text-sm rounded-2xl px-4 py-2 break-words">On my way.</div>
          <div className="bg-gray-200 text-gray-900 text-sm rounded-2xl px-4 py-2 mt-1 break-words">I may be late :)</div>
          <div className="bg-gray-200 text-gray-900 text-sm rounded-2xl px-4 py-2 mt-1 break-words">Oooooopsie.</div>
        </div>

        <div className="max-w-xs ml-auto mb-3">
          <div className="bg-blue-600 text-white text-sm rounded-2xl px-4 py-2 break-words">You are ridiculous!!!!!!!!!!!</div>
        </div>

        <div className="max-w-xs mb-3">
          <div className="bg-gray-200 text-gray-900 text-sm rounded-2xl px-4 py-2 break-words">JK. I'm here :D :D :D</div>
          <img
            alt="Night park path with bench and trees illuminated by streetlights"
            className="mt-2 rounded-lg object-cover w-36 h-36"
            src="https://storage.googleapis.com/a1aa/image/abc17229-fa2a-400f-3d0d-ed8669ae1aba.jpg"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 px-6 py-3 border-t border-gray-200 bg-white">
        <Button isIconOnly variant="flat" radius="full" size="sm" aria-label="Add">
          <PlusIcon className="w-5 h-5" />
        </Button>
        <Button isIconOnly variant="flat" radius="full" size="sm" aria-label="Add image">
          <PhotoIcon className="w-5 h-5" />
        </Button>
        <Button isIconOnly variant="flat" radius="full" size="sm" aria-label="Add GIF">
          <GifIcon className="w-5 h-5" />
        </Button>
        <Button isIconOnly variant="flat" radius="full" size="sm" aria-label="Add sticker">
          <FaceSmileIcon className="w-5 h-5" />
        </Button>

        <Input
          type="text"
          placeholder="Aa"
          radius="full"
          className="flex-1"
          classNames={{
            input: "bg-gray-100",
            inputWrapper: "bg-gray-100 hover:bg-gray-100",
          }}
        />

        <Button isIconOnly color="primary" radius="full" size="sm" aria-label="Send">
          <PaperAirplaneIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatMessages;
