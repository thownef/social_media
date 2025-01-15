import { decamelizeKeys } from "humps";

const useFormData = (data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(decamelizeKeys(key), data[key]);
  });

  return {
    formData,
  };
};

export default useFormData;
