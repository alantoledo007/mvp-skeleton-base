import styled from 'styled-components';

export const Layout = styled.div`
  margin-top: 3em;
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
`;

export const Title = styled.h4`
  margin-bottom: 2em;
`;

export const Card = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  padding: 4em 2em;
  border-radius: 15px;
`;
