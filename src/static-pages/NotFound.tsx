import { Button } from "@mui/material";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* <LockIcon fontSize="large" color="primary" /> */}
      <p className="text-gray-600 text-center mt-4">
        This content isn't available right now.
      </p>
      <div className="flex space-x-4 mt-8">
        <Button variant="outlined">Go to News Feed</Button>
        <Button variant="outlined">Go back</Button>
      </div>
    </div>
  );
};

export default NotFound;
