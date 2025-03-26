import styled from 'styled-components';
import {motion} from 'motion/react';
import {DEVICE} from '../../../../../styles/theme';

const ParagraphsContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    margin-bottom: ${({theme}) => theme.spacing.medium};
    z-index:-1;
@media ${DEVICE.MOBILE_XS} {
    width: 90%;
}
@media ${DEVICE.MOBILE_S} {
    width: 80%;
}
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
`;

export {ParagraphsContainer, Text, Letter};