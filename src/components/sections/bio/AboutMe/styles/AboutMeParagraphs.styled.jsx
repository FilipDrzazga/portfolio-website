import styled from 'styled-components';
import {motion} from 'motion/react';

const ParagraphsContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    margin-bottom: ${({theme}) => theme.spacing.medium};
    z-index:-1;

`;
const Text = styled(motion.p)`
    font-family: 'Oswald-regular';
    font-size: ${({theme}) => theme.fontSizes.small};
    color: ${({theme}) => theme.colors.primary};
    line-height: 1rem;
    text-align: justify;
    text-justify: inter-word;
`;
const Letter = styled(motion.span)`
position: relative;
color: ${({theme}) => theme.colors.primary};
// &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 100%;
//     width: 5px;
//     height: 100%;
//     background-color: ${({theme}) => theme.colors.primary};
//     opacity: var(--after-opacity);
// }
`;

export {ParagraphsContainer, Text, Letter};