import { TechStackContainer, TechStackTitle } from "../styles/TechStack.styled";

const ITEM_VARIANTS = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } },
};
const TechStack = () => {
  return (
    <TechStackContainer>
      <TechStackTitle variants={ITEM_VARIANTS} initial="initial" whileInView="animate" viewport={{ once: true }}>
        JAVASCRIPT / REACT / REACT NATIVE / R3F / THREEJS / MOTION / REANIMATED
      </TechStackTitle>
    </TechStackContainer>
  );
};

export default TechStack;
