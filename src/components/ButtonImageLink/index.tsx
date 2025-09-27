import { Link } from "react-router";

type ButtonImageLinkProps = {
  to: string;
  imagePath: string;
  buttonText: string;
};

export const ButtonImageLink = ({
  to,
  imagePath,
  buttonText,
}: ButtonImageLinkProps) => (
  <Link
    to={to}
    className="h-[320px] w-[320px] bg-gray-200 bg-cover bg-center flex justify-center items-end p-8"
    style={{ backgroundImage: `url(/button-images/${imagePath})` }}
  >
    <div className="px-6 py-2 text-xl font-semibold text-white bg-black border-2 rounded-sm border-brand-light">
      {buttonText}
    </div>
  </Link>
);
