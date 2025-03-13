import { useMediaQuery } from "react-responsive";
import { SOCIAL_LINKS } from "../../../../../utils/constants";

const SocialLinks = () => {
  const isScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="w-full h-auto mb-6 tablet-md:-mt-20 custom-tablet:-mt-40 lg:mt-10 xl:mt-20">
      <ul className="flex justify-between w-full h-auto md:justify-evenly lg:w-[70%] lg:mx-auto lg:gap-10 xl:justify-evenly">
        {SOCIAL_LINKS.map((text, i) => (
          <li
            key={i}
            className="flex justify-center items-center font-oswald-r text-base text-white cursor-pointer mobile-sm:text-lg md:text-2xl lg:text-black lg:text-base xl:text-sm"
          >
            {isScreen ? text.icon.screen : text.icon.mobile}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
