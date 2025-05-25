import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Button, Input } from "@heroui/react";
import { BellIcon, MagnifyingGlassIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { PagePath } from "@/shared/core/enum";
import { RootState } from "@/shared/store";

const Navbar = () => {
  const auth = useSelector((state: RootState) => state.user.user);
  return (
    <nav className="flex flex-wrap justify-between items-center bg-white border-b border-gray-200 px-4 py-2.5 sticky left-0 right-0 top-0 z-50">
      <div className="w-1/6 flex items-center">
        <Link to={PagePath.HOME} className="flex items-center">
          <span className="!text-xl font-semibold text-[rgb(82,103,211)]">Connected</span>
        </Link>
      </div>

      <div className="w-2/3 flex-1 mx-4 flex gap-4">
        <div className="flex-3/5">
          <Input
            type="search"
            radius="full"
            placeholder="Type in search"
            startContent={<MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />}
          />
        </div>
        <div className="flex-2/5" />
      </div>

      <div className="w-1/6 flex items-center justify-end gap-4">
        <Button radius="full" variant="flat" size="md" isIconOnly>
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
        </Button>
        <Button radius="full" variant="flat" size="md" isIconOnly>
          <BellIcon className="w-5 h-5" />
        </Button>

        <Button radius="full" variant="flat" size="md" isIconOnly>
          <Avatar showFallback className=" " src={auth?.profile?.avatar?.link} alt="user photo" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
