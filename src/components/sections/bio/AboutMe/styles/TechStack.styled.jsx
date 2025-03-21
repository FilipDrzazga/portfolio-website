import styled from 'styled-components';

const TechStackContainer = styled.div``;
const TechStackTitle = styled.h3`
    font-family: 'Oswald-medium';
    font-family:'Oswald-medium';
    font-size: ${({theme}) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1rem;
    text-align: justify;
    text-justify: inter-word;
`;

export { TechStackContainer, TechStackTitle };