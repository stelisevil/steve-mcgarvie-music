import { useState } from "react";
import { Link } from "react-router";

export const Header = () => (
  <header className="p-1 text-xs font-bold text-white md:p-6 md:text-2xl bg-brand-dark">
    <div className="flex justify-between mx-auto max-w-7xl">
      <div>
        Steve McGarvie <span className="text-brand-light">Music</span>
      </div>
      <div className="flex flex-row gap-1 shrink-0">
        <Link to="/">Home</Link>-<Dropdown />-<Link to="/music">Music</Link>-
        <Link to="/about">About</Link>
      </div>
    </div>
  </header>
);

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="cursor-pointer"
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        Choir
      </button>

      {isOpen && (
        <div className="absolute right-0 flex flex-col p-2 border-2 border-brand-light bg-brand-dark whitespace-nowrap">
          <Link className="flex" to="/choir">
            Choir Information
          </Link>
          <Link to="/choir/rehearsal">Rehearsal Space</Link>
        </div>
      )}
    </div>
  );
};
