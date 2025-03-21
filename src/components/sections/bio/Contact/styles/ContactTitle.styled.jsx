import styled from "styled-components";

const Header = styled.header`
width: 100%;
margin-bottom: ${({theme}) => theme.spacing.medium};
`
const Title = styled.h1`
    font-family:'Oswald-medium';
    font-size: ${({theme}) => theme.fontSizes.medium};
    color: ${({theme}) => theme.colors.primary};
    line-height: 1rem;
    text-align: justify;
    text-align-last: justify;
`;
const Subtitle = styled.h2`
    font-family:'Oswald-medium';
    font-size:${({theme}) => theme.fontSizes.large};
    color: ${({theme}) => theme.colors.primary};
    word-spacing: -0.2rem;
    line-height: ${({theme}) => theme.fontSizes.large};
`;

export { Header, Title, Subtitle };