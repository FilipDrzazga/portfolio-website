import { useMediaQuery } from "react-responsive";
import { SOCIAL_LINKS } from "../../../../../utils/constants";
import SocialLinkItem from "./SocialLinkItem";

const SocialLinks = () => {
  const isScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="w-full h-auto mb-16 tablet-md:-mt-20 custom-tablet:-mt-40 lg:mt-10">
      <ul className="flex justify-between w-full h-auto md:justify-evenly lg:w-[70%] lg:mx-auto lg:gap-10 xl:justify-evenly">
        {SOCIAL_LINKS.map((link, i) => (
          <SocialLinkItem
            key={i}
            link={link}
            isScreen={isScreen}
          />
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;