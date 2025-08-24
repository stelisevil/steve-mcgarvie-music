import classNames from "classnames";
import wellVersed from "../../public/well-versed.png";

export const Rehearsal = () => (
  <div className="w-full">
    <div
      className={classNames(
        "h-[550px] bg-cover bg-center text-white text-6xl flex justify-center items-end p-12 font-bold",
        `bg-[url(/hero-images/choir.png)]`
      )}
    >
      <img src={wellVersed} alt="Well-Versed Community Choir Logo" />
    </div>
    <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
      <div className="px-8 text-5xl font-bold">Rehearsal Space</div>
      <div className="px-8 text-xl">
        This is where members of Well-Versed Community Choir can look for
        resources, including audio tracks for individual parts of songs we are
        currently rehearsing.
      </div>
      <div className="px-8 text-5xl font-bold">Music player goes here!</div>
    </div>
  </div>
);
