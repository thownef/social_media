import { useState, useRef, useCallback } from "react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";

interface HookReturnHandleUpload {
  fileInputRef: React.RefObject<HTMLInputElement>;
  previewUrls: { link: string; id?: number }[];
  isDragging: boolean;
  showImageUpload: boolean;
  onPhotoClick: () => void;
  onOpenUpload: () => void;
  onCloseUpload: () => void;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (index: number) => () => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
}

const useHandleUpload = (
  setValue: UseFormSetValue<any>,
  watch: UseFormWatch<any>,
  initialFiles: { link: string; id?: number }[]
): HookReturnHandleUpload => {
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [previewUrls, setPreviewUrls] = useState<{ link: string; id?: number }[]>(initialFiles);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoClick = useCallback(() => {
    setShowImageUpload(true);
  }, []);

  const handleOpenUpload = useCallback(() => {
    fileInputRef.current?.click();
  }, [fileInputRef]);

  const handleCloseUpload = useCallback(() => {
    setShowImageUpload(false);
  }, []);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const newPreviewUrls = files.map((file) => ({
      link: URL.createObjectURL(file),
    }));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
    const currentFiles = fileInputRef.current?.files;

    if (currentFiles) {
      setValue("files", Array.from(currentFiles));
    }
  }, []);

  const handleRemoveImage = useCallback(
    (index: number) => {
      return () => {
        const removedItem = previewUrls[index];
        if (removedItem.id) {
          const fileIds = watch("fileIds") || [];
          setValue("fileIds", [...fileIds, removedItem.id]);
        }
        setPreviewUrls((prev) => prev.filter((_, i) => i !== index));

        const currentFiles = fileInputRef.current?.files;
        if (currentFiles) {
          const updatedFiles = Array.from(currentFiles).filter((_, i) => i !== index);
          setValue("files", updatedFiles);
        }
      };
    },
    [fileInputRef, previewUrls]
  );

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files).filter((file) => file.type.startsWith("image/"));

    if (files.length > 0) {
      const newPreviewUrls = files.map((file) => ({
        link: URL.createObjectURL(file),
      }));
      setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const relatedTarget = e.relatedTarget as Node;
    if (!e.currentTarget.contains(relatedTarget)) {
      setIsDragging(false);
    }
  }, []);

  return {
    fileInputRef,
    previewUrls,
    isDragging,
    showImageUpload,
    onPhotoClick: handlePhotoClick,
    onOpenUpload: handleOpenUpload,
    onCloseUpload: handleCloseUpload,
    onFileChange: handleFileChange,
    onRemoveImage: handleRemoveImage,
    onDrop: handleDrop,
    onDragOver: handleDragOver,
    onDragLeave: handleDragLeave,
  };
};

export default useHandleUpload;
