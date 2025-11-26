import { useRef, useEffect } from "react";
import { usePageStore } from "../../store/useStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import {
  NavigationWrapper,
  Button,
  MenuWrapper,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "./Navigation.styled";
import { split } from "three/tsl";

gsap.registerPlugin(useGSAP, SplitText);

const Navigation = () => {
  const { isMenuOpen, setIsMenuOpen } = usePageStore();
  const menuBtnRef = useRef(null);
  const navigationRef = useRef(null);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  useGSAP(
    (ctx) => {
      if (!isMenuOpen) return;

      const split = new SplitText(navigationRef.current.querySelectorAll("a"), {
        type: "chars",
        mask: "chars",
      });

      ctx.add(() => {
        gsap.from(split.chars, {
          x: -100,
          duration: 1.2,
          stagger: 0.05,
          ease: "power4.out",
        });
      });

      return () => split.revert();
    },
    { scope: navigationRef, dependencies: [isMenuOpen] }
  );

  return (
    <NavigationWrapper ref={navigationRef}>
      <Button $isClicked={isMenuOpen} ref={menuBtnRef} onClick={handleClick}>
        *
      </Button>
      <MenuWrapper $isVisible={isMenuOpen}>
        <NavigationList>
          <NavigationItem>
            <NavigationLink to="/bio">bio</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/playground">lab</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </MenuWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
