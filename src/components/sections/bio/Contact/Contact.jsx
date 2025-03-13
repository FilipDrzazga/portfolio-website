import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ContactTitle, FooterText, SocialLinks } from "./ui";

const ContactContainer = () => {
  const footerRef = useRef();
  const isInViewFooter = useInView(footerRef, { once: true, amount: 0.4 });

  return (
    <section className="wrapper flex flex-col justify-between custom-tablet:w-full lg:w-[calc(100vw-45vw)] lg:justify-center lg:gap-10">
      <header className="w-full h-auto mt-13 md:mt-16 custom-tablet:-mt-20 lg:mt-0 2xl:w-[90%] 2xl:mx-auto">
        <ContactTitle />
      </header>
      <SocialLinks />
      <motion.footer
        ref={footerRef}
        className="flex flex-col justify-center items-center w-full h-auto lg:absolute lg:bottom-3 lg:right-0 lg:mb-0"
      >
        <FooterText isInView={isInViewFooter} />
      </motion.footer>
    </section>
  );
};

export default ContactContainer;
