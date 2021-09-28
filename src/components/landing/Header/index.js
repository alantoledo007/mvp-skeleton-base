import { useCycle } from 'framer-motion';

import MenuToggle from './MenuToggle';
import Navigation from './Navigation';

import { Nav, Logo, Wrapper, Container } from './styled';
import { Link } from 'react-router-dom';

export default function Header({ wrapperProps }) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <Wrapper {...wrapperProps}>
      <Container>
        <Link to={'/'} component={Logo}>
          MVP Skeleton
        </Link>
        <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
      </Container>
      <Nav
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
        variants={{
          closed: {
            translateX: 0,
            transition: { type: 'tween', duration: 0.2, delay: 0.35 },
          },
          open: {
            translateX: '-100vw',
          },
        }}>
        <Navigation isOpen={isOpen} toggle={toggleOpen} />
      </Nav>
    </Wrapper>
  );
}
