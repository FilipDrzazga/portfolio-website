import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroWrapper, Title, Subtitle, Location, ImageWrapper, Image } from "./Hero.styled";
import image from "../../../../assets/images/bio_tablet_img_lg.webp";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Hero = () => {
  const coordinatesWrapperRef = useRef(null);
  const scrollTextWrapperRef = useRef(null);

  return (
    <HeroWrapper>
      <Title>Creative Developer</Title>
      <Location>based in watford</Location>
      <ImageWrapper>
        <Image src={image} alt="Just myself" />
      </ImageWrapper>
      <Subtitle>
        More than visuals — I design meaningful digital encounters that resonate with curiosity, intention, and flow.
      </Subtitle>
    </HeroWrapper>
  );
};

export default Hero;
