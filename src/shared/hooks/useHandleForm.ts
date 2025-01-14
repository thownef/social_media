import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

import { setFormError } from "@/shared/lib";
import { HttpErrorCodeEnum } from "@/shared/core/enum/http-error-code.enum";

type HooksHandleForm = {
  onSubmit: (value: any, id?: number | string) => Promise<AxiosResponse<any, any>>;
  id?: number | string;
  setError: any;
  isValidForm: boolean;
  pathNavigate?: string;
  fnAfterSubmit?: () => void;
  onReloadTable?: (data: any) => void;
};

const useHandleForm = ({ onSubmit, id, setError, isValidForm, pathNavigate, fnAfterSubmit, onReloadTable }: HooksHandleForm) => {
  const navigate = useNavigate();

  const onSubmitForm = async (value: any) => {
    try {
      if (isValidForm) {
        const res = await onSubmit(value, id);
        fnAfterSubmit && fnAfterSubmit();
        pathNavigate && navigate(pathNavigate, { replace: true });
        onReloadTable && onReloadTable(res?.data?.data);
      }
    } catch (err: any) {
      if (err.code === HttpErrorCodeEnum.UNPROCESSABLE_CONTENT) {
        const { errors = [] } = err;
        errors.length && setFormError(setError, errors);
      }
    }
  };

  return {
    onSubmitForm,
  };
};

export default useHandleForm;
