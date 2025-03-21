import {motion} from "motion/react"
import styled from "styled-components"

const Header = styled.header`
    width: 100%;
    margin-bottom:${({theme}) => theme.spacing.large};
`;
const Title = styled(motion.h1)`
    font-family:'Oswald-medium';
    font-size:${({theme}) => theme.fontSizes.large};
    color: ${({theme}) => theme.colors.primary};
`;

export {Header, Title};