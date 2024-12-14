import RoutesApp from "@/routes";
import Loader from "@/shared/components/Loader/Loader";
import Notification from "@/shared/components/Notification/Notification";

function App() {
  return (
    <>
      <Notification />
      <Loader />
      <RoutesApp />
    </>
  );
}

export default App;
