import { useEffect } from "react";
import { useMotionValue, useTransform, animate } from "motion/react";
import { Container, Content, PercentageAnimation, ProgressBar } from "./Loader.styled";

const Loader = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.trunc(value));

  const scaleX = useTransform(count, [0, 100], [0, 1]);

  useEffect(() => {
    const controls = animate(count, 100, { duration: 3 });
    return () => controls.stop();
  }, [count]);

  return (
    <Container>
      <Content>
        <PercentageAnimation>{rounded}</PercentageAnimation>
        <ProgressBar style={{ scaleX }}></ProgressBar>
      </Content>
    </Container>
  );
};

export default Loader;
