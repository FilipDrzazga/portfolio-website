import {motion} from 'motion/react'
import styled from 'styled-components';
import {DEVICE} from '../../../../../styles/theme'

const TechStackContainer = styled.div`
    @media ${DEVICE.MOBILE_XS} {
    width: 90%;
}
@media ${DEVICE.MOBILE_S} {
    width: 80%;
}
`;
const TechStackTitle = styled(motion.h3)`
    font-family: 'Oswald-medium';
    font-family:'Oswald-medium';
    font-size: ${({theme}) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1rem;
    text-align: justify;
    text-justify: inter-word;
`;

export { TechStackContainer, TechStackTitle };