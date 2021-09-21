import LandingCardsLayout from '@/components/shared/LandingCardsLayout';
import LandingContainer from '@/components/shared/LandingContainer';
import TitleAndText from '@/components/shared/TitleAndText';
import { features } from '@/wording';
import { Wrapper } from './styled';

export default function Features() {
  return (
    <Wrapper>
      <LandingContainer>
        <TitleAndText
          title="¿Cómo lo hacemos realidad?"
          text="Nuestro modelo de programación es modular, permitiendonos realizar cualquier solución en pocos días."
          align="center"
        />
        <LandingCardsLayout data={features} />
      </LandingContainer>
    </Wrapper>
  );
}
