import styled from 'styled-components';

export default function LandingContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  max-width: ${({ theme: { sizes } }) => sizes.laptopL};
  padding: 5em 2em 5em 2em;
  margin: 0 auto;
`;
