import * as changeCase from "change-case";

type ErrorsData = {
  field: string;
  message: string[];
};

export const setFormError = (setError: any, errors: ErrorsData[]) => {
  const transformErrors = errors.map((item) => ({
    field: changeCase.camelCase(item.field),
    message: item.message[0],
  }));

  transformErrors.forEach((err) => {
    setError(err.field, { type: "custom", message: err.message });
  });
};
