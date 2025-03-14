import { useRef, useState } from "react";
import { motion } from "motion/react";

const SocialLinkItem = ({ link, isScreen }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });


  const handleLinkClick = (e) => {
    e.preventDefault();
    const link = e.target.closest("a");
    if (link && link.href) {
      window.open(link.href, "_blank", "noopener,noreferrer");
    }
  };

    const handleMouseEnter = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x, y });
    };
  
    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };
  
    return (
      <motion.li
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{scale: 1}}
        whileHover={{scale: 1.5}}
        animate={{ x: position.x, y: position.y}}
        transition={{type: "spring", stiffness: 100, damping: 15, mass: 0.1}}
        className="flex justify-center items-center font-oswald-r text-base text-white cursor-pointer mobile-sm:text-lg md:text-2xl lg:text-black lg:text-base xl:w-[2.5rem] xl:h-[2.5rem] xl:text-sm"
      >
        <a
          href={link.href}
          rel="noopener noreferrer"
          target="_blank"
          onClick={handleLinkClick}
        >
          {isScreen ? link.icon.screen : link.icon.mobile}
        </a>
      </motion.li>
    );
  };

export default SocialLinkItem;