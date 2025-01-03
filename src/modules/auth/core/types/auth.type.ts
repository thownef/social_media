import { Dayjs } from "dayjs";

export type AuthLogin = {
  email: string;
  password: string;
};

export type AuthRegister = {
  loginType: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Dayjs;
  gender: number;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};
