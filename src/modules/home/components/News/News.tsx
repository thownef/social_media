import { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
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
  const { modalName, onSetModalName } = useHandleModal();
  const { initData, onOpenCreatePost, onOpenEditPost, onResetInitData } = useHandleInitForm(onSetModalName);

  useEffect(() => {
    onFetch({ page: 1 });
  }, []);

  return (
    <div className="mt-4">
      <PostComposer onOpenModal={onOpenCreatePost} />
      <div className="mt-4">
        {dataTable.map((item) => (
          <Post key={item.id} data={item} onRemovePost={onRemoveData} onEditPost={onOpenEditPost} />
        ))}
      </div>

      <Modal
        isOpen={modalName === "post-composer"}
        classNames={{
          closeButton: "!cursor-pointer",
        }}
        size="xl"
        onClose={onResetInitData}
        placement="center"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 !text-2xl text-center border-b border-gray-300">Create post</ModalHeader>
              <ModalBody>
                <NewPostForm onClose={onResetInitData} onSuccess={onPrependData} initialData={initData} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default News;
