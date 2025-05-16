import { useSelector } from "react-redux";
import { Avatar, Button, Divider, Input } from "@heroui/react";
import { RootState } from "@/shared/store";
import liveVideoPost from "/assets/img/live_video_post.png";
import picturePost from "/assets/img/picture_post.png";
import feelPost from "/assets/img/feel_post.png";

type PostComposerProps = {
  onOpenModal: () => void;
};

const PostComposer = ({ onOpenModal }: PostComposerProps) => {
  const auth = useSelector((state: RootState) => state.user.user);

  return (
    <div className="rounded-lg p-3 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.16)]">
      <div className="flex !items-center gap-4 py-3">
        <Button radius="full" variant="flat" size="md" isIconOnly>
          <Avatar src={auth?.profile?.avatar?.link || "/assets/img/profile-avatar.png"} />
        </Button>
        <Input
          placeholder="What's on your mind, John..."
          radius="full"
          type="search"
          readOnly
          fullWidth
          onClick={onOpenModal}
          className="[&_[data-slot='main-wrapper']]:cursor-pointer [&_input]:!cursor-pointer"
        />
      </div>

      <Divider className="!my-3" />

      <div className="flex gap-2 mt-2">
        <Button
          startContent={<img className="w-6 h-6" src={liveVideoPost} alt="live video" />}
          className="text-sm text-[#65686C] hover:bg-[#f3f4f6]"
          variant="light"
          fullWidth
          size="md"
        >
          Live video
        </Button>
        <Button
          startContent={<img className="w-6 h-6" src={picturePost} alt="picture" />}
          className="text-sm text-[#65686C] hover:bg-[#f3f4f6]"
          variant="light"
          fullWidth
          size="md"
        >
          Photo/video
        </Button>
        <Button
          startContent={<img className="w-6 h-6" src={feelPost} alt="feeling" />}
          className="text-sm text-[#65686C] hover:bg-[#f3f4f6]"
          variant="light"
          fullWidth
          size="md"
        >
          Feeling/activity
        </Button>
      </div>
    </div>
  );
};

export default PostComposer;
