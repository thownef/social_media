import { Input } from "@heroui/react";
import { Controller } from "react-hook-form";

type FormInputProps = {
  control: any;
  name: string;
  label?: string;
  labelPlacement?: "inside" | "outside" | "outside-left";
  placeholder?: string;
  className?: string;
  classNames?: { [key: string]: any };
  type?: "text" | "email" | "url" | "password" | "tel" | "search" | "file";
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "bordered" | "faded" | "underlined";
  isRequired?: boolean;
  isDisabled?: boolean;
};

const FormInput = (props: FormInputProps) => {
  const {
    control,
    name,
    label = "",
    labelPlacement = "outside",
    placeholder = "",
    className = "",
    classNames,
    type = "text",
    size = "md",
    variant = "bordered",
    isRequired = false,
    isDisabled = false,
  } = props;

  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <Input
            {...field}
            label={label}
            labelPlacement={labelPlacement}
            placeholder={placeholder}
            className={className}
            classNames={{...classNames}}
            type={type}
            size={size}
            variant={variant}
            errorMessage={error?.message}
            isInvalid={!!error}
            isRequired={isRequired}
            isDisabled={isDisabled}
          />
        );
      }}
    />
  );
};

export default FormInput;
