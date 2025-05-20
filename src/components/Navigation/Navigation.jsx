import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { NavigationWrapper, NavigationList, NavigationItem, NavigationLink } from "./Navigation.styled";

gsap.registerPlugin(useGSAP, SplitText);

const Navigation = () => {
  const navigationRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(navigationRef.current.querySelectorAll("a")).forEach((el) => {
      SplitText.create(el, {
        type: "chars",
        autoSplit: true,
        onSplit: (self) => {
          let tl = gsap.timeline();
          self.chars.forEach((char) => {
            const square = document.createElement("span");
            square.textContent = gsap.utils.random(["%", "&", "*", "$"]);
            char.appendChild(square);
          });
          const spans = self.chars.map((el) => el.querySelector("span"));
          tl.from(self.chars, {
            visibility: "hidden",
            delay: 0.5,
            stagger: { each: 0.05, from: "start" },
          }).to(
            spans,
            {
              visibility: "hidden",
              delay: 0.5,
              stagger: { each: 0.05, from: "start" },
            },
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
          <NavigationLink>BIO</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>PLAYGROUND</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>WORK</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>MAIL</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
