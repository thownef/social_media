import { Link } from "react-router-dom";
import { Avatar, Button, Divider } from "@heroui/react";
import { HandThumbUpIcon, GlobeAltIcon, ChatBubbleLeftRightIcon, ShareIcon } from "@heroicons/react/24/outline";
import { type Post } from "@/modules/home/core/types/post.type";
import ImageList from "@/modules/home/components/ImageList/ImageList";
import { getRelativeTime } from "@/shared/utils";
import MoreButton from "@/modules/home/components/Button/MoreButton";
import like from "/assets/img/like.svg";
import wow from "/assets/img/wow.svg";
import sad from "/assets/img/sad.svg";
import angry from "/assets/img/angry.svg";
import laugh from "/assets/img/laugh.svg";
import heart from "/assets/img/heart.svg";

type PostProps = {
  data: Post;
  onRemovePost: (id: number) => void;
  onEditPost: (post: Post) => void;
};

const Post = ({ data, onRemovePost, onEditPost }: PostProps) => {
  return (
    <div className="w-full mt-4">
      <div className="rounded-lg px-4 pt-4 pb-2 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.16)]">
        <div className="flex justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <Avatar src={data?.createdBy?.avatar?.link || "/assets/img/profile-avatar.png"} />
            <div className="flex flex-col">
              <Link className="font-medium block text-sm" to="/profile">
                {`${data.createdBy.firstName || ""} ${data.createdBy.lastName || ""}`}
              </Link>
              <div className="flex items-center gap-2">
                <span className="!text-sm text-gray-500">{getRelativeTime(data.createdAt)}</span>
                <GlobeAltIcon className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
          <MoreButton id={data.id} data={data} onRemovePost={onRemovePost} onEditPost={onEditPost} />
        </div>
        <div className="mb-3">
          <p className="text-sm whitespace-pre-line">{data.content}</p>
        </div>
        {data.files.length > 0 && <ImageList images={data.files} />}
        <div className="flex flex-col gap-1 mt-3">
          <div className="flex items-center justify-between gap-2 px-4 pb-2">
            <div className="flex gap-1">
              <div className="flex -space-x-1">
                <img src={like} alt="like" className="w-5 h-5 object-contain" />
                <img src={heart} alt="heart" className="w-5 h-5 object-contain" />
              </div>
              <span className="text-sm text-gray-500">Bạn và 148 người khác</span>
            </div>
            <span className="float-right text-sm text-gray-500">24 bình luận • 3 lượt chia sẻ</span>
          </div>

          <Divider />

          <div className="grid grid-cols-3 mt-1 relative gap-1">
            <div className="relative group">
              <Button
                startContent={<HandThumbUpIcon className="w-5 h-5 text-[#65686C] text-2xl" />}
                className="text-sm text-[#65686C] hover:bg-[#f3f4f6]"
                variant="light"
                fullWidth
                size="md"
              >
                Like
              </Button>

              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bottom-[100%] left-0 bg-white p-2 rounded-full shadow-lg gap-2 transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0 mb-2 flex items-center z-10">
                <div className="hover:scale-125 transition-transform duration-150 cursor-pointer flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                  <img src={like} alt="heart" className="w-8 h-8 object-contain" />
                </div>
                <div className="hover:scale-125 transition-transform duration-150 cursor-pointer flex items-center justify-center w-10 h-10">
                  <img src={heart} alt="heart" className="w-8 h-8 object-contain" />
                </div>
                <div className="hover:scale-125 transition-transform duration-150 cursor-pointer flex items-center justify-center w-10 h-10">
                  <img src={laugh} alt="laugh" className="w-8 h-8 object-contain" />
                </div>
                <div className="hover:scale-125 transition-transform duration-150 cursor-pointer flex items-center justify-center w-10 h-10">
                  <img src={sad} alt="sad" className="w-8 h-8 object-contain" />
                </div>
                <div className="hover:scale-125 transition-transform duration-150 cursor-pointer flex items-center justify-center w-10 h-10">
                  <img src={angry} alt="angry" className="w-8 h-8 object-contain" />
                </div>
                <div className="hover:scale-125 transition-transform duration-150 cursor-pointer flex items-center justify-center w-10 h-10">
                  <img src={wow} alt="wow" className="w-8 h-8 object-contain" />
                </div>
              </div>
            </div>
            <Button
              startContent={<ChatBubbleLeftRightIcon className="w-5 h-5 text-[#65686C] text-2xl" />}
              className="text-sm text-[#65686C] hover:bg-[#f3f4f6]"
              variant="light"
              fullWidth
              size="md"
            >
              Comment
            </Button>

            <Button
              startContent={<ShareIcon className="w-5 h-5 text-[#65686C] text-2xl" />}
              className="text-sm !text-[#65686C] hover:bg-[#f3f4f6]"
              variant="light"
              fullWidth
              size="md"
            >
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
