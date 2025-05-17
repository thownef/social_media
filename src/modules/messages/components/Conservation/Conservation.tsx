import { Avatar, Input } from "@heroui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Conservation = () => {
  return (
    <div className="w-80 bg-white border-r border-gray-200">
      <div className="p-4">
        <Link to="/" className="!text-xl font-semibold text-[rgb(82,103,211)] block !mb-4">Connected</Link>
        <Input
          type="search"
          placeholder="Search in chats"
          radius="lg"
          startContent={<MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />}
        />
      </div>

      <nav className="mt-4">
        {/* Active Chat */}
        <div className="px-4 py-3 bg-indigo-50">
          <div className="flex items-center gap-3">
            <Avatar src="https://storage.googleapis.com/a1aa/image/bc2dd2ca-abd1-4933-8693-cdafca1c06e9.jpg" className="h-10 w-10" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Ava Thompson</h3>
                <span className="text-xs text-gray-500">9:11 PM</span>
              </div>
              <p className="text-sm text-indigo-600">
                Ava: <span className="text-gray-600">LOL</span>
              </p>
            </div>
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          </div>
        </div>

        {/* Other Chats */}
        <div className="px-4 py-3 hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Avatar src="https://storage.googleapis.com/a1aa/image/03ad8f1b-1453-4f48-ffda-86f0f09a63fc.jpg" className="h-10 w-10" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Ethan Reynolds</h3>
                <span className="text-xs text-gray-500">12m</span>
              </div>
              <p className="text-sm text-blue-600">
                Ethan: <span className="text-gray-600">R u here?</span>
              </p>
            </div>
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          </div>
        </div>

        <div className="px-4 py-3 hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Avatar src="https://storage.googleapis.com/a1aa/image/f29fd576-4f90-4a01-35a4-95ed3978795f.jpg" className="h-10 w-10" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Pablo Morandi</h3>
                <span className="text-xs text-gray-500">12m</span>
              </div>
              <p className="text-sm text-gray-500">
                Pablo: <span>This is the...</span>
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 py-3 hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Avatar src="https://storage.googleapis.com/a1aa/image/57ff9493-18ef-41f0-89fa-61c8ad06528c.jpg" className="h-10 w-10" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Olivia Hayes</h3>
                <span className="text-xs text-gray-500">1h</span>
              </div>
              <p className="text-sm text-gray-500">
                Olivia: <span>Got the thing you...</span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Conservation;
