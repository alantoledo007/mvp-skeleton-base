import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import { useCycle } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import styled, { withTheme } from 'styled-components';

export default function AppLayout({ children }) {
  return (
    <>
      <CustomHeader />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  min-height: 100vh;
`;

const CustomHeader = withTheme(({ theme }) => {
  const [isHeaderTransparent, toggleHeaderTransparent] = useCycle(true, false);
  const location = useLocation();

  useEffect(() => {
    const onHeaderScroll = () => {
      if (window.pageYOffset >= 55 && isHeaderTransparent) {
        toggleHeaderTransparent();
      } else if (window.pageYOffset < 55 && !isHeaderTransparent) {
        toggleHeaderTransparent();
      }
    };
    window.addEventListener('scroll', onHeaderScroll);

    return () => {
      window.removeEventListener('scroll', onHeaderScroll);
    };
  }, [isHeaderTransparent]);

  console.log(location.pathname);

  return (
    <Header
      wrapperProps={{
        transition: {
          type: 'tween',
          duration: 0.2,
          ease: 'easeOut',
        },
        initial: 'transparent',
        variants: {
          solid: {
            backgroundColor: theme.colors.header,
          },
          transparent: {
            backgroundColor: theme.colors.header + '00',
          },
        },
        animate:
          !isHeaderTransparent || location.pathname !== '/'
            ? 'solid'
            : 'transparent',
      }}
    />
  );
});
