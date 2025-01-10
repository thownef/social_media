import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useGetQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = useMemo(() => {
    return Object.fromEntries([...searchParams]);
  }, [searchParams]);

  return {
    queryParams,
    onSetSearchParams: setSearchParams,
  };
};

export default useGetQueryParams;
