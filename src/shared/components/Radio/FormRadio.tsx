import { Control, Controller } from "react-hook-form";
import { RadioGroup, FormControlLabel, Radio, FormHelperText, FormControl, FormLabel } from "@mui/material";
import { OptionSelect } from "@/shared/core/types";

type FormRadioProps = {
  name: string;
  options: OptionSelect[];
  control: Control<any>;
  row?: boolean;
};

const FormRadio = ({ name, options, control, row = true }: FormRadioProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <RadioGroup row={row} aria-labelledby={`${name}-${field.value}`} {...field}>
            {options.map((option) => (
              <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
            ))}
          </RadioGroup>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default FormRadio;
