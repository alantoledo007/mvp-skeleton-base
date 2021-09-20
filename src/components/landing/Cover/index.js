import LandingContainer from '@/components/shared/LandingContainer';
import TitleAndText from '@/components/shared/TitleAndText';
import { Text, Title, Wrapper } from './styled';

export default function Cover() {
  return (
    <Wrapper>
      <LandingContainer>
        <TitleAndText
          color="text_light"
          title="Somos MVP Skeleton y sabemos que tu tiempo es muy valioso"
          text="Fabricamos software de calidad, escalable y extremadamente rápido."
          TitleComponent={Title}
          TextComponent={Text}
        />
      </LandingContainer>
    </Wrapper>
  );
}
