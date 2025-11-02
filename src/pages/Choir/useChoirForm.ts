import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export type FormValues = {
  name: string;
  email: string;
  location: string;
  message?: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object({
  name: yup.string().required("Name is required."),
  email: yup.string().required("Email address is required."),
  location: yup.string().required("Location is required."),
  message: yup.string(),
});

const defaultValues = {
  name: "",
  email: "",
  location: "",
  message: "",
};

export const useChoirForm = () => {
  const context = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return { context };
};
