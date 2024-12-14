import * as Yup from "yup";

import { type AuthLogin } from "@/modules/auth/pages/core/types/auth.type";

export const initForm: AuthLogin = {
  email: "",
  password: "",
};

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required("IDが入力されていません。"),
  password: Yup.string().required("パスワードが入力されていません。"),
});

export type FormSignIn = Yup.InferType<typeof SignInSchema>;
