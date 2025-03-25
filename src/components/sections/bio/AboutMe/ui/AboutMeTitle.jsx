import { useScroll, useTransform } from 'motion/react';
import { Header, Title, TitleSpanAbout, TitleSpanMe } from '../styles/AboutMeTitle.styled';

const ITEM_VARIANTS = {
  initial:{y:20, opacity:0},
  animate:{y:0, opacity:1, transition:{duration:1}},
};


const AboutMeTitle = () => {
  const {scrollYProgress} = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.45], ['90%', '0%']);

  return (
    <Header>
      <Title>
        <TitleSpanAbout variants={ITEM_VARIANTS} initial='initial' whileInView='animate' viewport={{once:true}}>ABOUT</TitleSpanAbout>
        <TitleSpanMe style={{x}} variants={ITEM_VARIANTS} initial='initial' whileInView='animate' viewport={{once:true}}>ME</TitleSpanMe>
      </Title>
    </Header>
  );
};

export default AboutMeTitle;
