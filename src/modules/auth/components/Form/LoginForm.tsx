import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { Link, useNavigate } from "react-router-dom";
import { FormInput } from "@/shared/components/Input";
import { FormSignIn, initForm, SignInSchema } from "@/modules/auth/core/config/form/signin-form";
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
      const { user, accessToken } = res.data.data;

      dispatch(loginStore({ user, accessToken }));
      navigate("/");
    }
    return res;
  };

  const { onSubmitForm } = useHandleForm({
    onSubmit,
    setError,
    isValidForm: _.isEmpty(errors),
    pathNavigate: PagePath.HOME,
  });

  return (
    <div className="flex w-full">
      <form onSubmit={handleSubmit(onSubmitForm)} className="w-[572px] bg-white p-8 rounded-lg shadow-md gap-3 z-50">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-medium text-center leading-10 mb-8">Sign In</h1>
          <FormInput control={control} label="Email" name="email" />
          <FormInput control={control} label="Password" name="password" />
          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-[#E86D2A] hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <Button
            variant="contained"
            size="large"
            className="!w-full !py-3 !normal-case !text-base !bg-[#E86D2A] !rounded-lg !font-medium hover:!bg-[#d65d1e]"
            type="submit"
          >
            Sign In
          </Button>
        </div>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to={PagePath.REGISTER} className="text-[#E86D2A] hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
