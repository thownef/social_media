import { Avatar, Box, Divider, IconButton, InputBase } from "@mui/material";
import { CameraAlt, Videocam, AttachFile, GifBoxOutlined, Poll } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "@/shared/store";

interface PostComposerProps {
  onOpenModal: () => void;
}

const PostComposer = ({ onOpenModal }: PostComposerProps) => {
  const auth = useSelector((state: RootState) => state.user.user);

  return (
    <Box className="border rounded-lg p-3 bg-white shadow-sm">
      <Box className="flex !items-center gap-4 py-3">
        <Avatar src={auth?.profile?.avatar?.link || "/assets/img/profile-avatar.png"} />
        <InputBase
          placeholder="What's on your mind, John..."
          className="bg-gray-100 rounded-3xl px-4 py-2 w-full text-black [&>input]:!cursor-pointer hover:bg-gray-200"
          readOnly
          onClick={onOpenModal}
        />
      </Box>

      <Divider className="!my-3" />

      <Box className="flex gap-2 mt-2">
        <IconButton size="small">
          <CameraAlt />
        </IconButton>
        <IconButton size="small">
          <Videocam />
        </IconButton>
        <IconButton size="small">
          <AttachFile />
        </IconButton>
        <IconButton size="small">
          <GifBoxOutlined />
        </IconButton>
        <IconButton size="small">
          <Poll />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PostComposer;
