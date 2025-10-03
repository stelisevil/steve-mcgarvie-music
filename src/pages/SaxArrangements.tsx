import classNames from "classnames";

export const SaxArrangements = () => (
  <div className="w-full">
    <div
      className={classNames(
        "h-[550px] bg-cover bg-center text-white text-6xl flex justify-center items-end p-12 font-semibold",
        `bg-[url(/hero-images/choir.png)]`
      )}
    >
      Music
    </div>
  </div>
);
