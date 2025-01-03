import { memo } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DatePickerMui } from "@mui/x-date-pickers/DatePicker";
import { Control, Controller } from "react-hook-form";

type DatePickerProps = {
  label: string;
  name: string;
  control: Control<any>;
  required?: boolean;
};

const DatePicker = memo(
  ({ label, name, control, required = false }: DatePickerProps) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          rules={{ required }}
          render={({ field, fieldState: { error } }) => (
            <DatePickerMui
              {...field}
              label={label}
              slotProps={{
                textField: {
                  error: !!error,
                  helperText: error?.message,
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    );
  },
  (prevProps, nextProps) => {
    if (
      prevProps.label === nextProps.label &&
      prevProps.name === nextProps.name
    ) {
      return true;
    }
    return false;
  }
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
