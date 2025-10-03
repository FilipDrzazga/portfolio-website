import { useRef } from "react";
import { Transition, SwitchTransition } from "react-transition-group";
import gsap from "gsap";

// eslint-disable-next-line react/prop-types
const PageTransition = ({ pathName, children }) => {
  const nodeRef = useRef(null);
  return (
    <SwitchTransition component={null} mode="out-in">
      <Transition
        nodeRef={nodeRef}
        key={pathName}
        timeout={2000}
        unmountOnExit
        onEnter={() => {
          gsap.fromTo(
            nodeRef.current,
            { opacity: 0, duration: 1, ease: "power2.out" },
            {
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              onComplete: () => {
                gsap.set(document.body, { overflowY: "auto" });
              },
            }
          );
        }}
        onExit={() => {
          gsap.to(nodeRef.current, { opacity: 0, duration: 1, ease: "power2.out" });
          gsap.to(document.body, {
            overflowY: "hidden",
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
              window.scrollTo(0, 0);
            },
          });
        }}
      >
        <div ref={nodeRef}>{children}</div>
      </Transition>
    </SwitchTransition>
  );
};

export default PageTransition;
