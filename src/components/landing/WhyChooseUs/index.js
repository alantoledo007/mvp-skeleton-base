import LandingCardsLayout from '@/components/shared/LandingCardsLayout';
import LandingContainer from '@/components/shared/LandingContainer';
import TitleAndText from '@/components/shared/TitleAndText';
import { why_choose_us } from '@/wording';
import { Wrapper } from './styled';

export default function WhyChooseUs() {
  return (
    <Wrapper>
      <LandingContainer>
        <TitleAndText
          align="center"
          title="¿Por qué elegirnos?"
          text="Si quieres fundar una startup y recibir inversiones, necesitas probar tu idea."
        />
        <LandingCardsLayout data={why_choose_us} />
      </LandingContainer>
    </Wrapper>
  );
}
