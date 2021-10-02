import React from "react";

export const UseFormField = () => {
  const [value, setValue] = React.useState<any>([""]);
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue([e.target.value]),

    []
  );
  return { value, onChange, setValue };
};
