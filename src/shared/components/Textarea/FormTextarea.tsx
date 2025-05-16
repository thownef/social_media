import { Controller } from "react-hook-form";
import { Textarea } from "@heroui/react";

type FormTextareaProps = {
  control: any;
  name: string;
  label?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  radius?: "sm" | "md" | "lg";
  placeholder: string;
  className?: string;
  classNames?: { [key: string]: any };
  isRequired?: boolean;
  minRows?: number;
  maxRows?: number;
};

const FormTextarea = ({ control, name, placeholder, className, label = "", variant = "bordered", radius = "md", isRequired = false, classNames, minRows = 1, maxRows = 8 }: FormTextareaProps) => {
  return (
    <Controller
      name="content"
      control={control}
      render={({ field }) => (
        <Textarea
          {...field}
          label={label}
          name={name}
          variant={variant}
          radius={radius}
          placeholder={placeholder}
          className={className}
          classNames={classNames}
          minRows={minRows}
          maxRows={maxRows}
          isRequired={isRequired}
        />
      )}
    />
  );
};

export default FormTextarea;
