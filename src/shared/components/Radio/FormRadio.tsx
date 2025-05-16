import { Controller } from "react-hook-form";
import { OptionSelect } from "@/shared/core/types";
import { Radio, RadioGroup } from "@heroui/react";

type FormRadioProps = {
  name: string;
  control: any;
  options: OptionSelect[];
  label: string;
  className?: string;
  classNames?: { [key: string]: any };
  orientation?: "horizontal" | "vertical";
  isRequired?: boolean;
};

const FormRadio = ({ name, options, control, label, isRequired = false, className, classNames, orientation = "horizontal" }: FormRadioProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <RadioGroup
          {...field}
          label={label}
          errorMessage={error?.message}
          isInvalid={!!error}
          className={className}
          classNames={classNames}
          isRequired={isRequired}
          orientation={orientation}
        >
          {options.map(({ label, value }) => (
            <Radio key={value} value={value.toString()}>
              {label}
            </Radio>
          ))}
        </RadioGroup>
      )}
    />
  );
};

export default FormRadio;
