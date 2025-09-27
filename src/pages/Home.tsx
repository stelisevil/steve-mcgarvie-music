import classNames from "classnames";
import { Link } from "react-router";
import { ButtonImageLink } from "../components/ButtonImageLink";

export const Home = () => (
  <div className="w-full">
    <div
      className={classNames(
        "h-[550px] bg-cover bg-center text-white text-6xl flex justify-center items-end p-12 font-bold",
        `bg-[url(/hero-images/home.png)]`
      )}
    >
      <span className="max-w-7xl">
        Choirs, bands, instrumental teaching, bespoke arrangements, and more!
      </span>
    </div>
    <div className="flex flex-col gap-12 py-12 mx-auto max-w-7xl">
      <div className="text-2xl/[48px] px-8">
        Welcome to the site! This is the place to find details of all of Steve's
        projects, including{" "}
        <Link to="/choir" className="font-bold underline">
          community choirs
        </Link>
        ,{" "}
        <Link to="/about/tuition" className="font-bold underline">
          private instrumental teaching
        </Link>{" "}
        and{" "}
        <Link to="/music" className="font-bold underline">
          musical arrangements
        </Link>{" "}
        for a range of ensembles.
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <ButtonImageLink to="/choir" imagePath="choir.png" buttonText="Choir" />
        <ButtonImageLink to="/music" imagePath="music.png" buttonText="Music" />
        <ButtonImageLink
          to="/about/bands"
          imagePath="bands.png"
          buttonText="Bands"
        />
      </div>
    </div>
  </div>
);
