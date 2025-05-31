import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AboutMeWrapper,
  Header,
  Title,
  Subtitle,
  ParagraphsWrapper,
  Text,
  TechStackWrapper,
  TechStack,
} from "./AboutMe.styled";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const AboutMe = () => {
  const headerRef = useRef(null);
  // const paragraphsWrapperRef = useRef(null);
  // const techStackWrapperRef = useRef(null);

  useGSAP(() => {
    SplitText.create(headerRef.current.querySelector("h1"), {
      type: "chars",
      autoSplit: true,
      mask: "chars",
      onSplit: (self) => {
        return gsap.from(self.chars, {
          x: -50,
          stagger: { each: 0.05, from: "start", ease: "power2.out" },
          scrollTrigger: {
            trigger: headerRef.current.querySelector("h1"),
            markers: true,
            start: "top 80%",
            end: "bottom 80%",
          },
        });
      },
    });

    // ScrollTrigger animation on Subtitle text
    SplitText.create(headerRef.current.querySelector("h2"), {
      type: "lines chars",
      autoSplit: true,
      onSplit: (self) => {
        self.chars.forEach((char) => {
          const square = document.createElement("span");
          square.textContent = gsap.utils.random(["%", "&", "*", "$"]);
          char.appendChild(square);
        });
        const line1 = gsap.utils.toArray(self.lines[0].querySelectorAll("div"));
        const line2 = gsap.utils.toArray(self.lines[1].querySelectorAll("div"));
        const spansLine1 = gsap.utils.toArray(self.lines[0].querySelectorAll("span"));
        const spansLine2 = gsap.utils.toArray(self.lines[1].querySelectorAll("span"));

        let tlSubtitle = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: headerRef.current.querySelector("h1"),
            start: "top 80%",
            end: "bottom 80%",
            onEnter: () => tlSubtitle.play(),
          },
        });
        tlSubtitle
          .from(line1, {
            visibility: "hidden",
            stagger: { each: 0.05, from: "start" },
          })
          .to(
            spansLine1,
            {
              visibility: "hidden",
              stagger: { each: 0.05, from: "start" },
            },
            ">-1.25"
          )
          .from(
            line2,
            {
              visibility: "hidden",
              stagger: { each: 0.05, from: "start" },
            },
            ">-2.3"
          )
          .to(
            spansLine2,
            {
              visibility: "hidden",
              stagger: { each: 0.05, from: "start" },
            },
            ">-1.5"
          );
      },
    });
  });

  return (
    <AboutMeWrapper>
      <Header ref={headerRef}>
        <Title>about me</Title>
        <Subtitle>HI. I’M FILIP, (MAYBE) CREATIVE FRONTEND DEVELOPER BASED IN WATFORD.</Subtitle>
      </Header>
      <ParagraphsWrapper>
        <Text>
          A SELF-TAUGHT CODER, ENTHUSIASTIC ABOUT DYNAMIC AREAS OF MOTION AND ANIMATIONS. FOCUSING ON THE SMALLEST DETAILS
          TO ENSURE EVERYTHING IS FLAWLESS. CONSTANTLY HONING SKILLS TO CREATE SMOOTH AND ENGAGING EXPERIENCES.
        </Text>
        <Text>
          FOR THE PAST FOUR YEARS, I’VE BEEN DIVING INTO THE WORLD OF WEB/APP DEVELOPMENT, MASTERING JAVASCRIPT, REACT
          ENVIRONMENT, AND RANGE OF OTHERS LIBRARIES ESSENTIAL FOR CREATING DYNAMIC AND FUNCTIONAL WEBSITES OR
          APPLICATIONS.
        </Text>
        <Text>
          EXPLORING THE MAGIC OF SHADERS AND WEBGL IS MY FAVORITE PLAYGROUND - COMBINING THREJS + R3F WITH SILKY-SMOOTH
          MOTION USING GSAP/MOTION AND REANIMATED TO MAKE THE BROWSER/APP FEEL ALIVE.
        </Text>
        <Text>CONSTANTLY REFINING MY CRAFT AND EXPLORING NEW POSSIBILITIES.</Text>
      </ParagraphsWrapper>
      <TechStackWrapper>
        <TechStack>JAVASCRIPT / REACT / REACT NATIVE / R3F / THREEJS / MOTION / REANIMATED</TechStack>
      </TechStackWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMe;
