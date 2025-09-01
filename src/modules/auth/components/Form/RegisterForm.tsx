import _ from "lodash";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "@/shared/components/Input";
import { GenderOption } from "@/modules/auth/core/config/select-option";
import { FormSignUp, initForm, SignUpSchema } from "@/modules/auth/core/config/form/signup-form";
import { PagePath } from "@/shared/core/enum";
import useHandleForm from "@/shared/hooks/useHandleForm";
import { register } from "@/modules/auth/services/auth.service";
import FormDatePicker from "@/shared/components/DatePicker/FormDatePicker";
import FormRadio from "@/shared/components/Radio/FormRadio";

const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FormSignUp>({
    values: initForm,
    resolver: yupResolver(SignUpSchema),
    mode: "all",
  });

  const handleSubmitForm = async (values: FormSignUp) => {
    const transformValues: FormSignUp = {
      ...values,
      dateOfBirth: values.dateOfBirth.toString(),
    };
    return await register(transformValues);
  };

  const { onSubmitForm } = useHandleForm({
    onSubmit: handleSubmitForm,
    setError,
    isValidForm: _.isEmpty(errors),
    pathNavigate: PagePath.HOME,
  });

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmitForm)} className="w-full flex flex-col gap-3">
        <div className="flex gap-3">
          <FormInput control={control} label="First Name" name="firstName" placeholder="Enter your first name" isRequired />
          <FormInput control={control} label="Last Name" name="lastName" placeholder="Enter your last name" isRequired />
        </div>
        <div className="flex gap-3">
          <FormDatePicker label="Date of Birth" name="dateOfBirth" control={control} showMonthAndYearPickers isRequired />
          <FormRadio className="w-full" label="Gender" name="gender" options={GenderOption} control={control} isRequired />
        </div>
        <FormInput control={control} label="Email" name="email" placeholder="Enter your email" isRequired />
        <FormInput control={control} label="Password" name="password" type="password" placeholder="Enter your password" isRequired />
        <FormInput
          control={control}
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          isRequired
        />

        <Button
          disabled={!_.isEmpty(errors)}
          className="w-full my-4 h-10 bg-[#0C1024] text-white font-normal"
          type="submit"
        >
          Create Account
        </Button>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link to={PagePath.AUTH} className="text-[#0C1024] hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
