import { PARAGRAPH_TEXT_ARR } from "../../../../utils/constants";
import { ParagraphsContainer, Text, Letter } from "./AboutMeParagraphs.styled";

// Animation for a destop view
// const CONTAINER_VARIANTS = {
//   animate: {
//     transition: {
//       staggerChildren: 0.01,
//     },
//   },
// };
// const LETTERS_VARIANTS = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1, transition: { duration: 1 } },
// };

// Animation for a mobile view
const ITEM_VARIANTS = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } },
};


const AboutMeParagraphs = () => {
  return (
    <ParagraphsContainer>
      {PARAGRAPH_TEXT_ARR.map((paragraph, i) => (
        <Text variants={ITEM_VARIANTS} initial="initial" whileInView="animate" viewport={{ once: true }} key={i}>
          {paragraph.split("").map((char, j) => (
            <Letter key={j}>
              {char}
            </Letter>
          ))}
        </Text>
      ))}
    </ParagraphsContainer>
  );
};

export default AboutMeParagraphs;
