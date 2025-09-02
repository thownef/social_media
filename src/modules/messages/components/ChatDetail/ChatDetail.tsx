import { Button, Image } from "@heroui/react";
import { XMarkIcon, PhotoIcon, DocumentIcon, LinkIcon, BellSlashIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const ChatDetail = () => {
  return (
    <div className="overflow-y-auto scrollbar-thin flex flex-col w-72 border-l border-gray-200 bg-white">
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 !text-lg">Chat details</h3>
        <Button isIconOnly variant="light" radius="full" size="sm" aria-label="Close chat details">
          <XMarkIcon className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex gap-4 px-6 py-4">
        <Button isIconOnly variant="flat" radius="full" className="bg-gray-100 hover:bg-gray-200" aria-label="Shared images">
          <PhotoIcon className="w-5 h-5 text-[rgb(82,103,211)]" />
        </Button>
        <Button isIconOnly variant="flat" radius="full" className="bg-gray-100 hover:bg-gray-200" aria-label="Shared files">
          <DocumentIcon className="w-5 h-5 text-[rgb(82,103,211)]" />
        </Button>
        <Button isIconOnly variant="flat" radius="full" className="bg-gray-100 hover:bg-gray-200" aria-label="Shared links">
          <LinkIcon className="w-5 h-5 text-[rgb(82,103,211)]" />
        </Button>
        <Button isIconOnly variant="flat" radius="full" className="bg-gray-100 hover:bg-gray-200" aria-label="Mute notifications">
          <BellSlashIcon className="w-5 h-5 text-red-500" />
        </Button>
      </div>

      <div className="px-6 py-2">
        <h4 className="font-semibold text-gray-900 mb-2">
          Shared media
          <span className="text-gray-400 font-normal"> (286)</span>
        </h4>
        <div className="grid grid-cols-3 gap-2">
          <Image
            alt="Close-up photo of a dog tilting its head"
            className="rounded-md object-cover w-full h-20"
            src="https://storage.googleapis.com/a1aa/image/0f36af2f-3e28-4845-6381-555a7742940d.jpg"
          />
          <Image
            alt="Silhouette of two people standing on a rock"
            className="rounded-md object-cover w-full h-20"
            src="https://storage.googleapis.com/a1aa/image/f976803a-6b7f-49d8-e838-a238f2039de9.jpg"
          />
          <Image
            alt="Person with backpack standing on a rock"
            className="rounded-md object-cover w-full h-20"
            src="https://storage.googleapis.com/a1aa/image/f81792f9-fe0a-4872-1c88-16ea6fcbea78.jpg"
          />
          <Image
            alt="Close-up photo of a pizza slice"
            className="rounded-md object-cover w-full h-20"
            src="https://storage.googleapis.com/a1aa/image/bdc089e7-7004-4f73-e0c9-321514c26f06.jpg"
          />
          <Image
            alt="Photo of a waterfall"
            className="rounded-md object-cover w-full h-20"
            src="https://storage.googleapis.com/a1aa/image/dffe962d-4f71-48ae-9a0d-7adf4a30e61d.jpg"
          />
          <Image
            alt="Photo of a sunset over the ocean"
            className="rounded-md object-cover w-full h-20"
            src="https://storage.googleapis.com/a1aa/image/b282ad62-a245-41d4-bf52-7f12fbb01de3.jpg"
          />
        </div>
      </div>

      <div className="px-6 py-2">
        <h4 className="font-semibold text-gray-900 mb-2">
          Shared files
          <span className="text-gray-400 font-normal"> (4)</span>
        </h4>
        <ul className="space-y-2">
          {[
            { name: "Document.pdf", size: "1 MB" },
            { name: "Doctor Appointment", size: "10 kB" },
            { name: "Essay - Biology", size: "200 kB" },
            { name: "Document.pdf", size: "1 MB" },
          ].map((file, index) => (
            <li
              key={index}
              className="flex items-center justify-between text-sm text-gray-700 cursor-pointer hover:bg-gray-50 rounded px-2 py-1"
            >
              <div className="flex items-center gap-2">
                <DocumentTextIcon className="w-5 h-5 text-gray-400" />
                <span>{file.name}</span>
              </div>
              <span className="text-xs text-gray-400">{file.size}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatDetail;
