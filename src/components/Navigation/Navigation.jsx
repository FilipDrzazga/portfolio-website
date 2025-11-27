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

gsap.registerPlugin(useGSAP, SplitText);

const Navigation = () => {
  const { isMenuOpen, setIsMenuOpen } = usePageStore();
  const menuBtnRef = useRef(null);
  const navigationRef = useRef(null);
  const tweenRef = useRef(null);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  useGSAP(
    () => {
      if (!isMenuOpen) return;

      const split = new SplitText(navigationRef.current.querySelectorAll("a"), {
        type: "chars",
        mask: "chars",
        onSplit: (split) => {
          return gsap.from(split.chars, {
            x: -100,
            duration: 1.2,
            stagger: 0.05,
            ease: "power4.out",
            delay: 0.7,
            onComplete: () => {
              split.revert();
            },
          });
        },
      });

      tweenRef.current = gsap.to(menuBtnRef.current, {
        rotation: 360,
        duration: 4,
        repeat: -1,
        ease: "linear",
        paused: true,
      });

      return () => {
        split.revert();
      };
    },
    { scope: navigationRef, dependencies: [isMenuOpen] }
  );

  useEffect(() => {
    if (isMenuOpen && tweenRef.current) {
      tweenRef.current.play();
    } else if (tweenRef.current && !isMenuOpen) {
      tweenRef.current.pause(0);
    }
  }, [isMenuOpen]);

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
