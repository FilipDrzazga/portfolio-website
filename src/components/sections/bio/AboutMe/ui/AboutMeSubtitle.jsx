import { Subtitle} from '../styles/AboutMeSubtitle.styled'

const ITEM_VARIANTS = {
  initial:{y:20, opacity:0},
  animate:{y:0, opacity:1, transition:{duration:1}},
};

const AboutMeSubtitle = () => {
  return (
   <Subtitle variants={ITEM_VARIANTS} initial='initial' whileInView='animate' viewport={{once:true}}>HI. I’M FILIP, CREATIVE FRONTEND DEVELOPER BASED IN WATFORD.</Subtitle>
  );
};

export default AboutMeSubtitle;
