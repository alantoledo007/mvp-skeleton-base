import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ theme, bgcolor }) =>
    theme.colors[bgcolor] || theme.colors.white};
`;
