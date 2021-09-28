import Cover from '@/components/landing/Cover';
import Features from '@/components/landing/Features';

import Promotion from '@/components/landing/Promotion';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import LandingLayout from '@/layouts/LandingLayout';
//import { useCycle } from 'framer-motion';
//import { useEffect } from 'react';
import { withTheme } from 'styled-components';

const IndexPage = withTheme(() => {
  //const [isHeaderTransparent, toggleHeaderTransparent] = useCycle(true, false);

  return (
    <LandingLayout
    // headerProps={{
    //   wrapperProps: {
    //     transition: {
    //       type: 'tween',
    //       duration: 0.5,
    //       ease: 'easeOut',
    //     },
    //     initial: 'transparent',
    //     variants: {
    //       solid: {
    //         backgroundColor: theme.colors.header,
    //       },
    //       transparent: {
    //         backgroundColor: 'transparent',
    //       },
    //     },
    //     animate: !isHeaderTransparent ? 'solid' : 'transparent',
    //   },
    // }}
    >
      <Cover />
      <Features />
      <Promotion />
      <WhyChooseUs />
    </LandingLayout>
  );
});

export default IndexPage;
