import { Wrapper } from './styled';

export default function LandingWrapper({ bgcolor, children }) {
  return <Wrapper bgcolor={bgcolor}>{children}</Wrapper>;
}
