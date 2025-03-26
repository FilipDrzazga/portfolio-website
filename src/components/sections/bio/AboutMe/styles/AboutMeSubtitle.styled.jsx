import {motion} from 'motion/react'
import styled from 'styled-components';
import {DEVICE} from '../../../../../styles/theme'

const Subtitle = styled(motion.h2)`
    margin-bottom: ${({theme}) => theme.spacing.medium};
    font-family:'Oswald-medium';
    font-size: ${({theme}) => theme.fontSizes.medium};
    color: ${({theme}) => theme.colors.primary};
    line-height: 1rem;
    text-align: justify;
    text-justify: inter-word;
    text-align-last: center;
    @media ${DEVICE.MOBILE_XS} {
        width: 89%;
    }
    @media ${DEVICE.MOBILE_S} {
        width: 100%;
        font-size:1.2rem;
        line-height: 1.3rem;
}
`;

export {Subtitle};