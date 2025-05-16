import { useCallback, useState } from "react";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { EllipsisHorizontalIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { deletePost } from "@/modules/home/services/post.service";
import { Post } from "@/modules/home/core/types/post.type";

type MoreButtonProps = {
  id: number;
  data: Post;
  onRemovePost: (id: number) => void;
  onEditPost: (data: Post) => void;
};

const MoreButton = ({ id, data, onRemovePost, onEditPost }: MoreButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeletePost = useCallback(async () => {
    try {
      await deletePost(id);
      onRemovePost(id);
      setIsOpen(false);
    } catch (error) {}
  }, [id, onRemovePost]);

  const handleEditPost = useCallback(() => {
    onEditPost(data);
    setIsOpen(false);
  }, [data, onEditPost]);

  return (
    <Dropdown isOpen={isOpen} onOpenChange={setIsOpen} placement="bottom-end">
      <DropdownTrigger>
        <Button variant="light" size="sm" isIconOnly radius="full">
          <EllipsisHorizontalIcon className="h-5 w-5" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Post actions" className="w-[200px]">
        <DropdownItem key="edit" startContent={<PencilSquareIcon className="h-4 w-4" />} onClick={handleEditPost}>
          Edit post
        </DropdownItem>
        <DropdownItem key="delete" startContent={<TrashIcon className="h-4 w-4" />} onClick={handleDeletePost} className="text-danger">
          Move to trash
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default MoreButton;
