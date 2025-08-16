import { useState } from "react";
import { Link } from "react-router";
import { useClickOutside } from "../../utils/useClickOutside";
import { Dropdown } from "./Dropdown";
import { MenuLink } from "./MenuLink";

export type MenuTitles = "Choir" | "Music" | "About";

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
          <Link
            className="hover:underline hover:text-brand-light"
            to="/"
            onClick={() => setMenuOpen(null)}
          >
            Home
          </Link>
          -
          <Dropdown
            title="Choir"
            menuOpen={menuOpen}
            handleMenuState={handleMenuState}
          >
            <MenuLink to="/choir">Choir Information</MenuLink>
            <MenuLink to="/choir/rehearsal">Rehearsal Space</MenuLink>
          </Dropdown>
          -
          <Dropdown
            title="Music"
            menuOpen={menuOpen}
            handleMenuState={handleMenuState}
          >
            <MenuLink to="/music">Request / Purchase</MenuLink>
            <MenuLink to="/music/choral-arrangements">
              Choral Arrangements
            </MenuLink>
            <MenuLink to="/music/pop-arrangements">Pop Arrangements</MenuLink>
            <MenuLink to="/music/sax-arrangements">Sax Arrangements</MenuLink>
          </Dropdown>
          -
          <Dropdown
            title="About"
            menuOpen={menuOpen}
            handleMenuState={handleMenuState}
          >
            <MenuLink to="/about">Biography</MenuLink>
            <MenuLink to="/about/bands">Bands</MenuLink>
            <MenuLink to="/about/tuition">Tuition</MenuLink>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};
