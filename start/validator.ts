import { validator } from "@ioc:Adonis/Core/Validator";

validator.rule(
  "defaultTo",
  (value, { defaultValue }, { mutate }) => {
    if (value === null) {
      mutate(defaultValue);
    }
  },
  ([defaultValue]) => {
    return {
      allowUndefineds: true,
      compiledOptions: {
        defaultValue: defaultValue,
      },
    };
  }
);
