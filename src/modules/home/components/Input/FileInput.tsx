import { Controller } from "react-hook-form";

type FileInputProps = {
  control: any;
  name: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  accept?: string;
  multiple?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInput = ({
  control,
  name,
  inputRef,
  onChange,
  ...props
}: FileInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange: fieldOnChange, ...field } }) => (
        <input
          {...field}
          {...props}
          type="file"
          ref={inputRef}
          onChange={(e) => {
            fieldOnChange(e.target.files);
            onChange?.(e);
          }}
          className="hidden"
        />
      )}
    />
  );
};

export default FileInput;
