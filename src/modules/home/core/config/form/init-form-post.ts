import * as Yup from "yup";
import { PostForm } from "@/modules/home/core/types/post.type";

export const initFormPost: PostForm = {
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
