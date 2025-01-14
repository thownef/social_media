import { Link } from "react-router-dom";
import { Avatar, Box, Divider, Typography, Button } from "@mui/material";
import { ChatBubbleOutline, Favorite, Public, ThumbUpOffAlt, ThumbUp, ReplyRounded } from "@mui/icons-material";
import ListImage from "@/modules/home/components/ImageList/ImageList";
import wow from "/assets/img/wow.svg";
import sad from "/assets/img/sad.svg";
import angry from "/assets/img/angry.svg";
import laugh from "/assets/img/laugh.svg";
import heart from "/assets/img/heart.svg";
import { type Post } from "@/modules/home/core/types/post.type";
import { getRelativeTime } from "@/shared/utils";
import MoreButton from "@/modules/home/components/Button/MoreButton";

type PostProps = {
  data: Post;
  onRemovePost: (id: number) => void;
};

const Post = ({ data, onRemovePost }: PostProps) => {
  return (
    <Box className="w-full mt-4">
      <Box className="border rounded-lg px-4 pt-4 pb-2 bg-white shadow-sm">
        <Box className="flex !items-center gap-4 mb-3">
          <Avatar src={data?.createdBy?.avatar?.link || "/assets/img/profile-avatar.png"} />
          <Box className="flex-1">
            <Link className="font-medium block text-sm" to="/profile">
              {`${data.createdBy.firstName || ""} ${data.createdBy.lastName || ""}`}
            </Link>
            <Box className="flex items-center gap-2">
              <Typography variant="inherit" fontSize={12} lineHeight={1} color="gray" component="span">
                {getRelativeTime(data.createdAt)}
              </Typography>
              <Public fontSize="small" />
            </Box>
          </Box>
          <MoreButton id={data.id} onRemovePost={onRemovePost} />
        </Box>
        <Box className="mb-3">
          <Typography variant="inherit" fontSize={14} component="div">
            {data.content}
          </Typography>
        </Box>
        {data.file.length > 0 && <ListImage images={data.file} />}
        <Box className="flex flex-col gap-1 mt-3">
          <Box className="flex items-center justify-between gap-2 px-4 pb-2">
            <Box className="flex gap-1">
              <Box className="flex -space-x-1">
                <ThumbUp fontSize="small" className="text-white bg-blue-600 rounded-full p-1" />
                <Favorite fontSize="small" className="text-white bg-red-500 rounded-full p-1" />
              </Box>
              <Typography variant="inherit" fontSize={14} color="gray" component="span">
                Bạn và 148 người khác
              </Typography>
            </Box>
            <Typography className="float-right" variant="inherit" fontSize={14} color="gray" component="span">
              24 bình luận • 3 lượt chia sẻ
            </Typography>
          </Box>

          <Divider />

          <Box className="grid grid-cols-3 mt-1 relative">
            <Box className="relative group">
              <Button
                startIcon={<ThumbUpOffAlt className="!text-[#65686C] !text-2xl" />}
                className="!text-sm !text-[#65686C] hover:bg-[#f3f4f6] !py-2.5 !px-2 !normal-case !h-10"
                fullWidth
                size="small"
              >
                Like
              </Button>

              <Box className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bottom-[100%] left-0 bg-white p-2 rounded-full shadow-lg gap-2 transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0 mb-2 flex items-center z-10">
                <Box className="hover:scale-125 transition-transform duration-150 cursor-pointer flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                  <ThumbUp className="text-white !text-xl" />
                </Box>
                <Box className="hover:scale-125 transition-transform duration-150 cursor-pointer flex items-center justify-center w-10 h-10">
                  <img src={heart} alt="heart" className="w-8 h-8 object-contain" />
                </Box>
                <Box className="hover:scale-125 transition-transform duration-150 cursor-pointer flex items-center justify-center w-10 h-10">
                  <img src={laugh} alt="laugh" className="w-8 h-8 object-contain" />
                </Box>
                <Box className="hover:scale-125 transition-transform duration-150 cursor-pointer flex items-center justify-center w-10 h-10">
                  <img src={sad} alt="sad" className="w-8 h-8 object-contain" />
                </Box>
                <Box className="hover:scale-125 transition-transform duration-150 cursor-pointer flex items-center justify-center w-10 h-10">
                  <img src={angry} alt="angry" className="w-8 h-8 object-contain" />
                </Box>
                <Box className="hover:scale-125 transition-transform duration-150 cursor-pointer flex items-center justify-center w-10 h-10">
                  <img src={wow} alt="wow" className="w-8 h-8 object-contain" />
                </Box>
              </Box>
            </Box>

            <Button
              startIcon={<ChatBubbleOutline className="!text-[#65686C] !text-2xl" />}
              className="!text-sm !text-[#65686C] hover:bg-[#f3f4f6] !py-2.5 !px-2 !normal-case !h-10"
              fullWidth
              size="small"
            >
              Comment
            </Button>

            <Button
              startIcon={<ReplyRounded className="!text-[#65686C] !-scale-x-100 !text-2xl" />}
              className="!text-sm !text-[#65686C] hover:bg-[#f3f4f6] !py-2.5 !px-2 !normal-case !h-10"
              fullWidth
              size="small"
            >
              Share
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
