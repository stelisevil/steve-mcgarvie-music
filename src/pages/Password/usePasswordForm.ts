import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export type FormValues = {
  password: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object({
  password: yup.string().required(""),
});

const defaultValues = {
  password: "",
};

export const usePasswordForm = () => {
  const context = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return { context };
};
