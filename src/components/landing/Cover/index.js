import LandingContainer from '@/components/shared/LandingContainer';
import TitleAndText from '@/components/shared/TitleAndText';
import { Text, Title, Wrapper } from './styled';

export default function Cover() {
  return (
    <Wrapper>
      <LandingContainer pt="8em">
        <TitleAndText
          color="text_light"
          title="MVP Skeleton: Prueba tu idea rápidamente y sin programar"
          text="Construimos software modular y adaptable, lo que nos permite ser extremadamente rápidos"
          TitleComponent={Title}
          TextComponent={Text}
        />
      </LandingContainer>
    </Wrapper>
  );
}
