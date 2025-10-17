import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { NavigationWrapper, NavigationList, NavigationItem, NavigationLink } from "./Navigation.styled";

gsap.registerPlugin(useGSAP, SplitText);

const Navigation = () => {
  const navigationRef = useRef(null);

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
      <NavigationList>
        <NavigationItem>
          <NavigationLink to="/bio">Bio</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/playground">Playground</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/work">Work</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/mail">Mail</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
