import { CONTACT_TITLE } from "../../../../../utils/constants";
import { Header, Title, Subtitle, Letter } from "../styles/ContactTitle.styled";

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
const SUBTITLE_VARIANTS = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const ContactTitle = () => {
  return (
    <Header>
      {CONTACT_TITLE.map((title, i) => (
        <Title variants={CONTAINER_VARIANTS} initial="initial" whileInView="animate" viewport={{ once: true }} key={i}>
          {title.split("").map((char, i) => (
            <Letter variants={LETTERS_VARIANTS} key={i}>
              {char}
            </Letter>
          ))}
        </Title>
      ))}
      <Subtitle variants={SUBTITLE_VARIANTS} initial="initial" whileInView="animate" viewport={{ once: true }}>
        GET IN TOUCH
      </Subtitle>
    </Header>
  );
};

export default ContactTitle;
