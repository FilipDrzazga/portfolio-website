import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import {
  HeroWrapper,
  TitleWrapper,
  Title1,
  Title2,
  Title3,
  WorkStatusWrapper,
  Status,
  ImageWrapper,
  Image,
} from "./Hero.styled";
import image from "../../../../assets/images/bio_tablet_img_lg.webp";
import { usePageStore } from "../../../../store/useStore";

gsap.registerPlugin(useGSAP, SplitText);

const Hero = () => {
  const { setGetMeshPosition } = usePageStore();
  const titleRef = useRef(null);
  const workStatusRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Title Animation
    const split = SplitText.create(titleRef.current.getElementsByTagName("h1"), {
      type: "lines",
      autoSplit: true,
      mask: "lines",
      onSplit: (split) => {
        return gsap.from(split.lines, {
          y: 80,
          delay: 0.05,
          stagger: 0.15,
          duration: 2,
          ease: "power4.out",
        });
      },
      onComplete: () => {
        split.revert();
      },
    });
    // Work Status Animation -- NEEDS REFACTORING
    const split2 = SplitText.create(workStatusRef.current.getElementsByTagName("p"), {
      type: "chars",
      autoSplit: true,
      mask: "chars",
      onSplit: (split) => {
        split.chars.forEach((char) => {
          const square = document.createElement("span");
          square.textContent = gsap.utils.random(["%", "&", "*", "$"]);
          char.appendChild(square);
        });
        const spans = gsap.utils.toArray(split.chars.map((el) => el.querySelector("span")));

        const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
        const tl = gsap.timeline({
          onComplete: () => {
            tl2
              .to(spans, { visibility: "visible", stagger: { each: 0.05 } })
              .to(spans, { visibility: "hidden", stagger: { each: 0.05 } }, ">-95%");
          },
        });
        tl.from(split.chars, { visibility: "hidden", stagger: { each: 0.05 } }).to(
          spans,
          { visibility: "hidden", stagger: { each: 0.05 } },
          ">-0.75"
        );

        return tl;
      },
    });
    gsap.to(workStatusRef.current, {
      autoAlpha: 0,
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: workStatusRef.current,
        start: "top 95%",
        end: "bottom 60%",
        scrub: true,
        markers: false,
      },
    });

    return () => {
      split.revert();
      split2.revert();
    };
  }, []);

  useEffect(() => {
    const getImgPosition = () => {
      const img = imageRef.current;
      if (!img) return;
      const rect = img.getBoundingClientRect();
      return setGetMeshPosition(rect);
    };

    window.addEventListener("resize", getImgPosition);
    getImgPosition();
    return () => window.removeEventListener("resize", getImgPosition);
  }, [setGetMeshPosition]);

  return (
    <HeroWrapper>
      <TitleWrapper ref={titleRef}>
        <Title1>Frontend Developer</Title1>
        <Title2>Based In Watford</Title2>
        <Title3>Working Globally.</Title3>
      </TitleWrapper>
      <ImageWrapper ref={imageRef}>
        <Image src={image} alt="Just myself" />
      </ImageWrapper>
      <WorkStatusWrapper ref={workStatusRef}>
        <Status>Available For Work.</Status>
      </WorkStatusWrapper>
    </HeroWrapper>
  );
};

export default Hero;
