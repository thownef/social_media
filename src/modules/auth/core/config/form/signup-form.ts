import * as Yup from "yup";
import { AuthRegister } from "@/modules/auth/core/types/auth.type";
import { getLocalTimeZone, today } from "@internationalized/date";

export const initForm: AuthRegister = {
  loginType: 1,
  firstName: "",
  lastName: "",
  dateOfBirth: today(getLocalTimeZone()),
  gender: "1",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  dateOfBirth: Yup.mixed().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords not match"),
});

export type FormSignUp = Yup.InferType<typeof SignUpSchema>;
