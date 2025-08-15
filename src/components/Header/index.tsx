import { Link } from "react-router";

export const Header = () => (
  <header className="flex justify-between p-1 text-xs font-bold text-white md:p-6 md:text-2xl bg-purple-950">
    <div>Steve McGarvie Music</div>
    <div>
      <Link to="/">Home</Link> - <Link to="/choir">Choir</Link> -{" "}
      <Link to="/music">Music</Link> - <Link to="/about">About</Link>
    </div>
  </header>
);
