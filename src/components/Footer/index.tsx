import facebook from "./facebook.png";
import email from "./email.png";
import phone from "./phone.png";

export const Footer = () => (
  <footer className="p-1 text-xs font-semibold text-white md:p-6 md:text-2xl bg-brand-dark">
    <div className="flex justify-between mx-auto max-w-7xl">
      <div className="flex items-center">© 2025 by Steve McGarvie.</div>
      <div className="flex flex-row gap-2 md:gap-4">
        <div className="flex flex-row items-center gap-1 md:gap-3">
          <a href="mailto:steve@stevemcgarviemusic.com">
            <img className="md:max-h-8 max-h-4" src={email} alt="email" />
          </a>
          <a
            href="http://facebook.com/profile.php?id=61558071397513"
            target="_blank"
          >
            <img
              className="md:max-h-8 max-h-4"
              src={facebook}
              alt="facebook logo"
            />
          </a>
          <a href="tel:07817062951">
            <img className="md:max-h-8 max-h-4" src={phone} alt="phone" />
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <a className="mx-2" href="tel:07817062951">
            07817 062951
          </a>{" "}
          <span className="font-normal">(voicemail or text)</span>
        </div>
      </div>
    </div>
  </footer>
);
