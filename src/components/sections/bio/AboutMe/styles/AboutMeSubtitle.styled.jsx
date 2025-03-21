import styled from 'styled-components';

const Subtitle = styled.h2`
margin-bottom: ${({theme}) => theme.spacing.medium};
    font-family:'Oswald-medium';
    font-size: ${({theme}) => theme.fontSizes.medium};
    color: ${({theme}) => theme.colors.primary};
    line-height: 1rem;
    text-align:center;
`;

export {Subtitle};