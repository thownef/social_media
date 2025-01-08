import { Avatar, Box, Divider, Typography } from "@mui/material";
import { Chat, Favorite, MoreHoriz, Share, Public, ThumbUp } from "@mui/icons-material";
import ListImage from "@/modules/home/components/ImageList/ImageList";
import { Link } from "react-router-dom";

const Post = () => {
  const images = [
    { url: "https://res.cloudinary.com/meleegod/image/upload/v1672976529/hbpviaojvggqfrnirk1l.jpg" },
    { url: "https://res.cloudinary.com/meleegod/image/upload/v1672759995/zbrraibd5tiaevt7hxks.jpg" },
    { url: "https://res.cloudinary.com/meleegod/image/upload/v1672760932/o9ypzidgwep6n4c7afya.jpg" },
    { url: "https://res.cloudinary.com/meleegod/image/upload/v1672761434/m7tkxdyjx1bckmec6enx.jpg" },
    { url: "https://res.cloudinary.com/meleegod/image/upload/v1672930346/uizwzu8a1boqwvxayluc.jpg" },
    { url: "https://res.cloudinary.com/meleegod/image/upload/v1677830797/krnxukywmjdnfvp636ar.jpg" },
  ];
  return (
    <Box className="w-full">
      <Box className="border rounded-lg p-3 bg-white shadow-sm">
        <Box className="flex !items-center gap-4 mb-3">
          <Avatar src="/path-to-avatar.jpg" />
          <Box className="flex-1">
            <Link className="font-medium block" to="/profile">
              John Doe
            </Link>
            <Typography className="flex items-center gap-2">
              <Typography variant="caption" fontSize={12} lineHeight={1} color="gray">
                19 minutes ago
              </Typography>
              <Public fontSize="small" />
            </Typography>
          </Box>
          <MoreHoriz />
        </Box>
        <ListImage images={images} />
        <Box className="flex flex-col gap-1 mt-3">
          <Box className="flex items-center gap-2 px-4 pb-2">
            <Box className="flex -space-x-1">
              <ThumbUp fontSize="small" className="text-white bg-blue-600 rounded-full p-1" />
              <Favorite fontSize="small" className="text-white bg-red-500 rounded-full p-1" />
            </Box>
            <Typography variant="body2" color="gray" className="flex-1">
              Bạn và 128 người khác
            </Typography>
            <Typography variant="body2" color="gray">
              24 bình luận • 3 lượt chia sẻ
            </Typography>
          </Box>

          <Divider />

          <Box className="flex items-center justify-between mt-2">
            <button className="flex items-center gap-1 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors">
              <ThumbUp fontSize="small" className="text-gray-500" />
              <Typography variant="body2" color="gray">
                Like
              </Typography>
            </button>

            <button className="flex items-center gap-1 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors">
              <Chat fontSize="small" className="text-gray-500" />
              <Typography variant="body2" color="gray">
                Comment
              </Typography>
            </button>

            <button className="flex items-center gap-1 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors">
              <Share fontSize="small" className="text-gray-500" />
              <Typography variant="body2" color="gray">
                Share
              </Typography>
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
