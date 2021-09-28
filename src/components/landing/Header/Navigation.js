import { PATH_ROUTES } from '@/constants';
import { Link } from 'react-router-dom';
import { Li, Ul, NavigationWrapper } from './styled';

const links = [
  { label: 'Inicio', to: PATH_ROUTES.index },
  { label: 'Contacto', to: PATH_ROUTES.index },
  { label: 'Producto', to: PATH_ROUTES.index },
];

const container = {
  closed: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  open: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const itemAnimation = {
  closed: {
    opacity: 0,
  },
  open: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
};

export default function Navigation({ data = links, toggle, isOpen }) {
  const CustomLink = (props) => {
    return <Link onClick={toggle} {...props} />;
  };

  return (
    <NavigationWrapper>
      <Ul>
        {/* variants={container} animate={isOpen ? 'open' : 'closed'} */}
        {data.map((item, i) => (
          <Li
            custom={i}
            key={item.label}
            variants={itemAnimation}
            animate={isOpen ? 'open' : 'closed'}>
            <CustomLink to={item.to}>{item.label}</CustomLink>
          </Li>
        ))}
      </Ul>

      <Ul>
        <Li
          button
          custom={links.length}
          variants={itemAnimation}
          animate={isOpen ? 'open' : 'closed'}>
          <CustomLink to={'/register'}>Crearse una cuenta</CustomLink>
        </Li>
        <Li
          button
          outline
          custom={links.length + 1}
          variants={itemAnimation}
          animate={isOpen ? 'open' : 'closed'}>
          <CustomLink to={'/register'}>Ya tengo una cuenta</CustomLink>
        </Li>
      </Ul>
    </NavigationWrapper>
  );
}
