import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ color, theme: { colors } }) =>
    colors[color] || color || colors.text};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1em;
    line-height: 1.3;
  }

  p {
    line-height: 1.5;
  }
`;

export const DefaultTitle = styled.h2``;
export const DefaultText = styled.p``;
