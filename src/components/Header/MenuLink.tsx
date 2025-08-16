import { Link } from "react-router";

type MenuLinkProps = { to: string; children: string };

export const MenuLink = ({ to, children }: MenuLinkProps) => (
  <Link className="hover:text-brand-light" to={to}>
    {children}
  </Link>
);
