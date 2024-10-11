import { FormSignIn, initForm, SignInSchema } from "@/modules/auth/pages/core/form/signin-form";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";
import { FormInput } from "@/shared/components/Input";

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSignIn>({
    defaultValues: initForm,
    resolver: yupResolver(SignInSchema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<FormSignIn> = async (values: FormSignIn) => {
    
  };
  return (
    <div className="flex w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[396px] flex flex-col bg-white p-6 rounded-lg shadow-md gap-3">
        <FormInput control={control} label="Email" name="email" />
        <FormInput control={control} label="Password" name="password" />
        <button className="w-full p-3 mb-3 text-white bg-blue-600 rounded-md text-2xl font-semibold">Log in</button>
        <Link to="#" className="block mb-3 text-center text-blue-600">
          Forgotten password?
        </Link>
        <hr className="my-3" />
        <div className="text-center">
          <button className="w-fit p-2 text-white bg-green-600 rounded-md text-xl font-medium">Create new account</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
