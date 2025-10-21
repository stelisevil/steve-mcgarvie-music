import type { SelectHTMLAttributes } from "react";

export const Select = (props: SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <div className="relative">
      <select
        className="w-full px-3 py-2 border border-gray-500 rounded-lg appearance-none placeholder:text-gray-400"
        {...props}
      />
      <div className="absolute inset-y-0 flex items-center pointer-events-none right-2">
        <svg
          className="w-4 h-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
