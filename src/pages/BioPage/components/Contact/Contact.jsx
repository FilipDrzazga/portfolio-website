import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ContactWrapper,
  Header,
  Title,
  Subtitle,
  SocialLinksWrapper,
  SocialLinksList,
  SocialLinksListItem,
  SocialLinksLink,
  Footer,
  FooterText,
} from "./Contact.styled";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Contact = () => {
  const headerRef = useRef(null);
  const SocialLinksWrapperRef = useRef(null);
  const footerRef = useRef(null);

  useGSAP(() => {
    // ScrollTrigger animation on Header title, fade in from left, activated by ScrollTrigger
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
            markers: false,
            start: "-160% 80%",
            end: "bottom 80%",
          },
        });
      },
    });

    // Terminal typing animation on Header subtitle, activated by ScrollTrigger
    SplitText.create(headerRef.current.querySelector("h2"), {
      type: "chars",
      autoSplit: true,
      onSplit: (self) => {
        self.chars.forEach((char) => {
          const square = document.createElement("span");
          square.textContent = gsap.utils.random(["%", "&", "*", "$"]);
          char.appendChild(square);
        });

        const spans = self.chars.map((el) => el.querySelector("span"));

        let tlSubtitle = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: headerRef.current.querySelector("h2"),
            start: "-150px 80%", // why px??
            end: "bottom 80%",
            markers: false,
          },
          onEnter: () => {
            tlSubtitle.play();
          },
        });

        return tlSubtitle
          .from(self.chars, {
            visibility: "hidden",
            stagger: { each: 0.05, from: "start" },
          })
          .to(
            spans,
            {
              visibility: "hidden",
              stagger: { each: 0.05, from: "start" },
            },
            ">-1.55"
          );
      },
    });

    // Terminal typing animation on SocialLinks, activated by ScrollTrigger
    SplitText.create(SocialLinksWrapperRef.current.querySelectorAll("a"), {
      type: "words, chars",
      autoSplit: true,
      onSplit: (self) => {
        self.chars.forEach((char) => {
          const square = document.createElement("span");
          square.textContent = gsap.utils.random(["%", "&", "*", "$"]);
          char.appendChild(square);
        });

        const word1 = gsap.utils.toArray(self.words[0].querySelectorAll("div"));
        const word2 = gsap.utils.toArray(self.words[1].querySelectorAll("div"));
        const spans1 = gsap.utils.toArray(self.words[0].querySelectorAll("span"));
        const spans2 = gsap.utils.toArray(self.words[1].querySelectorAll("span"));

        let tlSocialLinks = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: headerRef.current.querySelector("h2"),
            start: "-100px 80%",
            end: "bottom 80%",
            markers: false,
          },
          onEnter: () => {
            tlSocialLinks.play();
          },
        });

        return tlSocialLinks
          .from(word1, {
            visibility: "hidden",
            stagger: { each: 0.05, from: "start" },
          })
          .to(
            spans1,
            {
              visibility: "hidden",
              stagger: { each: 0.05, from: "start" },
            },
            ">-0.3"
          )
          .from(
            word2,
            {
              visibility: "hidden",
              stagger: { each: 0.05, from: "start" },
            },
            ">-1.5"
          )
          .to(
            spans2,
            {
              visibility: "hidden",
              stagger: { each: 0.05, from: "start" },
            },
            ">-0.2"
          );
      },
    });

    // Terminal typing animation on Footer, activated by ScrollTrigger
    SplitText.create(footerRef.current.querySelector("p"), {
      type: "words chars",
      wordsClass: "footer-words++",
      autoSplit: true,
      onSplit: (self) => {
        self.chars.forEach((char) => {
          const square = document.createElement("span");
          square.textContent = gsap.utils.random(["%", "&", "*", "$"]);
          char.appendChild(square);
        });

        const spans = self.chars.map((el) => el.querySelector("span"));
        const spansRepeat = self.words.slice(2, 4).map((el) => el.querySelectorAll("span"));

        // Timeline for Footer text animation, repeated infinitely just name
        let tlNameRepeat = gsap.timeline({
          paused: true,
          repeat: -1,
          repeatDelay: 3,
        });

        let tlFooter = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: footerRef.current.querySelector("p"),
            start: "-100px 80%",
            end: "bottom 80%",
            markers: false,
          },
          onEnter: () => {
            tlFooter.play();
          },
          onComplete: () => {
            tlNameRepeat.play();
          },
        });

        tlFooter
          .from(self.chars, {
            visibility: "hidden",
            stagger: { each: 0.05, from: "start" },
          })
          .to(
            spans,
            {
              visibility: "hidden",
              stagger: { each: 0.05, from: "start" },
            },
            ">-1.75"
          );

        tlNameRepeat
          .to(spansRepeat, {
            visibility: "visible",
            stagger: { each: 0.05, from: "start" },
          })
          .to(
            spansRepeat,
            {
              visibility: "hidden",
              stagger: { each: 0.05, from: "start" },
            },
            "-=95%"
          );
      },
    });
  });

  return (
    <ContactWrapper>
      <Header ref={headerRef}>
        <Subtitle>FOR INQUIRIES, COLLABORATIONS, OR JOB</Subtitle>
        <Title>
          <a href="mailto:filip.drzazga@gmail.com">get in touch</a>
        </Title>
      </Header>
      <SocialLinksWrapper ref={SocialLinksWrapperRef}>
        <SocialLinksList>
          <SocialLinksListItem>
            <SocialLinksLink
              href="https://www.linkedin.com/in/filip-drzazga-b33435231/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </SocialLinksLink>
          </SocialLinksListItem>
          <SocialLinksListItem>
            <SocialLinksLink href="https://github.com/FilipDrzazga" target="_blank" rel="noopener noreferrer">
              GITHUB
            </SocialLinksLink>
          </SocialLinksListItem>
        </SocialLinksList>
      </SocialLinksWrapper>
      <Footer ref={footerRef}>
        <FooterText>2O25 BY FILIP DRZAZGA. ALL RIGHTS RESERVED.</FooterText>
      </Footer>
    </ContactWrapper>
  );
};

export default Contact;
