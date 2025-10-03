import { Link } from "react-router";

export const RequestASongLink = () => (
  <Link
    to="/music"
    className="self-center px-6 py-2 text-xl font-semibold text-white border-2 rounded-sm bg-brand-dark border-brand-light"
  >
    Request a song
  </Link>
);
