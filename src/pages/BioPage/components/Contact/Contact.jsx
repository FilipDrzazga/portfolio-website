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
          x: -80,
          stagger: { each: 0.05, from: "start" },
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
    SplitText.create(headerRef.current.querySelector("p"), {
      type: "chars",
      autoSplit: true,
      onSplit: (self) => {
        self.chars.forEach((char) => {
          const square = document.createElement("span");
          square.textContent = gsap.utils.random(["%", "&", "*", "$"]);
          char.appendChild(square);
        });

        const spans = gsap.utils.toArray(self.chars.map((el) => el.querySelector("span")));

        let tlSubtitle = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: headerRef.current.querySelector("p"),
            start: "-150px 80%",
            end: "bottom 80%",
            markers: false,
          },
          onEnter: () => tlSubtitle.play(),
        });

        return tlSubtitle
          .from(self.chars, { visibility: "hidden", stagger: 0.05 })
          .to(spans, { visibility: "hidden", stagger: 0.05 }, ">-1.55");
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
        const word3 = gsap.utils.toArray(self.words[2].querySelectorAll("div"));
        const spans1 = gsap.utils.toArray(self.words[0].querySelectorAll("span"));
        const spans2 = gsap.utils.toArray(self.words[1].querySelectorAll("span"));
        const spans3 = gsap.utils.toArray(self.words[2].querySelectorAll("span"));

        let tlSocialLinks = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: headerRef.current.querySelector("p"),
            start: "-100px 80%",
            end: "bottom 80%",
            markers: false,
          },
          onEnter: () => tlSocialLinks.play(),
        });

        return tlSocialLinks
          .from(word1, { visibility: "hidden", stagger: 0.05 })
          .to(spans1, { visibility: "hidden", stagger: 0.05 }, `<+0.55`)
          .from(word2, { visibility: "hidden", stagger: 0.05 }, 0)
          .to(spans2, { visibility: "hidden", stagger: 0.05 }, `<+0.55`)
          .from(word3, { visibility: "hidden", stagger: 0.05 }, 0)
          .to(spans3, { visibility: "hidden", stagger: 0.05 }, `<+0.55`);
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
        let tlNameRepeat = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 3 });

        let tlFooter = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: footerRef.current.querySelector("p"),
            start: "top bottom",
            end: "bottom bottom",
            markers: false,
          },
          onEnter: () => tlFooter.play(),
          onComplete: () => tlNameRepeat.play(),
        });

        tlFooter
          .from(self.chars, { visibility: "hidden", stagger: { each: 0.05, from: "start" } })
          .to(spans, { visibility: "hidden", stagger: { each: 0.05, from: "start" } }, ">-1.75");

        tlNameRepeat
          .to(spansRepeat, { visibility: "visible", stagger: { each: 0.05, from: "start" } })
          .to(spansRepeat, { visibility: "hidden", stagger: { each: 0.05, from: "start" } }, "-=95%");
      },
    });
  });

  return (
    <ContactWrapper>
      <Header ref={headerRef}>
        <Subtitle>For inquiries, collaborations, or job</Subtitle>
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
              Linkedin
            </SocialLinksLink>
          </SocialLinksListItem>
          <SocialLinksListItem>
            <SocialLinksLink href="https://github.com/FilipDrzazga" target="_blank" rel="noopener noreferrer">
              Email
            </SocialLinksLink>
          </SocialLinksListItem>
          <SocialLinksListItem>
            <SocialLinksLink href="https://github.com/FilipDrzazga" target="_blank" rel="noopener noreferrer">
              Github
            </SocialLinksLink>
          </SocialLinksListItem>
        </SocialLinksList>
      </SocialLinksWrapper>
      <Footer ref={footerRef}>
        <FooterText>2O25 by Filip Drzazga. All rights reserved.</FooterText>
      </Footer>
    </ContactWrapper>
  );
};

export default Contact;
