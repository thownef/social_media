import * as Yup from "yup";
import { FileImage } from "@/shared/core/types/common.type";

export type InitFormPost = {
  content: string;
  files: FileImage[] | File[];
};

export const initFormPost: InitFormPost = {
  content: "",
  files: [],
};

export const PostFormSchema = Yup.object().shape({
  content: Yup.string().optional(),
  files: Yup.array().transform((value) => {
    if (value && !Array.isArray(value)) {
      return Object.values(value);
    }
    return value;
  }).of(
    Yup.mixed().nullable()
  ).optional(),
});

export type FormPost = Yup.InferType<typeof PostFormSchema>;
