import type { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="px-8 py-4 font-semibold text-white border rounded-lg cursor-pointer bg-brand-dark border-brand-light"
      {...props}
    />
  );
};
