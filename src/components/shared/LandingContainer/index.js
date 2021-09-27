import styled from 'styled-components';

export default function LandingContainer({ children, pt }) {
  return <Container pt={pt}>{children}</Container>;
}

const Container = styled.div`
  max-width: ${({ theme: { sizes } }) => sizes.laptopL};
  padding: ${({ pt }) => pt || '5em'} 2em 5em 2em;
  margin: 0 auto;
`;
