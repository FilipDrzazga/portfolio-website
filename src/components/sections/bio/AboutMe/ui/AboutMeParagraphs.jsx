import { PARAGRAPH_TEXT_ARR } from "../../../../../utils/constants";
import { ParagraphsContainer, Text, Letter } from "../styles/AboutMeParagraphs.styled";

const CONTAINER_VARIANTS = {
  animate: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};
const LETTERS_VARIANTS = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const AboutMeParagraphs = () => {
  return (
    <ParagraphsContainer>
      {PARAGRAPH_TEXT_ARR.map((paragraph, i) => (
        <Text variants={CONTAINER_VARIANTS} initial="initial" whileInView="animate" viewport={{ once: true }} key={i}>
          {paragraph.split("").map((char, i) => (
            <Letter variants={LETTERS_VARIANTS} key={i}>
              {char}
            </Letter>
          ))}
        </Text>
      ))}
    </ParagraphsContainer>
  );
};

export default AboutMeParagraphs;
