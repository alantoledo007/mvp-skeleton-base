import LandingContainer from '@/components/shared/LandingContainer';
import TitleAndText from '@/components/shared/TitleAndText';
import { features } from '@/wording';
import { FeaturesContainer, Title, Wrapper } from './styled';

export default function Features() {
  return (
    <Wrapper>
      <LandingContainer>
        <TitleAndText
          title="¿Cómo lo hacemos realidad?"
          text="Nuestro modelo de programación es modular, lo que permite realizar cualquier solución en pocos días."
          align="center"
        />
        <FeaturesContainer>
          {features.map((i) => (
            <div key={i.id}>
              <TitleAndText
                TitleComponent={Title}
                title={i.title}
                text={i.description}
              />
            </div>
          ))}
        </FeaturesContainer>
      </LandingContainer>
    </Wrapper>
  );
}
