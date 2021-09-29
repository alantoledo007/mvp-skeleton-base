import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import styled from 'styled-components';

export default function LandingLayout({ children, headerProps }) {
  return (
    <>
      <Header {...headerProps} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  min-height: 100vh;
`;
