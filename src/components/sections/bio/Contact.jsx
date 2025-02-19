import { CONTACT_TITLE_ARR, SOCIAL_LINKS, FOOTER_TEXT1_ARR, FOOTER_TEXT2_ARR } from "../../../utils/constants";
import { CONTACT_MOBILE, CONTACT_TABLET, CONTACT_DESKTOP } from "../../../assets/images/images";

const Contact = () => {
  return (
    <section className="container flex flex-col justify-between">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <picture className="w-full h-full">
          <source srcSet={CONTACT_MOBILE} type="image/webp" media="(max-width: 480px)" />
          <source srcSet={CONTACT_TABLET} type="image/webp" media="(min-width: 768px)" />
          <source srcSet={CONTACT_DESKTOP} type="image/webp" media="(min-width: 1200px)" />
          <img className="w-full h-full object-cover" src={CONTACT_MOBILE} alt="A portrait of me" />
        </picture>
      </div> */}
      <header className="w-full h-auto z-1">
        <h2 className="flex flex-col font-oswald-m text-huge text-white leading-small tracking-tighter">
          {CONTACT_TITLE_ARR.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </h2>
      </header>
      <div className="w-full h-auto mb-6 z-1">
        <ul className="flex justify-between w-full h-auto">
          {SOCIAL_LINKS.map((text, i) => (
            <li key={i} className="font-oswald-r text-small text-white">
              {text}
            </li>
          ))}
        </ul>
      </div>
      <footer className="flex flex-col justify-center items-center w-full h-auto mb-4 leading-xtiny z-1">
        {FOOTER_TEXT1_ARR.map((text, i) => (
          <p key={i} className="font-oswald-l text-tiny text-black">
            {text}
          </p>
        ))}
        {FOOTER_TEXT2_ARR.map((text, i) => (
          <p key={i} className="font-oswald-l text-tiny text-black">
            {text}
          </p>
        ))}
      </footer>
    </section>
  );
};

export default Contact;
