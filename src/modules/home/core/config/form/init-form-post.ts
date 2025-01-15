import * as Yup from "yup";
import { PostForm } from "@/modules/home/core/types/post.type";

export const initFormPost: PostForm = {
  content: "",
  files: [],
};

export const PostFormSchema = Yup.lazy((obj) => {
  return Yup.object({
    content: Yup.string()
      .trim()
      .when([], {
        is: () => obj.files || obj.files.length === 1,
        then: (schema) => schema.optional(),
        otherwise: (schema) => schema.required(),
      }),
    files: Yup.array()
      .transform((value) => {
        if (value && !Array.isArray(value)) {
          return Object.values(value);
        }
        return value;
      })
      .of(Yup.mixed().nullable())
      .when([], {
        is: () => !obj.content || obj.content.trim() === "",
        then: (schema) => schema.min(1, "Bạn phải nhập nội dung hoặc đính kèm tệp tin"),
        otherwise: (schema) => schema.optional(),
      }),
  });
});

export type FormPost = Yup.InferType<typeof PostFormSchema>;
