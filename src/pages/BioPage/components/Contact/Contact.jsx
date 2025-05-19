import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import {
  ContactWrapper,
  Header,
  Title,
  Subtitle,
  SocialLinksWrapper,
  SocialLinksList,
  SocialLinksListItem,
  SocialLinksLink,
  Footer,
  FooterText,
} from "./Contact.styled";

gsap.registerPlugin(SplitText);

const Contact = () => {
  return (
    <ContactWrapper>
      <Header>
        <Subtitle>FOR INQUIRIES, COLLABORATIONS, OR JOB</Subtitle>
        <Title>
          <a href="mailto:filip.drzazga@gmail.com">get in touch</a>
        </Title>
      </Header>
      <SocialLinksWrapper>
        <SocialLinksList>
          <SocialLinksListItem>
            <SocialLinksLink
              href="https://www.linkedin.com/in/filip-drzazga-b33435231/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </SocialLinksLink>
          </SocialLinksListItem>
          <SocialLinksListItem>
            <SocialLinksLink href="https://github.com/FilipDrzazga" target="_blank" rel="noopener noreferrer">
              GITHUB
            </SocialLinksLink>
          </SocialLinksListItem>
        </SocialLinksList>
      </SocialLinksWrapper>
      <Footer>
        <FooterText>2O25 BY FILIP DRZAZGA. ALL RIGHTS RESERVED.</FooterText>
      </Footer>
    </ContactWrapper>
  );
};

export default Contact;
