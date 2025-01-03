import { RootState } from "@/shared/store";
import { useSelector } from "react-redux";

const Loader = () => {
    const loading = useSelector((state: RootState) => state.loading.isLoading)

    return loading ? (
        <div className="w-full h-full fixed bg-[#0000003b] z-[9999]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
            </div>
        </div>
    ) : null;
};

export default Loader;
