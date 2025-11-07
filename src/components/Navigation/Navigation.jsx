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
  const navigationRef = useRef(null);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflowY = !isMenuOpen ? "hidden" : "auto";
  };

  useGSAP(() => {
    // Terminal typing animation on navigation links
    gsap.utils.toArray(navigationRef.current.querySelectorAll("a")).forEach((el) => {
      SplitText.create(el, {
        type: "chars",
        autoSplit: true,
        onSplit: (split) => {
          let tl = gsap.timeline();
          split.chars.forEach((char) => {
            const square = document.createElement("span");
            square.textContent = gsap.utils.random(["%", "&", "*", "$"]);
            char.appendChild(square);
          });
          const spans = split.chars.map((el) => el.querySelector("span"));
          tl.from(split.chars, { visibility: "hidden", delay: 0.5, stagger: { each: 0.05, from: "start" } }).to(
            spans,
            { visibility: "hidden", delay: 0.5, stagger: { each: 0.05, from: "start" } },
            ">-95%"
          );
        },
      });
    });
  });

  return (
    <NavigationWrapper ref={navigationRef}>
      <Button $isClicked={isMenuOpen} onClick={handleClick}>
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
