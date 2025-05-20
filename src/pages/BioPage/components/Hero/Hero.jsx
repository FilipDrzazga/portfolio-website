import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroWrapper, CoordinatesWrapper, CoordinatesText, ScrollTextWrapper, ScrollText } from "./Hero.styled";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Hero = () => {
  const coordinatesWrapperRef = useRef(null);
  const scrollTextWrapperRef = useRef(null);

  useGSAP(
    () => {
      // ScrollTriger animation on CoordinatesWrapper
      gsap.to(coordinatesWrapperRef.current, {
        scrollTrigger: {
          trigger: coordinatesWrapperRef.current,
          markers: false,
          start: "-60px 70%",
          end: "bottom 70%",
          scrub: true,
        },
        y: -20,
        autoAlpha: 0,
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
          const loop = gsap.timeline({ repeat: -1, repeatDelay: 3, delay: 3 });
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
