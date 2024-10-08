import { Alert, AlertTitle } from "@mui/material";

const Notification = () => {
  return (
    true && (
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success Alert with an encouraging title.
      </Alert>
    )
  );
};

export default Notification;
