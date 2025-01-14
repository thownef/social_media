import { Controller } from "react-hook-form";
import { InputBase } from "@mui/material";

type FormInputProps = {
  control: any;
  name: string;
  className?: string;
  placeholder?: string | undefined;
  isDisabled?: boolean;
};

const FormInputBase = (props: FormInputProps) => {
  const { control, name, className = "", placeholder = "", isDisabled } = props;

  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field }) => {
        return (
          <InputBase
            {...field}
            multiline
            className={className}
            fullWidth
            disabled={isDisabled}
            aria-label={name}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
};

export default FormInputBase;
