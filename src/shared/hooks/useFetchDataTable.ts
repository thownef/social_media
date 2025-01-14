import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { transformQueryParams, transformQueryString } from "@/shared/utils";
import { Pagination } from "@/shared/core/types";

type ReturnedHooksData<T> = {
  onFetch: (params: { [key: string]: any }) => void;
  dataTable: T[];
  pagination: Pagination | {};
  queryParams: { [key: string]: any };
  onSetQueryParams: React.Dispatch<
    React.SetStateAction<{
      [key: string]: any;
    }>
  >;
  onResetDataTable: () => void;
  onPrependData: (newData: T) => void;
  onRemoveData: (id: number) => void;
};

type FnFetchData<T> = (params: { [key: string]: any }) => Promise<{
  pagination: Pagination;
  data: T[];
} | null>;

const useFetchDataTable = <T extends { id: number }>(
  fetchData: FnFetchData<T>,
  perPage: number = 10,
  isSetQueryString: boolean = false
): ReturnedHooksData<T> => {
  const navigate = useNavigate();
  const [dataTable, setDataTable] = useState<T[]>([]);
  const [pagination, setPagination] = useState<Pagination | {}>({});
  const [queryParams, setQueryParams] = useState<{ [key: string]: any }>({});
  const fetch = useCallback(
    async (params: any) => {
      const { page = 1, ...otherParams } =
        "page" in params ? { ...queryParams, ...params } : params;
      const transformParams = transformQueryParams(otherParams);
      const res = await fetchData({
        ...transformParams,
        page,
        perPage,
      });

      if (!res) return;
      const { pagination, data } = res;

      data && setDataTable(data);
      pagination && setPagination(pagination);
      isSetQueryString && handleNavigate({ ...otherParams, page });
    },
    [dataTable],
  );
  const handleNavigate = useCallback(
    (params: any) => {
      if (!_.isEqual(params, queryParams)) {
        navigate(
          {
            pathname: ".",
            search: transformQueryString(params),
          },
          { replace: true },
        );
      }
    },
    [dataTable],
  );

  const handleResetDataTable = useCallback(() => {
    setDataTable([]);
  }, []);

  const handlePrependData = useCallback((newData: T) => {
    setDataTable(prev => [newData, ...prev]);
  }, []);

  const handleRemoveData = useCallback((id: number) => {
    setDataTable(prev => prev.filter(item => item.id !== id));
  }, []);

  return {
    onFetch: fetch,
    dataTable,
    pagination,
    queryParams,
    onSetQueryParams: setQueryParams,
    onResetDataTable: handleResetDataTable,
    onPrependData: handlePrependData,
    onRemoveData: handleRemoveData,
  };
};

export default useFetchDataTable;
