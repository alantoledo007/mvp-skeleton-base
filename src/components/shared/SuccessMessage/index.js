import Lottie from 'lottie-react';
import lottieJson from '@/assets/lottie/success.json';
import Button from '@/components/shared/Button';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { themeDefault } from '@/styles/theme';

export default function SuccessMessage({ message, to }) {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <Container variants={variants} initial="hidden" animate="visible">
      <ContainerLottie>
        <LottieView loop={false} animationData={lottieJson} />
      </ContainerLottie>

      <Content>
        {message && <Message>{message}</Message>}
        <Button to={to}>Aceptar</Button>
      </Content>
    </Container>
  );
}

const LottieView = styled(Lottie)`
  max-width: 30em;
`;

const Container = styled(motion.div)`
  background-color: ${themeDefault.colors.green};
  position: absolute;
  min-height: 100vh;
  width: 100%;
  display: grid;
  gap: 1em;
  padding: 2em 0;
`;

const ContainerLottie = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  align-items: center;
`;

const Message = styled.p`
  font-family: InterLight;
  font-size: 2rem;
  margin-bottom: 1em;
  color: #ffffff;
`;
