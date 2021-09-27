import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.text_light};
`;

export const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ theme: { colors } }) => colors.orange};
  margin: 1.5em 0;
`;

export const CopyRight = styled.p`
  text-align: center;
`;

export const Layout = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr;
`;
