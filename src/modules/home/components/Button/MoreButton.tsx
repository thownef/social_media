import { useRef, useState, useEffect, useCallback } from "react";
import { IconButton, MenuItem, MenuList, ClickAwayListener, Paper, Grow, Popper } from "@mui/material";
import { MoreHoriz, Edit, Delete } from "@mui/icons-material";
import { deletePost } from "@/modules/home/services/post.service";
import { Post } from "@/modules/home/core/types/post.type";

type MoreButtonProps = {
  id: number;
  data: Post;
  onRemovePost: (id: number) => void;
  onEditPost: (data: Post) => void;
}

const MoreButton = ({ id, data, onRemovePost, onEditPost }: MoreButtonProps) => {
  const [open, setOpen] = useState(false);
  const prevOpen = useRef(open);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const handleDeletePost = useCallback(async () => {
    try {
      await deletePost(id);
      onRemovePost(id);
      setOpen(false);
    } catch (error) {}
  }, [id, onRemovePost]);

  const handleEditPost = useCallback(() => {
    onEditPost(data);
    setOpen(false);
  }, [data, onEditPost]);

  return (
    <>
      <IconButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <MoreHoriz />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-end"
        transition
        disablePortal
        className="z-[9999]"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom-end" ? "right top" : "right bottom",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="composition-menu" aria-labelledby="composition-button" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleEditPost} className="!text-sm !flex !items-center gap-2 h-auto">
                    <Edit /> Edit post
                  </MenuItem>
                  <MenuItem onClick={handleDeletePost} className="!text-sm !flex !items-center gap-2 h-auto">
                    <Delete /> Move to trash
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default MoreButton;
