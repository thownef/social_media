import News from "@/modules/home/components/News/News";
import PostComposer from "@/modules/home/components/PostComposer/PostComposer";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box className="flex">
      <Box className="flex-1">Left</Box>
      <Box className="flex-1 p-4">
        <News />
      </Box>
      <Box className="flex-1">Right</Box>
    </Box>
  );
};

export default HomePage;
