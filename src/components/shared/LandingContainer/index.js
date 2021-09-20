import styled from 'styled-components';

export default function LandingContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  max-width: ${({ theme: { sizes } }) => sizes.laptopL};
  padding: 10em 1em 5em 1em;
  margin: 0 auto;
`;
