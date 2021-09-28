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
          text="Hacemos realidad tu idea extremadamente rápido y al mejor precio del mercado."
          TitleComponent={Title}
          TextComponent={Text}
        />
      </LandingContainer>
    </Wrapper>
  );
}
