import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FeaturesContainer = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-top: 3em;

  div {
    div:first-child {
      background-color: ${({ theme: { colors } }) => colors.white};
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
      padding: 4em 2em;
      border-radius: 5px;
    }
  }
`;

export const Title = styled.h4`
  margin-bottom: 2em;
`;
