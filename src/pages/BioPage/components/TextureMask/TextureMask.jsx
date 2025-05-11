import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";
import { TextureMaskContainer } from "./TextureMask.styled";

gsap.registerPlugin(useGSAP);

const TextureMask = () => {
  const ref = useRef(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    if (ref.current) {
      setIsAnimationComplete(true);
    }
  };

  useGSAP(() => {
    gsap.to(ref.current, {
      y: ref.current.offsetHeight,
      duration: 1.3,
      delay: 0.3,
      ease: "circ.out",
      onComplete: () => handleAnimationComplete(),
    });
  });

  return <>{!isAnimationComplete && <TextureMaskContainer ref={ref}></TextureMaskContainer>}</>;
};

export default TextureMask;
