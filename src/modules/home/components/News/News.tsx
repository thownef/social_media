import { useEffect } from "react";
import { Box, Fade, IconButton, Modal, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import Post from "@/modules/home/components/Post/Post";
import PostComposer from "@/modules/home/components/PostComposer/PostComposer";
import { type Post as PostType } from "@/modules/home/core/types/post.type";
import { fetchPostList } from "@/modules/home/server-action/post";
import useHandleModal from "@/shared/hooks/useHandleModal";
import useFetchDataTable from "@/shared/hooks/useFetchDataTable";
import NewPostForm from "@/modules/home/components/Form/NewPostForm";
import useHandleInitForm from "@/modules/home/hooks/useHandleInitForm";

const News = () => {
  const { dataTable, onFetch, onPrependData, onRemoveData } = useFetchDataTable<PostType>(fetchPostList);
  const { modalName, onSetModalName, onResetModal } = useHandleModal();
  const { initData, onOpenCreatePost, onOpenEditPost, onResetInitData } = useHandleInitForm(onSetModalName);

  useEffect(() => {
    onFetch({ page: 1 });
  }, []);

  return (
    <Box className="mt-4">
      <PostComposer onOpenModal={onOpenCreatePost} />
      <Box className="mt-4">
        {dataTable.map((item) => (
          <Post key={item.id} data={item} onRemovePost={onRemoveData} onEditPost={onOpenEditPost} />
        ))}
      </Box>
      <Modal open={modalName === "post-composer"} onClose={onResetModal} closeAfterTransition>
        <Fade in={modalName === "post-composer"}>
          <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] bg-white rounded-lg p-0">
            <Box className="p-2 border-b border-gray-200 relative">
              <Typography variant="h6" component="h2" align="center">
                {initData ? "Edit post" : "Create post"}
              </Typography>
              <IconButton onClick={onResetInitData} size="small" className="!absolute right-2 top-2 !bg-gray-200 rounded-full">
                <Close />
              </IconButton>
            </Box>
            <NewPostForm onClose={onResetInitData} onSuccess={onPrependData} initialData={initData} isEdit={!!initData} />
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default News;
