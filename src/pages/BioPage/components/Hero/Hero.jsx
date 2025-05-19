import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HeroWrapper,
  TextureMask,
  CoordinatesWrapper,
  CoordinatesText,
  ScrollTextWrapper,
  ScrollText,
} from "./Hero.styled";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Hero = () => {
  const textureMaskRef = useRef(null);
  const coordinatesWrapperRef = useRef(null);
  const scrollTextWrapperRef = useRef(null);

  const [isVisible, setIsVisible] = useState(true);

  useGSAP(
    // Animation for the texture mask
    () => {
      gsap.to(textureMaskRef.current, {
        y: textureMaskRef.current.offsetHeight,
        duration: 1.3,
        delay: 0.3,
        ease: "circ.out",
        onComplete: () => {
          setIsVisible(false);
        },
      });

      // CoordinatesText animation
      gsap.utils.toArray(coordinatesWrapperRef.current.querySelectorAll("p")).forEach((el) => {
        SplitText.create(el, {
          type: "chars",
          autoSplit: true,
          onSplit: (self) => {
            let tl = gsap.timeline();
            self.chars.forEach((char) => {
              const square = document.createElement("span");
              square.textContent = gsap.utils.random(["%", "&", "*", "$"]);
              char.appendChild(square);
            });
            const spans = self.chars.map((el) => el.querySelector("span"));
            tl.from(self.chars, {
              visibility: "hidden",
              delay: 0.3,
              stagger: { each: 0.05, from: "start" },
            }).to(
              spans,
              {
                visibility: "hidden",
                delay: 0.3,
                stagger: { each: 0.05, from: "start" },
              },
              ">-73%"
            );
          },
        });
      });

      // ScrollText animation
      SplitText.create(scrollTextWrapperRef.current, {
        type: "chars",
        autoSplit: true,
        onSplit: (self) => {
          let tl = gsap.timeline();
          self.chars.forEach((el) => {
            const square = document.createElement("span");
            square.textContent = gsap.utils.random(["%", "&", "*", "$"]);
            el.appendChild(square);
          });
          const spans = self.chars.map((el) => el.querySelector("span"));
          tl.from(self.chars, {
            visibility: "hidden",
            delay: 0.3,
            stagger: { each: 0.05, from: "start" },
          }).to(
            spans,
            {
              visibility: "hidden",
              delay: 0.3,
              stagger: {
                each: 0.05,
                from: "start",
              },
            },
            ">-80%"
          );

          // Loop spans animation
          const loop = gsap.timeline({ repeat: -1, repeatDelay: 6, delay: 6 });
          loop
            .to(spans, {
              visibility: "visible",
              stagger: {
                each: 0.05,
                from: "start",
              },
            })
            .to(
              spans,
              {
                visibility: "hidden",
                stagger: {
                  each: 0.05,
                  from: "start",
                },
              },
              "-=95%"
            );
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <HeroWrapper>
      {isVisible && <TextureMask ref={textureMaskRef}></TextureMask>}
      <CoordinatesWrapper ref={coordinatesWrapperRef}>
        <CoordinatesText>51.6611°N</CoordinatesText>
        <CoordinatesText>WATFORD</CoordinatesText>
        <CoordinatesText>00.3970°W</CoordinatesText>
      </CoordinatesWrapper>
      <ScrollTextWrapper ref={scrollTextWrapperRef}>
        <ScrollText>SCROLL TO EXPLORE</ScrollText>
      </ScrollTextWrapper>
    </HeroWrapper>
  );
};

export default Hero;
