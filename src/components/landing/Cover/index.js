import LandingContainer from '@/components/shared/LandingContainer';
import TitleAndText from '@/components/shared/TitleAndText';
import { Text, Title, Wrapper } from './styled';

export default function Cover() {
  return (
    <Wrapper>
      <LandingContainer>
        <TitleAndText
          color="text_light"
          title="Construimos tu MVP ultra rápido, escalable y al mejor precio"
          text="Fabricamos software de calidad y extremadamente rápido. Somos MVP Skeleton y sabemos que tu tiempo es muy valioso."
          TitleComponent={Title}
          TextComponent={Text}
        />
      </LandingContainer>
    </Wrapper>
  );
}
