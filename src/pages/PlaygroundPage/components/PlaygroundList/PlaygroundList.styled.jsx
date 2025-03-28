import styled from "styled-components";
import {motion} from 'motion/react';
import { DEVICE } from "../../../../styles/theme";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  width: 100%;
height: auto;
`;
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width:100%;
    gap: ${({ theme }) => theme.spacing.normal};
`;
const ListItem = styled(motion.li)`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.normal};
    width: 100%;
    height: auto;
`;
const ItemHeader = styled(motion.header)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ItemTitle = styled(motion.h2)`
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-family: 'Oswald-regular';
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
      @media ${DEVICE.MOBILE_S} {
        font-size: 0.8rem;
      }
`;
const ItemNumber = styled(motion.span)`
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-family: 'Oswald-regular';
    color: ${({ theme }) => theme.colors.primary};
      @media ${DEVICE.MOBILE_S} {
        font-size: 0.8rem;
      }
`;
const ImgContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40vh;
    background-color: ${({ theme }) => theme.colors.primary};
`;
const ItemDescriptionContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.normal};
    width: 100%;
    height: auto;
`;
const ItemTechStack = styled(motion.p)`
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-family: 'Oswald-regular';
    color: ${({ theme }) => theme.colors.primary};
      @media ${DEVICE.MOBILE_S} {
        font-size: 0.8rem;
      }
`;

export { Container, List, ListItem, ItemHeader,ItemTitle,ItemNumber, ImgContainer, ItemDescriptionContainer, ItemTechStack };

// ListItem, Header, Description, Technologies, ImagePlaceholder