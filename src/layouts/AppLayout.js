import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import { useCycle } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { withTheme } from 'styled-components';

export default function AppLayout({ children }) {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <CustomHeader />
        </Route>
        <Route path="*">
          <Header />
        </Route>
      </Switch>
      <main>{children}</main>
      <Footer />
    </>
  );
}

const CustomHeader = withTheme(({ theme }) => {
  const [isHeaderTransparent, toggleHeaderTransparent] = useCycle(true, false);

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
      wrapperProps={{
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
      }}
    />
  );
});
