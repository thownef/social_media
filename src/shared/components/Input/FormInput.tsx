import { TextField, TextFieldPropsSizeOverrides, TextFieldVariants } from "@mui/material";
import { Controller } from "react-hook-form";

type FormInputProps = {
  control: any;
  name: string;
  label?: string;
  variant?: TextFieldVariants;
  className?: string;
  type?: string;
  size?: "small" | "medium";
  classNames?: { [key: string]: any };
  isRequired?: boolean;
  isDisabled?: boolean;
};

const FormInput = (props: FormInputProps) => {
  const { control, name, label = "", variant = "outlined", className = "", type = "", isRequired, isDisabled, size = "medium" } = props;

  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            {...field}
            className={className}
            label={label}
            variant={variant}
            type={type}
            size={size}
            fullWidth
            disabled={isDisabled}
            aria-label={name}
            error={!!error}
            helperText={error?.message}
            required={isRequired}
          />
        );
      }}
    />
  );
};

export default FormInput;
