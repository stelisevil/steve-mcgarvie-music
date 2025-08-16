import classNames from "classnames";
import type { MenuTitles } from ".";

type DropdownProps = {
  title: MenuTitles;
  menuOpen: MenuTitles | null;
  handleMenuState: (arg: MenuTitles) => void;
  children: React.ReactNode;
};

export const Dropdown = ({
  title,
  menuOpen,
  handleMenuState,
  children,
}: DropdownProps) => {
  const isOpen = menuOpen === title;

  return (
    <div className="relative">
      <button
        className={classNames(
          "cursor-pointer hover:underline hover:text-brand-light",
          isOpen && "underline text-brand-light"
        )}
        onClick={() => {
          handleMenuState(title);
        }}
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-[calc(100%+12px)] flex flex-col gap-2 p-4 text-right border-2 border-brand-light bg-brand-dark whitespace-nowrap">
          {children}
        </div>
      )}
    </div>
  );
};
