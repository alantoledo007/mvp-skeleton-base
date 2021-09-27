import { PATH_ROUTES } from '@/constants';
import { Link } from 'react-router-dom';
import { Li, Ul, NavigationWrapper } from './styled';

const links = [{ label: 'Inicio', to: PATH_ROUTES.index }];

export default function Navigation({ data = links, toggle }) {
  const CustomLink = (props) => {
    return <Link onClick={toggle} {...props} />;
  };

  return (
    <NavigationWrapper>
      <Ul>
        {data.map((item) => (
          <Li key={item.label}>
            <CustomLink to={item.to}>{item.label}</CustomLink>
          </Li>
        ))}
      </Ul>

      <Ul>
        <Li button>
          <CustomLink to={'/register'}>Crearse una cuenta</CustomLink>
        </Li>
        <Li button outline>
          <CustomLink to={'/register'}>Ya tengo una cuenta</CustomLink>
        </Li>
      </Ul>
    </NavigationWrapper>
  );
}
