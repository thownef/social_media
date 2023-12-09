export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  avatar: string;
  coverPicture: string;
  gender: string;
  followers: string[];
  followings: string[];
  isAdmin: boolean;
  description: string;
  city: string;
  province: string;
  district: string;
  createAt: Date;
  updateAt: Date;
}
