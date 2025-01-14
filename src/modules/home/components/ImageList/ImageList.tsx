import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { cn } from "@/shared/utils/cn";
import { FileImage } from "@/shared/core/types";

const ListImage = ({ images }: { images: FileImage[] }) => {
  const getRemainingCount = () => {
    if (images.length <= 3) return null;
    return images.length - 3;
  };
  return (
    <ImageList
      className={cn(
        "w-full gap-2",
        images.length === 1 ? "h-auto !grid !grid-cols-1" : "h-[384px]",
        images.length === 2 ? "grid-cols-2 grid-rows-1" : null,
        images.length > 2 ? "grid-cols-2 grid-rows-2" : null
      )}
      variant={images.length === 1 ? "standard" : "quilted"}
    >
      {images.slice(0, Math.min(3, images.length)).map((image: FileImage, index: number) => (
        <ImageListItem
          key={index}
          className={cn(
            "overflow-hidden rounded-md cursor-pointer",
            images.length > 2 && index === 0 ? "row-span-2" : "row-span-1"
          )}
        >
          <img src={image.link} alt={`Image ${index + 1}`} className="w-full h-full object-cover cursor-pointer" />
          {index === 2 && getRemainingCount() && (
            <Box className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Typography variant="h4" className="text-white font-bold">
                +{getRemainingCount()}
              </Typography>
            </Box>
          )}
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ListImage;
