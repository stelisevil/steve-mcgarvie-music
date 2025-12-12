import classNames from "classnames";

type HeroBannerProps = { children: React.ReactNode; imagePath: string };

export const HeroBanner = ({ children, imagePath }: HeroBannerProps) => (
  <div
    className={classNames(
      "h-[320px] md:h-[550px] bg-cover bg-center text-white text-4xl md:text-6xl flex justify-center items-end p-6 md:p-12 font-semibold"
    )}
    style={{ backgroundImage: `url(/hero-images/${imagePath})` }}
  >
    {children}
  </div>
);
