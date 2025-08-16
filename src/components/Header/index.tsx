import { useState } from "react";
import { Link } from "react-router";
import { useClickOutside } from "../../utils/useClickOutside";

type MenuTitles = "Choir" | "Music" | "About";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<MenuTitles | null>(null);

  const handleMenuState = (menuTitle: MenuTitles) => {
    setMenuOpen((prevState) => (prevState === menuTitle ? null : menuTitle));
  };

  const handleClickOutside = () => setMenuOpen(null);

  const ref = useClickOutside<HTMLDivElement>(handleClickOutside);

  return (
    <header className="p-1 text-xs font-bold text-white md:p-6 md:text-2xl bg-brand-dark">
      <div className="flex justify-between mx-auto max-w-7xl">
        <div>
          Steve McGarvie <span className="text-brand-light">Music</span>
        </div>
        <div ref={ref} className="flex flex-row gap-1 shrink-0">
          <Link to="/" onClick={() => setMenuOpen(null)}>
            Home
          </Link>
          -
          <Dropdown
            title="Choir"
            menuOpen={menuOpen}
            handleMenuState={handleMenuState}
          >
            <Link className="flex" to="/choir">
              Choir Information
            </Link>
            <Link to="/choir/rehearsal">Rehearsal Space</Link>
          </Dropdown>
          -
          <Dropdown
            title="Music"
            menuOpen={menuOpen}
            handleMenuState={handleMenuState}
          >
            <Link to="/music">Request / Purchase</Link>
            <Link to="/music/choral-arrangements">Choral Arrangements</Link>
            <Link to="/music/pop-arrangements">Pop Arrangements</Link>
            <Link to="/music/sax-arrangements">Sax Arrangements</Link>
          </Dropdown>
          -
          <Dropdown
            title="About"
            menuOpen={menuOpen}
            handleMenuState={handleMenuState}
          >
            <Link to="/about">Biography</Link>
            <Link to="/about/bands">Bands</Link>
            <Link to="/about/tuition">Tuition</Link>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

type DropdownProps = {
  title: MenuTitles;
  menuOpen: MenuTitles | null;
  handleMenuState: (arg: MenuTitles) => void;
  children: React.ReactNode;
};

const Dropdown = ({
  title,
  menuOpen,
  handleMenuState,
  children,
}: DropdownProps) => {
  const isOpen = menuOpen === title;
  return (
    <div className="relative">
      <button
        className="cursor-pointer"
        onClick={() => {
          handleMenuState(title);
        }}
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute right-0 flex flex-col gap-2 p-4 text-right border-2 border-brand-light bg-brand-dark whitespace-nowrap">
          {children}
        </div>
      )}
    </div>
  );
};
