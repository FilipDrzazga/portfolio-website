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
  useGSAP(() => {});
  return (
    <AboutMeWrapper>
      <Header>
        <Title>about me</Title>
        <Subtitle>HI. I’M FILIP, (MAYBE) CREATIVE FRONTEND DEVELOPER BASED IN WATFORD.</Subtitle>
      </Header>
      <ParagraphsWrapper>
        <Text>
          A SELF-TAUGHT CODER, ENTHUSIASTIC ABOUT DYNAMIC AREAS OF MOTION AND ANIMATIONS. FOCUSING ON THE SMALLEST DETAILS
          TO ENSURE EVERYTHING IS FLAWLESS. CONSTANTLY HONING SKILLS TO CREATE SMOOTH AND ENGAGING EXPERIENCES.
        </Text>
        <Text>
          FOR THE PAST FOUR YEARS, I’VE BEEN DIVING INTO THE WORLD OF WEB/APP DEVELOPMENT, MASTERING JAVASCRIPT, REACT,
          AND RANGE OF OTHERS LIBRARIES ESSENTIAL FOR CREATING DYNAMIC AND FUNCTIONAL WEBSITES OR APPLICATIONS.
        </Text>
        <Text>
          I ALSO TRYING TO UNDERSTAND THE MAGIC OF WEBGL AND SHADERS WORLDS, EXPLORING HOW FAR I CAN PUSH VISUALS IN THE
          BROWSER. FROM BUILDING DYNAMIC 3D SCENES WITH THREE.JS & R3F TO ADDING SMOOTH INTERACTIONS WITH MOTION AND
          REANIMATED.
        </Text>
        <Text>
          I CURRENTLY WORKING IN REACT & REACT NATIVE, USING EXPO FOR QUICK DEVELOPMENT AND REDUX OR ZUSTAND FOR STATE
          MANAGEMENT. STYLED COMPONENTS & TAILWIND KEEP MY STYLES CLEAN AND MODULAR, WHILE FIREBASE HELPS ME HANDLE
          BACKEND TASKS WITH EASY.
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
