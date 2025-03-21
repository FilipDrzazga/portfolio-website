import {SocialLinksContainer, SocialLinksList, SocialLinksListItem, SocialLinksLink} from '../styles/SocialLinks.styled'

const SocialLinks = () => {

  return (
    <SocialLinksContainer>
      <SocialLinksList>
        <SocialLinksListItem><SocialLinksLink>GITHUB</SocialLinksLink></SocialLinksListItem>
        <SocialLinksListItem><SocialLinksLink>LINKEDIN</SocialLinksLink></SocialLinksListItem>
      </SocialLinksList>
    </SocialLinksContainer>
  );
};

export default SocialLinks;