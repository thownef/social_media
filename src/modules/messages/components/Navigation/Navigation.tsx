import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { BookmarkIcon, ChatBubbleLeftRightIcon, Cog6ToothIcon, UserGroupIcon, UserIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
  const navigate = useNavigate();
  const handleBack = useCallback(() => {
    navigate(-1);
  }, []);
  return (
    <div className="w-14 bg-white border-r border-gray-200 flex flex-col items-center py-2">
      <div className="border-b border-gray-200">
        <Button onPress={handleBack} isIconOnly variant="light" radius="lg" className="mb-2">
          <ArrowLeftIcon className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <Button isIconOnly variant="light" radius="lg">
          <ChatBubbleLeftRightIcon className="w-6 h-6 text-[rgb(82,103,211)]" />
        </Button>
        <Button isIconOnly variant="light" radius="lg">
          <UserGroupIcon className="w-6 h-6" />
        </Button>
        <Button isIconOnly variant="light" radius="lg">
          <UserIcon className="w-6 h-6" />
        </Button>
        <Button isIconOnly variant="light" radius="lg">
          <BookmarkIcon className="w-6 h-6" />
        </Button>
      </div>

      <div className="mt-auto">
        <Button isIconOnly variant="light" radius="lg">
          <Cog6ToothIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
