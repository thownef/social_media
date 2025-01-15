import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import _ from "lodash";
import { Avatar, Box, IconButton, Typography, Button } from "@mui/material";
import { Public, ArrowDropDown, PersonAdd, VideoCameraBack, PhotoLibrary, PhotoCamera, Close as CloseIcon } from "@mui/icons-material";
import { RootState } from "@/shared/store";
import FormInputBase from "@/shared/components/Input/FormInputBase";
import FileInput from "@/modules/home/components/Input/FileInput";
import useHandleForm from "@/shared/hooks/useHandleForm";
import { createPost, updatePost } from "@/modules/home/services/post.service";
import useHandleUpload from "@/modules/home/hooks/useHandleUpload";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormPost, PostFormSchema } from "@/modules/home/core/config/form/init-form-post";
import { PostForm } from "@/modules/home/core/types/post.type";
import { FileImage } from "@/shared/core/types";
import { decamelizeKeys } from "humps";

interface NewPostFormProps {
  onClose: () => void;
  onSuccess: (params: any) => void;
  initialData: PostForm;
}

const NewPostForm = ({ onClose, onSuccess, initialData }: NewPostFormProps) => {
  const auth = useSelector((state: RootState) => state.user.user);
  const fileList = useMemo(() => initialData.files.map((file: FileImage) => ({ link: file.link, id: file.id })), [initialData.files]);

  const {
    handleSubmit,
    control,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormPost>({
    values: initialData,
    resolver: yupResolver(PostFormSchema),
    mode: "all",
  });
  const {
    fileInputRef,
    previewUrls,
    isDragging,
    showImageUpload,
    onPhotoClick,
    onOpenUpload,
    onCloseUpload,
    onFileChange,
    onRemoveImage,
    onDrop,
    onDragOver,
    onDragLeave,
  } = useHandleUpload(setValue, watch, fileList);

  const handleSubmitForm = async (values: any, id?: string | number) => {
    const { files, ...rest } = values;
    const transformValues = { ...decamelizeKeys(rest), files };

    return id ? await updatePost(+id, transformValues) : await createPost(transformValues);
  };

  const { onSubmitForm } = useHandleForm({
    onSubmit: handleSubmitForm,
    setError,
    id: initialData.id,
    isValidForm: _.isEmpty(errors),
    fnAfterSubmit: onClose,
    onReloadTable: onSuccess,
  });

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Box className="p-2">
        <Box className="flex gap-2 mb-2">
          <Avatar src={auth?.profile?.avatar?.link || "/assets/img/profile-avatar.png"} />
          <Box className="flex flex-col gap-0 items-start justify-between">
            <Typography variant="subtitle2" fontSize={14} className="font-medium block text-sm !leading-4">
              {`${auth?.profile?.firstName} ${auth?.profile?.lastName}`}
            </Typography>
            <Box className="flex items-center gap-1 bg-gray-300 rounded-md px-2 !py-[0.15rem] cursor-pointer">
              <IconButton className="!p-0 w-3 h-3" size="small">
                <Public className="!text-[1rem]" />
              </IconButton>
              <Typography variant="subtitle1" fontSize={12} className="font-bold !leading-4">
                Public
              </Typography>
              <ArrowDropDown className="!text-[1rem]" />
            </Box>
          </Box>
        </Box>

        <FormInputBase
          control={control}
          name="content"
          placeholder={`What's on your mind, ${auth?.profile?.firstName?.split(" ")[0] || "User"}?`}
          className="mb-2"
        />

        <FileInput control={control} name="files" inputRef={fileInputRef} accept="image/*" multiple onChange={onFileChange} />

        {showImageUpload && previewUrls.length === 0 ? (
          <Box
            className={`mt-3 p-4 ${
              isDragging ? "border-blue-500 bg-blue-50" : "border border-gray-300 rounded-lg mb-2"
            } rounded-lg relative transition-colors duration-200`}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
          >
            <IconButton className="!absolute right-2 top-2" size="small" onClick={onCloseUpload}>
              <CloseIcon fontSize="small" />
            </IconButton>

            <Box onClick={onOpenUpload} className="text-center">
              <Box className="mb-2">
                <PhotoLibrary sx={{ fontSize: 40, color: isDragging ? "primary.main" : "gray" }} />
              </Box>
              <Typography variant="subtitle1" className="mb-1" color={isDragging ? "primary" : "inherit"}>
                {isDragging ? "Drop your photos here" : "Add photos/videos"}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                or drag and drop
              </Typography>
            </Box>
          </Box>
        ) : (
          previewUrls.length > 0 && (
            <Box
              className={`mt-3 ${isDragging ? "ring-2 ring-blue-500 rounded-lg p-2 mb-2 bg-blue-50" : "mb-2"}`}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
            >
              <Box className="grid grid-cols-3 gap-2">
                <Box
                  className={`aspect-square border border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer ${
                    isDragging ? "border-blue-500 bg-blue-100" : "hover:bg-gray-50"
                  }`}
                  onClick={onOpenUpload}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                >
                  <PhotoCamera color={isDragging ? "primary" : "inherit"} />
                  <Typography variant="body2" className="mt-1" color={isDragging ? "primary" : "inherit"}>
                    Add Photos
                  </Typography>
                  <Typography variant="caption" color={isDragging ? "primary" : "textSecondary"}>
                    Or drag and drop
                  </Typography>
                </Box>

                {previewUrls.slice(0, 5).map((url: { link: string }, index: number) => (
                  <Box key={url.link} className="relative aspect-square">
                    <img src={url.link} alt={`Preview ${index + 1}`} className="w-full h-full object-cover rounded-lg" />

                    {index === 4 && previewUrls.length > 5 && (
                      <Box className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                        <Typography variant="h5" className="text-white font-bold">
                          +{previewUrls.length - 5}
                        </Typography>
                      </Box>
                    )}

                    <IconButton
                      size="small"
                      className="!absolute right-1 top-1 !bg-white !shadow-md hover:!bg-gray-100"
                      onClick={onRemoveImage(index)}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Box>
          )
        )}

        <Box className="p-2 border border-gray-300 rounded-lg flex justify-between items-center">
          <Typography variant="subtitle2" fontSize={14} className="font-medium !leading-4">
            Add to your post
          </Typography>
          <Box className="flex gap-1">
            <IconButton size="small" onClick={onPhotoClick}>
              <PhotoLibrary color="success" />
            </IconButton>
            <IconButton size="small">
              <VideoCameraBack color="warning" />
            </IconButton>
            <IconButton size="small">
              <PersonAdd color="primary" />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box className="p-2">
        <Button
          disabled={!_.isEmpty(errors)}
          type="submit"
          fullWidth
          variant="contained"
          className="!text-white !bg-blue-500 !font-medium !rounded-lg !py-1.5"
        >
          Post
        </Button>
      </Box>
    </form>
  );
};

export default NewPostForm;
