import _ from "lodash";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "@/shared/components/Input";
import { FormSignIn, initForm, SignInSchema } from "@/modules/auth/core/config/form/signin-form";
import { PagePath } from "@/shared/core/enum";
import useHandleForm from "@/shared/hooks/useHandleForm";
import { login as loginStore } from "@/shared/store/authSlice";
import { login } from "@/modules/auth/services/auth.service";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
      const { user, accessToken } = res.data.data;

      dispatch(loginStore({ user, accessToken }));
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
    return res;
  };

  const { onSubmitForm } = useHandleForm({
    onSubmit,
    setError,
    isValidForm: _.isEmpty(errors),
  });

  return (
    <div className="flex w-full justify-center">
      <form onSubmit={handleSubmit(onSubmitForm)} className="w-[460px] bg-white p-8 gap-3">
        <div className="flex flex-col gap-3">
          <h1 className="!text-3xl font-medium text-center leading-10 mb-8">Sign In</h1>
          <FormInput control={control} label="Email" name="email" placeholder="Enter your email" isRequired />
          <FormInput control={control} label="Password" name="password" type="password" placeholder="Enter your password" isRequired />
          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-[rgb(82,103,211)] hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <Button
            type="submit"
            className="w-full py-3 text-base bg-[rgb(82,103,211)] rounded-lg font-medium text-white hover:bg-[rgb(82,82,211)] transition-colors"
          >
            Sign In
          </Button>
        </div>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to={PagePath.REGISTER} className="text-[rgb(82,103,211)] hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
