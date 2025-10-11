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

  useGSAP(() => {
    // ScrollTrigger animation on Header title, fade in from left, activated by ScrollTrigger
    SplitText.create(headerRef.current.querySelector("h1"), {
      type: "chars",
      autoSplit: true,
      mask: "chars",
      onSplit: (self) => {
        return gsap.from(self.chars, {
          x: -70,
          stagger: { each: 0.05, from: "start" },
          scrollTrigger: {
            trigger: headerRef.current && headerRef.current.querySelector("h1"),
            markers: false,
            start: "top 80%",
            end: "bottom 80%",
          },
        });
      },
    });

    // Terminal typing animation on Header subtitle, activated by ScrollTrigger
    SplitText.create(headerRef.current.querySelector("h2"), {
      type: "lines chars",
      autoSplit: true,
      onSplit: (self) => {
        self.chars.forEach((char) => {
          const square = document.createElement("span");
          square.textContent = gsap.utils.random(["%", "&", "*", "$"]);
          char.appendChild(square);
        });

        let tlSubtitle = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: headerRef.current.querySelector("h1"),
            start: "top 80%",
            end: "bottom 80%",
            markers: false,
            onEnter: () => tlSubtitle.play(),
          },
        });

        self.lines.forEach((line, i) => {
          const divs = gsap.utils.toArray(line.querySelectorAll("div"));
          const spans = gsap.utils.toArray(line.querySelectorAll("span"));

          tlSubtitle
            .from(divs, { visibility: "hidden", stagger: 0.05 }, i * 0.5)
            .to(spans, { visibility: "hidden", stagger: 0.05 }, `<+0.55`);
        });
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
