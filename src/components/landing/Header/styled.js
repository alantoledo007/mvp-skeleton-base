import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Nav = styled(motion.nav)`
  position: absolute;
  width: 100vw;
  top: 0;
  right: -100vw;
  height: 100vh;
  padding-top: 5em;
  padding-bottom: 1em;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  height: 100%;
`;

export const Ul = styled.ul`
  width: 100%;
  list-style: none;
`;

export const Li = styled.li`
  a {
    display: block;
    padding: 1em 2em;
    transition: all ease-in-out 0.2s;
    :hover {
      text-decoration: none;
      opacity: 0.2;
    }
  }
  ${({ button, outline, theme: { colors } }) =>
    (button &&
      css`
        a {
          margin: 0 2em 1em 2em;
          color: ${outline ? colors.text_light : colors.black};
          background-color: ${outline ? 'transparent' : colors.text_light};
          border: 2px solid ${outline ? colors.text_light : 'transparent'};
          border-radius: 0.5em;
          text-align: center;
        }
      `) ||
    css`
      a {
        color: ${colors.text_light};
      }
    `}
`;

export const ButtonToggle = styled.button`
  z-index: 1;
  top: 1em;
  right: 2em;
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  position: absolute;
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background: transparent;
  svg {
    stroke: ${({ theme }) => theme.colors.white};
  }
`;

export const Logo = styled.a`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`;

export const Wrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 0 15px #000;
  width: 100%;
`;

export const Container = styled.div`
  max-width: ${({ theme: { sizes } }) => sizes.laptopL};
  padding: 0 2em;
  margin: 0 auto;
  display: flex;
  place-items: center;
  height: 5em;
`;
