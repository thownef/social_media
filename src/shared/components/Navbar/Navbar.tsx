import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Button, Input } from "@heroui/react";
import { BellIcon, MagnifyingGlassIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { PagePath } from "@/shared/core/enum";
import { RootState } from "@/shared/store";
import { useCallback } from "react";

const Navbar = () => {
  const auth = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();

  const handleNavigate = useCallback((name: string) => {
    return () => {
      navigate(name);
    };
  }, []);

  return (
    <nav className="flex gap-6 justify-between items-center bg-white border-b border-gray-200 px-10 py-2.5 sticky left-0 right-0 top-0 z-50">
      <div className="w-3/10 flex items-center">
        <Link to={PagePath.HOME} className="flex shrink-0 items-center pr-1 gap-3">
          <img
            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/0i5urkrr_expires_30_days.png"}
            className="w-10 h-10 object-fill"
          />
          <span className="text-[#0C1024] !text-xl font-bold">Social</span>
        </Link>
      </div>

      <div className="w-2/5">
        <Input
          type="search"
          radius="full"
          placeholder="Type in search"
          startContent={<MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />}
        />
      </div>

      <div className="w-3/10 flex items-center justify-end gap-4">
        <Button onClick={handleNavigate(PagePath.MESSAGES)} radius="full" variant="flat" size="md" isIconOnly>
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
