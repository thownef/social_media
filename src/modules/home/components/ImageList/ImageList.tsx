import { FileImage } from "@/shared/core/types";

type ImageListProps = {
  images: FileImage[];
};

const ImageList = ({ images }: ImageListProps) => {
  const getRemainingCount = () => {
    if (images.length <= 3) return null;
    return images.length - 3;
  };
  
  return (
    <div className={`
      w-full gap-2 grid
      ${images.length === 1 ? 'grid-cols-1 h-auto' : 'h-[384px]'}
      ${images.length === 2 ? 'grid-cols-2 grid-rows-1' : ''}
      ${images.length > 2 ? 'grid-cols-2 grid-rows-2' : ''}
    `}>
      {images.slice(0, Math.min(3, images.length)).map((image: FileImage, index: number) => (
        <div
          key={index}
          className={`
            relative overflow-hidden rounded-md cursor-pointer
            ${images.length > 2 && index === 0 ? 'row-span-2' : 'row-span-1'}
          `}
        >
          <img 
            src={image.link} 
            alt={`Image ${index + 1}`} 
            className="w-full h-full object-cover cursor-pointer" 
          />
          {index === 2 && getRemainingCount() && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">
                +{getRemainingCount()}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageList;
