import { useCallback, useState } from "react";
import { Post } from "@/modules/home/core/types/post.type";
import { initFormPost, InitFormPost } from "@/modules/home/core/config/form/init-form-post";

const useHandleInitForm = (onSetModalName: React.Dispatch<React.SetStateAction<string>>) => {
  const [initData, setInitData] = useState<InitFormPost>({
    content: "",
    files: [],
  });

  const handleOpenCreatePost = useCallback(() => {
    onSetModalName("post-composer");
  }, []);

  const handleOpenEditPost = useCallback((post: Post) => {
    onSetModalName("post-composer");
    setInitData((prev) => ({
      ...prev,
      content: post.content,
      files: post.files,
    }));
  }, []);

  const handleResetInitData = useCallback(() => {
    onSetModalName("");
    setInitData(initFormPost);
  }, []);

  return {
    initData,
    onOpenCreatePost: handleOpenCreatePost,
    onOpenEditPost: handleOpenEditPost,
    onResetInitData: handleResetInitData,
  };
};

export default useHandleInitForm