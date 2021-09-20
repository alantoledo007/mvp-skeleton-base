import LandingContainer from '@/components/shared/LandingContainer';
import TitleAndText from '@/components/shared/TitleAndText';
import { Text, Title, Wrapper } from './styled';

export default function Promootion() {
  return (
    <Wrapper>
      <LandingContainer>
        <TitleAndText
          title="¡Promoción de apertura!"
          text="Le bonificamos $300.000 ARS a nuestros primeros 10 clientes"
          TitleComponent={Title}
          TextComponent={Text}
        />
      </LandingContainer>
    </Wrapper>
  );
}
