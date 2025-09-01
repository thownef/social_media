import _ from "lodash";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <FormInput className="w-full mb-4" control={control} placeholder="Email" name="email" />

      <FormInput className="w-full mb-4" control={control} placeholder="Password" name="password" type="password" />

      <div className="w-full flex justify-end mb-8">
        <Link to="" className="text-[#5D6778] text-xs hover:text-[#0C1024] hover:underline transition-colors">
          Forget Password?
        </Link>
      </div>

      <Button className="w-full mb-8 h-10 bg-[#0C1024] text-white font-normal" type="submit">
        Log in
      </Button>

      <div className="w-full text-center">
        <span className="text-[#4B5669] text-sm">
          Don't have an account?{" "}
          <Link to={PagePath.REGISTER} className="text-[#0C1024] hover:underline font-medium">
            Sign up
          </Link>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
