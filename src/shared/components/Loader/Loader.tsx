import { RootState } from "@/shared/store";
import { Spinner } from "@heroui/react";
import { useSelector } from "react-redux";

const Loader = () => {
  const loading = useSelector((state: RootState) => state.loading.isLoading);

  return loading ? (
    <div className="w-full h-screen fixed top-0 left-0 bg-[#0000003b] z-[9999]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner />
      </div>
    </div>
  ) : null;
};

export default Loader;
