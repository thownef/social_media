import { DateValue } from "@internationalized/date";

export type AuthLogin = {
  email: string;
  password: string;
};

export type AuthRegister = {
  loginType: number;
  firstName: string;
  lastName: string;
  dateOfBirth: DateValue;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
};
