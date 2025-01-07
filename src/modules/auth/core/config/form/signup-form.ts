import * as Yup from "yup";
import { AuthRegister } from "@/modules/auth/core/types/auth.type";
import dayjs from "dayjs";

export const initForm: AuthRegister = {
  loginType: 1,
  firstName: "",
  lastName: "",
  dateOfBirth: dayjs(),
  gender: 1,
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dateOfBirth: Yup.mixed().required("Date of Birth is required"),
  gender: Yup.number().required("Gender is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref('password')], "Passwords not match"),
});

export type FormSignUp = Yup.InferType<typeof SignUpSchema>;
