type ConfigRequest = {
  method: "post" | "get" | "put" | "delete";
  [key: string]: any;
};

export type BaseResponse<T = any> = {
  config: ConfigRequest;
  data: {
    status: number;
    success?: boolean;
    data: T;
    code?: number;
    url_return?: string;
  };
  status: number;
};

export type EnumTypeName = {
  [key: string]: string;
};

export type ResponseError = {
  code: string | number;
  message: string;
  config: ConfigRequest;
  response: BaseResponse;
};

export type OptionSelect = {
  value: number | string;
  label: string;
};

export type Pagination = {
  count: number;
  total: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  links: any;
};

export type FileImage = {
  id: number;
  name: string;
  link: string;
  type: string;
};
