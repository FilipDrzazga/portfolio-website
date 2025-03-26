import {motion} from 'motion/react';
import styled from "styled-components";

const Header = styled.header`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-bottom: ${({theme}) => theme.spacing.medium};
`
const Title = styled(motion.h1)`
    width:98%;
    font-family:'Oswald-medium';
    font-size: ${({theme}) => theme.fontSizes.medium};
    color: ${({theme}) => theme.colors.primary};
    line-height: 1rem;
    text-align: justify;
    text-align-last: justify;
`;
const Subtitle = styled(motion.h2)`
    font-family:'Oswald-medium';
    font-size:${({theme}) => theme.fontSizes.large};
    color: ${({theme}) => theme.colors.primary};
    word-spacing: -0.2rem;
    line-height: ${({theme}) => theme.fontSizes.large};
`;
const Letter = styled(motion.span)``
export { Header, Title, Subtitle, Letter };