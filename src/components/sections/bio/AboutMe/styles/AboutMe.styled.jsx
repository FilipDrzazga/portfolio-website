import styled from 'styled-components';

const Container = styled.section`
display:flex;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
padding:${({ theme }) => theme.spacing.normal};
overflow: hidden;
`;
const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`;

export { Container, Content };