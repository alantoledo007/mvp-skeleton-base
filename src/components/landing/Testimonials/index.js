import LandingContainer from '@/components/shared/LandingContainer';
import TitleAndText from '@/components/shared/TitleAndText';
import { Wrapper } from './styled';

export default function Testimonials() {
  return (
    <Wrapper>
      <LandingContainer>
        <TitleAndText
          title="¿Qué dicen nuestros clientes?"
          text="La fábrica de software argentina especializada en desarrollo de MVP's para las startup's en Latinoamérica."
          align="center"
        />
      </LandingContainer>
    </Wrapper>
  );
}
