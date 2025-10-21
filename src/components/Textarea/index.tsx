import type { TextareaHTMLAttributes } from "react";

export const Textarea = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  return (
    <textarea
      className="w-full px-3 py-2 border border-gray-500 rounded-lg placeholder:text-gray-400"
      rows={4}
      {...props}
    />
  );
};
