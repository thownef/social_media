import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { Link, useNavigate } from "react-router-dom";
import { FormInput } from "@/shared/components/Input";
import { FormSignIn, initForm, SignInSchema } from "@/modules/auth/core/form/signin-form";
import { Button } from "@mui/material";
import { PagePath } from "@/shared/core/enum";
import useHandleForm from "@/shared/hooks/useHandleForm";
import { useDispatch } from "react-redux";
import { login as loginStore } from "@/shared/store/authSlice";
import { login } from "@/modules/auth/services/auth.service";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FormSignIn>({
    values: initForm,
    resolver: yupResolver(SignInSchema),
    mode: "all",
  });

  const onSubmit = async (values: FormSignIn) => {
    const res = await login(values);
    if (res?.data?.data) {
      const { user, accessToken, loginAt } = res.data.data;

      dispatch(loginStore({ user, accessToken, loginAt }));
      navigate("/");
    }
    return res
  };

  const { onSubmitForm } = useHandleForm({
    onSubmit: onSubmit,
    setError,
    isValidForm: _.isEmpty(errors),
    pathNavigate: PagePath.HOME,
  });

  return (
    <div className="flex w-full">
      <form onSubmit={handleSubmit(onSubmitForm)} className="w-[396px] flex flex-col bg-white p-6 rounded-lg shadow-md gap-3">
        <FormInput control={control} label="Email" name="email" />
        <FormInput control={control} label="Password" name="password" />
        <Button variant="contained" size="large" className="!normal-case !text-xl !bg-blue-600">
          Log in
        </Button>
        <Link to="#" className=" text-center text-blue-600">
          Forgotten password?
        </Link>
        <hr className="my-2" />
        <div className="text-center">
          <Button variant="contained" size="large" className="!normal-case !text-lg !bg-[#42b72a]">
            Create new account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
