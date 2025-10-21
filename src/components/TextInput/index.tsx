import type { InputHTMLAttributes } from "react";

export const TextInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="w-full px-3 py-2 border border-gray-500 rounded-lg placeholder:text-gray-400"
      type="text"
      {...props}
    />
  );
};
