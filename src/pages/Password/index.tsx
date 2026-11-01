import wellVersed from "/well-versed.png";
import { useState } from "react";

import { HeroBanner } from "../../components/HeroBanner";
import { useGetPassword, type PasswordModel } from "./useGetPassword";
import { usePasswordForm, type FormValues } from "./usePasswordForm";
import { FormLayout } from "../../components/FormLayout";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";

type PasswordProps = {
  passwordModel: PasswordModel;
  children: React.ReactNode;
};

export const Password = ({ passwordModel, children }: PasswordProps) => {
  const [password, setPassword] = useState<string>("");

  const { loading, datoResponse } = useGetPassword(passwordModel);
  const { context } = usePasswordForm();

  const onSubmit = (data: FormValues) => {
    setPassword(data.password);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = context;

  if (loading) return null;

  if (datoResponse === password || datoResponse === "") return children;

  return (
    <div className="w-full">
      <HeroBanner imagePath="choir.png">
        <img src={wellVersed} alt="Well-Versed Community Choir Logo" />
      </HeroBanner>
      <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
        <div className="px-8 text-5xl font-semibold">Enter Password</div>
        <div className="px-8 text-xl">
          This rehearsal space is password protected. Please enter the password
          provided to access
        </div>
        <form
          className="flex flex-col items-center justify-center gap-4 px-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormLayout
            error={errors.password}
            name="password"
            label="Password"
            required
          >
            <TextInput
              {...register("password")}
              id="password"
              type="password"
            />
          </FormLayout>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
