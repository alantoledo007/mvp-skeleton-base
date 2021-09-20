import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: ${({
    theme: {
      colors: { black_gradient: color },
    },
  }) =>
    `linear-gradient(120deg, ${color[0]} 0%, ${color[1]} 20%, ${color[1]} 80%, ${color[2]} 100%)`};
`;

export const Title = styled.h1``;

export const Text = styled.p`
  font-size: 1.4rem;
`;
