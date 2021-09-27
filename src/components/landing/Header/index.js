import * as React from 'react';

import { useCycle } from 'framer-motion';

import MenuToggle from './MenuToggle';
import Navigation from './Navigation';

import { Nav, Logo, Wrapper, Container } from './styled';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <Wrapper initial={false} animate={isOpen ? 'open' : 'closed'}>
      <Container>
        <Link to={'/'} component={Logo}>
          MVP Skeleton
        </Link>
        <MenuToggle toggle={() => toggleOpen()} />
      </Container>
      <Nav
        variants={{
          closed: { translateX: 0 },
          open: { translateX: '-100vw' },
        }}>
        <Navigation toggle={toggleOpen} />
      </Nav>
    </Wrapper>
  );
}
