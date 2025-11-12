import { useRef } from "react";
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

  useGSAP(
    (_, contextSafe) => {
      const tl = gsap.timeline({ pause: true, onReverseComplete: () => setIsMenuOpen(false) });
      const handleClick = contextSafe(() => {
        if (isMenuOpen) {
          console.log(tl.getChildren());
          return tl.reverse();
        }
        setIsMenuOpen(true);
      });

      if (isMenuOpen) {
        const split = SplitText.create(navigationRef.current.querySelectorAll("a"), {
          type: "chars",
          mask: "chars",
          autoSplit: true,
        });
        tl.addLabel("splitText").from(split.chars, {
          x: -90,
          stagger: { each: 0.03 },
          duration: 1.5,
          ease: "power4.out",
        });
        tl.addLabel("menuBtnRotation").to(
          menuBtnRef.current,
          { rotation: "+=360", duration: 2, ease: "linear", repeat: -1, transformOrigin: "50% 50%" },
          0
        );
        tl.play();
      }

      menuBtnRef.current.addEventListener("click", handleClick);

      return () => {
        menuBtnRef.current.removeEventListener("click", handleClick);
      };
    },
    { dependencies: [isMenuOpen] }
  );

  return (
    <NavigationWrapper ref={navigationRef}>
      <Button ref={menuBtnRef} $isClicked={isMenuOpen}>
        *
      </Button>
      {isMenuOpen && (
        <MenuWrapper>
          <NavigationList>
            <NavigationItem>
              <NavigationLink to="/bio">bio</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/playground">lab</NavigationLink>
            </NavigationItem>
          </NavigationList>
        </MenuWrapper>
      )}
    </NavigationWrapper>
  );
};

export default Navigation;
