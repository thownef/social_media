import { Alert, Button, Slide, SlideProps, Snackbar, SnackbarCloseReason } from "@mui/material";
import { CheckCircle, Error, Info, Warning, Close } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useAppHooks";
import { cn } from "@/shared/utils/cn";
import { resetNotification } from "@/shared/store/notificationSlice";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

const Notification = () => {
  const dispatch = useAppDispatch();
  const { isOpen, notification } = useAppSelector((state) => state.notification);

  const handleClose = (_: any, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(resetNotification());
  };

  const iconMap: { [key: string]: JSX.Element } = {
    success: <CheckCircle />,
    error: <Error />,
    info: <Info />,
    warning: <Warning />,
  };

  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      autoHideDuration={1000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert
        severity={notification.type}
        icon={notification.type ? iconMap[notification.type] : undefined}
        onClose={handleClose}
        action={
          <Button color="inherit" size="small" onClick={handleClose} className="min-w-0 p-0.5">
            <Close fontSize="small" />
          </Button>
        }
        className={cn(
          "shadow-md",
          "w-full xs:w-[90vw] sm:w-[350px] md:w-[400px]",
          "[&_.MuiAlert-message]:break-words [&_.MuiAlert-message]:overflow-wrap-break-word",
          "[&_.MuiAlert-message]:overflow-y-auto [&_.MuiAlert-message]:whitespace-pre-wrap",
          "[&_.MuiAlert-message]:max-h-[150px] sm:[&_.MuiAlert-message]:max-h-[175px] md:[&_.MuiAlert-message]:max-h-[200px]",
          "[&_.MuiAlert-message]:text-sm sm:[&_.MuiAlert-message]:text-[0.9rem] md:[&_.MuiAlert-message]:text-base",
          "[&_.MuiAlert-action]:pt-0 [&_.MuiAlert-action]:items-start"
        )}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
