import styled from 'styled-components';
import {motion} from 'motion/react';

const CoordinatesDisplayContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: clamp(10vh, 15vh, 20vh);
    padding-top: 2rem; */ added to get same position as nav on mobile */
`;
const CoordinatesDisplayItem = styled(motion.div)`
    font-family: 'Oswald-regular';
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.primary};
`;


export { CoordinatesDisplayContainer, CoordinatesDisplayItem };
