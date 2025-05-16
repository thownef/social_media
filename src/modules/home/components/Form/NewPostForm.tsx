import { useMemo } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { decamelizeKeys } from "humps";
import { Avatar, Button } from "@heroui/react";
import { XMarkIcon, GlobeAltIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { RootState } from "@/shared/store";
import FileInput from "@/modules/home/components/Input/FileInput";
import useHandleForm from "@/shared/hooks/useHandleForm";
import { createPost, updatePost } from "@/modules/home/services/post.service";
import useHandleUpload from "@/modules/home/hooks/useHandleUpload";
import { FormPost, PostFormSchema } from "@/modules/home/core/config/form/init-form-post";
import { PostForm } from "@/modules/home/core/types/post.type";
import { FileImage } from "@/shared/core/types";
import photoPost from "/assets/img/photo_post.png";
import tagPost from "/assets/img/tag_post.png";
import statusPost from "/assets/img/status_post.png";
import newImage from "/assets/img/new_image.png";
import FormTextarea from "@/shared/components/Textarea/FormTextarea";
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
    const transformFiles = files.filter((file: any) => file instanceof File);
    const transformValues = { ...decamelizeKeys(rest), files: transformFiles };

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
      <div className="p-2">
        <div className="flex gap-2 mb-2">
          <Avatar src={auth?.profile?.avatar?.link || "/assets/img/profile-avatar.png"} />
          <div className="flex flex-col gap-0 items-start justify-between">
            <div className="font-medium block !text-sm !leading-4">{`${auth?.profile?.firstName} ${auth?.profile?.lastName}`}</div>
            <Button className="!w-[80px] h-[22px] gap-1 p-0" size="sm">
              <GlobeAltIcon className="w-4 h-4" />
              <span className="!text-xs leading-none">Public</span>
              <ChevronDownIcon className="w-3 h-3" />
            </Button>
          </div>
        </div>

        <FormTextarea className="mb-2" control={control} name="content" placeholder="What's on your mind?" />

        <FileInput control={control} name="files" inputRef={fileInputRef} accept="image/*" multiple onChange={onFileChange} />

        {showImageUpload && previewUrls.length === 0 ? (
          <div
            className={`mt-3 p-4 ${
              isDragging ? "border-blue-500 bg-blue-50" : "border border-gray-300 rounded-lg mb-2"
            } rounded-lg relative transition-colors duration-200`}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
          >
            <Button onPress={onCloseUpload} radius="full" variant="flat" size="sm" isIconOnly>
              <XMarkIcon className="w-4 h-4" />
            </Button>

            <div onClick={onOpenUpload} className="h-[150px] flex flex-col items-center justify-center text-center">
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <img className="w-5 h-5" src={newImage} alt="new" />
                </div>
              </div>
              <div className="text-base font-medium" color={isDragging ? "primary" : "inherit"}>
                {isDragging ? "Drop your photos here" : "Add photos/videos"}
              </div>
              <div className="!text-sm text-gray-500">or drag and drop</div>
            </div>
          </div>
        ) : (
          previewUrls.length > 0 && (
            <div
              className={`mt-3 ${isDragging ? "ring-2 ring-blue-500 rounded-lg p-2 mb-2 bg-blue-50" : "mb-2"}`}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
            >
              <div className="grid grid-cols-3 gap-2">
                <div
                  className={`aspect-square border border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer ${
                    isDragging ? "border-blue-500 bg-blue-100" : "hover:bg-gray-50"
                  }`}
                  onClick={onOpenUpload}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                >
                  <img className="w-8 h-8" src={newImage} alt="new" />
                  <div className="mt-1 text-base font-medium" color={isDragging ? "primary" : "inherit"}>
                    Add Photos
                  </div>
                  <div className="mt-1 !text-sm text-gray-500">Or drag and drop</div>
                </div>

                {previewUrls.slice(0, 5).map((url: { link: string }, index: number) => (
                  <div key={url.link} className="relative aspect-square">
                    <img src={url.link} alt={`Preview ${index + 1}`} className="w-full h-full object-cover rounded-lg" />

                    {index === 4 && previewUrls.length > 5 && (
                      <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                        <div className="text-white text-xl font-semibold">+{previewUrls.length - 5}</div>
                      </div>
                    )}

                    <Button
                      radius="full"
                      className="!absolute right-1 top-1"
                      isIconOnly
                      size="sm"
                      variant="faded"
                      onPress={onRemoveImage(index)}
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )
        )}

        <div className="p-2 border border-gray-300 rounded-lg flex justify-between items-center">
          <div className="font-medium !leading-4">Add to your post</div>
          <div className="flex gap-1">
            <Button radius="full" isIconOnly size="md" variant="light" onClick={onPhotoClick}>
              <img className="w-6 h-6" src={photoPost} alt="photo" />
            </Button>
            <Button radius="full" isIconOnly size="md" variant="light" onClick={onPhotoClick}>
              <img className="w-6 h-6" src={tagPost} alt="tab" />
            </Button>
            <Button radius="full" isIconOnly size="md" variant="light" onClick={onPhotoClick}>
              <img className="w-6 h-6" src={statusPost} alt="status" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-2">
        <Button disabled={!_.isEmpty(errors)} type="submit" fullWidth className="!text-white !bg-blue-500 !font-medium !rounded-lg !py-1.5">
          Post
        </Button>
      </div>
    </form>
  );
};

export default NewPostForm;
