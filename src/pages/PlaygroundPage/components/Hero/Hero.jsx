import { HeroWrapper, Header, Title, Text } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroWrapper className="hero">
      <Header>
        <Title>Playground</Title>
        <Text>
          A space where I tinker with code, build playful animations and experiment with new ideas, featuring creative
          snippets, prototypes and small ‘lab’ projects, it’s all about having fun, learning and sharing the process.
        </Text>
      </Header>
    </HeroWrapper>
  );
};

export default Hero;
