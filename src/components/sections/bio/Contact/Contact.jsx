import { ContactTitle, FooterText, SocialLinks } from "./ui";
import {Container, Content} from './styles/Contact.styled';

const ContactContainer = () => {

  return (
    <Container>
      <Content>
        <ContactTitle/>
        <SocialLinks/>
        <FooterText/>
      </Content>
    </Container>
  );
};

export default ContactContainer;
