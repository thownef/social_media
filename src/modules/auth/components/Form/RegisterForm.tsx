import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { Button, Grid2 as Grid } from "@mui/material";
import { FormInput } from "@/shared/components/Input";
import DatePicker from "@/shared/components/DatePicker/DatePicker";
import FormRadio from "@/shared/components/Radio/FormRadio";
import { GenderOption } from "@/modules/auth/core/config/select-option";
import { FormSignUp, initForm, SignUpSchema } from "@/modules/auth/core/config/form/signup-form";
import { Link } from "react-router-dom";
import { PagePath } from "@/shared/core/enum";
import useHandleForm from "@/shared/hooks/useHandleForm";
import { register } from "@/modules/auth/services/auth.service";

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
    return await register(values);
  };

  const { onSubmitForm } = useHandleForm({
    onSubmit: handleSubmitForm,
    setError,
    isValidForm: _.isEmpty(errors),
    pathNavigate: PagePath.HOME,
  });

  return (
    <div className="flex w-full">
      <form onSubmit={handleSubmit(onSubmitForm)} className="w-[572px] bg-white p-8 rounded-lg shadow-md gap-3 z-50">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-medium text-center leading-10 mb-8">Sign Up</h1>
          <Grid container spacing={2}>
            <Grid size={6}>
              <FormInput control={control} label="First Name" name="firstName" />
            </Grid>
            <Grid size={6}>
              <FormInput control={control} label="Last Name" name="lastName" />
            </Grid>
            <Grid size={6}>
              <DatePicker label="Date of Birth" name="dateOfBirth" control={control} />
            </Grid>
            <Grid size={6} className="flex items-center">
              <FormRadio name="gender" options={GenderOption} control={control} />
            </Grid>
            <Grid size={12}>
              <FormInput control={control} label="Email" name="email" />
            </Grid>
            <Grid size={12}>
              <FormInput control={control} label="Phone" name="phone" />
            </Grid>
            <Grid size={12}>
              <FormInput control={control} label="Password" name="password" />
            </Grid>
            <Grid size={12}>
              <FormInput control={control} label="Confirm Password" name="confirmPassword" />
            </Grid>
          </Grid>
        </div>
        <div className="mt-8">
          <Button
            variant="contained"
            size="large"
            className="!w-full !py-3 !normal-case !text-base !bg-[#E86D2A] !rounded-lg !font-medium hover:!bg-[#d65d1e]"
            type="submit"
          >
            Register
          </Button>
        </div>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to={PagePath.AUTH} className="text-[#E86D2A] hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
