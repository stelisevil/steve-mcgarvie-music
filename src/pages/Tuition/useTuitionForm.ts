import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export type FormValues = {
  name: string;
  email: string;
  pupilName?: string;
  pupilAge?: string;
  instrument?: string;
  location?: string;
  message: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object({
  name: yup.string().required("Name is required."),
  email: yup.string().required("Email address is required."),
  pupilName: yup.string(),
  pupilAge: yup.string(),
  instrument: yup.string(),
  location: yup.string(),
  message: yup.string().required("Message is required."),
});

const defaultValues = {
  name: "",
  email: "",
  pupilName: "",
  pupilAge: "",
  instrument: "",
  location: "",
  message: "",
};

export const useTuitionForm = () => {
  const context = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return { context };
};
