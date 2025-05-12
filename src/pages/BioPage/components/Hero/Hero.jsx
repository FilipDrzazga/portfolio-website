import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HeroWrapper, TextureMask, CoordinatesWrapper, CoordinatesText, ScrollTextWrapper, ScrollText } from "./Hero.styled"

gsap.registerPlugin(useGSAP);

const Hero = ()=>{
    const textureMaskRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useGSAP(() => {
    gsap.to(textureMaskRef.current, {
      y: textureMaskRef.current.offsetHeight,
      duration: 1.3,
      delay: 0.3,
      ease: "circ.out",
      onComplete: () => {
        setIsVisible(false);
      },
    });
  },[]);

    return(
        <HeroWrapper>
            {isVisible && <TextureMask ref={textureMaskRef}></TextureMask>}
            <CoordinatesWrapper>
                <CoordinatesText>51.6611°N</CoordinatesText>
                <CoordinatesText>BASED IN WATFORD</CoordinatesText>
                <CoordinatesText>0.3970°W</CoordinatesText>
            </CoordinatesWrapper>
            <ScrollTextWrapper>
                <ScrollText>SCROLL TO EXPLORE</ScrollText>
            </ScrollTextWrapper>
        </HeroWrapper>
    )
}

export default Hero;