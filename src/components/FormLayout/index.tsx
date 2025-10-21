import type { FieldError } from "react-hook-form";

type FormLayoutProps = {
  error: FieldError | undefined;
  name: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

export const FormLayout = ({
  error,
  name,
  label,
  required = false,
  children,
}: FormLayoutProps) => (
  <div className="flex flex-col w-full md:w-[600px] gap-2 md:flex-row">
    <label
      className="w-full pt-2 font-semibold border border-transparent md:w-1/3 text-start"
      htmlFor={name}
    >
      {label}
      {required && "*"}:
    </label>
    <div className="w-full md:w-2/3 text-start">
      {children}
      {error && <p className="text-sm text-red-700">{error.message}</p>}
    </div>
  </div>
);
