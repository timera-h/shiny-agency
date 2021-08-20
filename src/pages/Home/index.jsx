import styled from 'styled-components';

const Container = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column
`

function Home() {
  return (
  <Container>
    <h1> page d'acceuil 🏡 </h1>
  </Container>
  );
}

export default Home;