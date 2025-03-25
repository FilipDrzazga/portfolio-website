import {motion} from "motion/react"
import styled from "styled-components"

const Header = styled.header`
    width: 100%;
    margin-bottom:${({theme}) => theme.spacing.large};
    z-index:-1;
`;
const Title = styled(motion.h1)`
    position:relative;
    width:100%;
    height:${({theme}) => theme.fontSizes.large};
    font-family:'Oswald-medium';
    font-size:${({theme}) => theme.fontSizes.large};
    color: ${({theme}) => theme.colors.primary};
`;
const TitleSpanAbout = styled(motion.span)`
    position:absolute;
    top:0;
    left:0;
    color: ${({theme}) => theme.colors.secondary};
`;
const TitleSpanMe = styled(motion.span)`
    position:absolute;
    top:0;
    left:55%;
    color: ${({theme}) => theme.colors.secondary};
`;

export {Header, Title, TitleSpanAbout, TitleSpanMe};