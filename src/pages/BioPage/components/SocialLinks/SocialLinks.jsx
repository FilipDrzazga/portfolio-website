import { SOCIAL_LINKS } from "../../../../utils/constants";
import { SocialLinksContainer, SocialLinksList, SocialLinksListItem, SocialLinksLink } from "./SocialLinks.styled";

const CONTAINER_VARIANTS = {
  animate: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};
const LINK_VARIANTS = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <SocialLinksList>
        {SOCIAL_LINKS.map((link, i) => (
          <SocialLinksListItem
            variants={CONTAINER_VARIANTS}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            key={i}
          >
            <SocialLinksLink variants={LINK_VARIANTS} href={link.url} target={link.target} rel={link.rel}>
              {link.name}
            </SocialLinksLink>
          </SocialLinksListItem>
        ))}
      </SocialLinksList>
    </SocialLinksContainer>
  );
};

export default SocialLinks;
