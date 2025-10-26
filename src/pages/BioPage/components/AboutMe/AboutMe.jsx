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
          x: -90,
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
    SplitText.create(paragraphsWrapperRef.current.querySelectorAll("p"), {
      type: "lines chars",
      autoSplit: true,
      onSplit: (self) => {
        return gsap.from(self.chars, {
          autoAlpha: 0.2,
          stagger: { each: 0.1, from: "start" },
          scrollTrigger: {
            trigger: paragraphsWrapperRef.current,
            start: "top 85%",
            end: "top 30%",
            markers: false,
            scrub: true,
            once: true,
          },
        });
      },
    });
  });
  return (
    <AboutMeWrapper>
      <Header ref={headerRef}>
        <Title>about me</Title>
        <Subtitle>Hi, I’m Filip, a front-end developer with a creative edge.</Subtitle>
      </Header>
      <ParagraphsWrapper ref={paragraphsWrapperRef}>
        <Text>
          Passionate about motion, detail, and design. I focus on creating smooth, engaging experiences that feel alive,
          always learning, experimenting, and pushing my skills further.
        </Text>
        <Text>
          Over the past four years, I’ve been diving into web and app development, mastering JavaScript, the React
          ecosystem, and a range of libraries essential for building dynamic, functional experiences.
        </Text>
        <Text>
          I’m exploring the world of WebGL, Three.js, and GLSL, experimenting, breaking things, and learning how it all
          connects. It’s a constant process of discovery, and that’s what makes it so exciting.
        </Text>
      </ParagraphsWrapper>
      <TechStackWrapper>
        <TechStack>
          JAVASCRIPT / REACT / REACT NATIVE / R3F / THREEJS / WEBGL / GLSL / GSAP / MOTION / REANIMATED{" "}
        </TechStack>
      </TechStackWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMe;
