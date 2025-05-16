import { DatePicker } from "@heroui/react";
import { Controller } from "react-hook-form";

type DatePickerProps = {
  label: string;
  name: string;
  control: any;
  labelPlacement?: "inside" | "outside" | "outside-left";
  variant?: "flat" | "bordered" | "faded" | "underlined";
  className?: string;
  classNames?: { [key: string]: any };
  showMonthAndYearPickers?: boolean;
  isRequired?: boolean;
};

const FormDatePicker = ({
  label,
  name,
  control,
  isRequired = false,
  labelPlacement = "outside",
  variant = "bordered",
  showMonthAndYearPickers = false,
  className,
  classNames,
}: DatePickerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          {...field}
          label={label}
          className={className}
          classNames={classNames}
          showMonthAndYearPickers={showMonthAndYearPickers}
          errorMessage={error?.message}
          isInvalid={!!error}
          labelPlacement={labelPlacement}
          variant={variant}
          isRequired={isRequired}
        />
      )}
    />
  );
};

export default FormDatePicker;
