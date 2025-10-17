import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HeroWrapper,
  TitleWrapper,
  Title,
  Description,
  Location,
  ContactWrapper,
  Contact,
  ContactLink,
  ImageWrapper,
  Image,
} from "./Hero.styled";
import image from "../../../../assets/images/bio_tablet_img_lg.webp";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Hero = () => {
  const titleRef = useRef(null);
  const locationRef = useRef(null);
  const descriptionRef = useRef(null);
  const contactRef = useRef(null);

  useGSAP(() => {
    // Title Animation
    SplitText.create(titleRef.current, {
      type: "words, chars",
      autoSplit: true,
      mask: "chars",
      onSplit: (split) => {
        return gsap.from(split.chars, { x: -70, delay: 0.02, stagger: 0.02 });
      },
    });
    // Location Animation
    SplitText.create(locationRef.current, {
      type: "chars",
      autoSplit: true,
      mask: "chars",
      onSplit: (split) => {
        split.chars.forEach((char) => {
          const square = document.createElement("span");
          square.textContent = gsap.utils.random(["%", "&", "*", "$"]);
          char.appendChild(square);
        });
        const spans = gsap.utils.toArray(split.chars.map((el) => el.querySelector("span")));

        const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 5 });
        const tl = gsap.timeline({
          onComplete: () => {
            tl2
              .to(spans, { visibility: "visible", stagger: { each: 0.05 } })
              .to(spans, { visibility: "hidden", stagger: { each: 0.05 } }, ">-95%");
          },
        });
        tl.from(split.chars, { visibility: "hidden", stagger: { each: 0.05 } }).to(
          spans,
          { visibility: "hidden", stagger: { each: 0.05 } },
          ">-0.6"
        );

        return tl;
      },
    });
    // Description Animation
    SplitText.create(descriptionRef.current, {
      type: "lines",
      autoSplit: true,
      mask: "lines",
      onSplit: (split) => {
        return gsap.from(split.lines, { y: 50, autoAlpha: 0, duration: 1, delay: 1, stagger: 0.05, ease: "power4.out" });
      },
    });
    // Contact Animation
    SplitText.create(contactRef.current.getElementsByTagName("p"), {
      type: "lines",
      autoSplit: true,
      mask: "lines",
      onSplit: (split) => {
        return gsap.from(split.lines, {
          y: 50,
          autoAlpha: 0,
          duration: 1.2,
          delay: 1.15,
          stagger: 1,
          ease: "power4.out",
        });
      },
    });
    SplitText.create(contactRef.current.getElementsByTagName("a"), {
      type: "lines",
      autoSplit: true,
      mask: "lines",
      onSplit: (split) => {
        return gsap.from(split.lines, {
          y: 50,
          autoAlpha: 0,
          duration: 1.2,
          delay: 1.11,
          stagger: 1,
          ease: "power4.out",
        });
      },
    });
  }, []);

  return (
    <HeroWrapper>
      <TitleWrapper>
        <Title ref={titleRef}>Creative Developer</Title>
        <Location ref={locationRef}>based in watford</Location>
      </TitleWrapper>
      <ImageWrapper>
        <Image src={image} alt="Just myself" />
      </ImageWrapper>
      <ContactWrapper ref={contactRef}>
        <Contact>Available for Colaboration</Contact>
        <ContactLink href="mailto:filip.drzazga@gmail.com">filip.drzazga@gmail.com</ContactLink>
      </ContactWrapper>
      <Description ref={descriptionRef}>
        More than visuals - I design meaningful digital encounters that resonate with curiosity, intention, and flow.
      </Description>
    </HeroWrapper>
  );
};

export default Hero;
