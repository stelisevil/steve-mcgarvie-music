import classNames from "classnames";

type HeroBannerProps = { children: React.ReactNode; imagePath: string };

export const HeroBanner = ({ children, imagePath }: HeroBannerProps) => (
  <div
    className={classNames(
      "h-[550px] bg-cover bg-center text-white text-6xl flex justify-center items-end p-12 font-semibold",
      `bg-[url(/hero-images/${imagePath})]`
    )}
  >
    {children}
  </div>
);
