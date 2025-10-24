import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export type FormValues = {
  name: string;
  email: string;
  songTitle: string;
  originalArtist: string;
  abilityLevel?: string;
  arrangementType: string;
  instruments?: string;
  message: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object({
  name: yup.string().required("Name is required."),
  email: yup.string().required("Email address is required."),
  songTitle: yup.string().required("Song title is required."),
  originalArtist: yup.string().required("Original artist is required."),
  abilityLevel: yup.string(),
  arrangementType: yup.string().required("Arrangement type is required."),
  instruments: yup.string(),
  message: yup.string().required("Message is required."),
});

const defaultValues = {
  name: "",
  email: "",
  songTitle: "",
  originalArtist: "",
  abilityLevel: "",
  arrangementType: "",
  instruments: "",
  message: "",
};

export const useArrangementForm = () => {
  const context = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return { context };
};
