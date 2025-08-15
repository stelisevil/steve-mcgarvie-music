import { Link } from "react-router";

export const Header = () => (
  <header className="flex justify-between p-6 text-2xl font-bold text-white bg-purple-950">
    <div>Steve McGarvie Music</div>
    <div>
      <Link to="/">Home</Link> - <Link to="/choir">Choir</Link> -{" "}
      <Link to="/music">Music</Link> - <Link to="/about">About</Link>
    </div>
  </header>
);
