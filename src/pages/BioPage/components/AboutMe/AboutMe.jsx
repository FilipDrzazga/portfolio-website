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
  const paragraphsWrapperRef = useRef(null);

  useGSAP(() => {
    // ScrollTrigger animation on Header title, fade in from left, activated by ScrollTrigger
    SplitText.create(headerRef.current.querySelector("h1"), {
      type: "chars",
      autoSplit: true,
      mask: "chars",
      onSplit: (self) => {
        return gsap.from(self.chars, {
          x: -70,
          stagger: { each: 0.02 },
          scrollTrigger: {
            trigger: headerRef.current && headerRef.current.querySelector("h1"),
            markers: false,
            start: "top 90%",
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
            start: "top 90%",
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
    // Paragraphs animation
  });

  return (
    <AboutMeWrapper>
      <Header ref={headerRef}>
        <Title>about me</Title>
        <Subtitle>Hi. I’m Filip, a self-taught coder based in Watford.</Subtitle>
      </Header>
      <ParagraphsWrapper ref={paragraphsWrapperRef}>
        <Text>
          A self-taught coder, enthusiastic about dynamic areas of motion and animation. Focusing on the smallest details
          to ensure everything is flawless. Constantly honing skills to create smooth and engaging experiences.
        </Text>
        <Text>
          For the past four years, I’ve been diving into the world of web/app development, mastering JavaScript, React
          environment, and range of others libraries essential for creating dynamic and functional websites or
          applications.
        </Text>
        <Text>
          Exploring the magic of shaders and WebGL is my favorite playground - combining Three.js + R3F with silky-smooth
          motion using GSAP/Motion and Reanimated to make the browser/app feel alive.
        </Text>
        <Text>Constantly refining my craft and exploring new possibilities.</Text>
      </ParagraphsWrapper>
      <TechStackWrapper>
        <TechStack>JAVASCRIPT / REACT / REACT NATIVE / R3F / THREEJS / MOTION / REANIMATED</TechStack>
      </TechStackWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMe;
