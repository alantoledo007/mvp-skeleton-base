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
      if (window.pageYOffset >= 80 && isHeaderTransparent) {
        toggleHeaderTransparent();
      } else if (window.pageYOffset < 80 && !isHeaderTransparent) {
        toggleHeaderTransparent();
      }
    };
    window.addEventListener('scroll', onHeaderScroll);

    return () => {
      window.removeEventListener('scroll', onHeaderScroll);
    };
  }, [isHeaderTransparent]);

  return (
    <Header
      wrapperProps={
        location.pathname === '/'
          ? {
              transition: {
                type: 'tween',
                duration: 0.5,
                ease: 'easeOut',
              },
              initial: 'transparent',
              variants: {
                solid: {
                  backgroundColor: theme.colors.header,
                },
                transparent: {
                  backgroundColor: 'transparent',
                },
              },
              animate: !isHeaderTransparent ? 'solid' : 'transparent',
            }
          : {}
      }
    />
  );
});
