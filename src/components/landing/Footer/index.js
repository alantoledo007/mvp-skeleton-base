import LandingContainer from '@/components/shared/LandingContainer';
import TitleAndText from '@/components/shared/TitleAndText';
import { CopyRight, Divider, Wrapper, Layout } from './styled';

export default function Footer() {
  return (
    <Wrapper>
      <LandingContainer>
        <Layout>
          <TitleAndText
            align="center"
            color="text_light"
            title="MVP skeleton"
            text="Soñamos con un mercado en donde no existan barreras de entradas para el financiamiento de las pymes en Latinoamérica. "
          />
        </Layout>
        <Divider />
        <CopyRight>&copy; MVP Skeleton {new Date().getFullYear()}</CopyRight>
      </LandingContainer>
    </Wrapper>
  );
}
