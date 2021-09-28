import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';

export default function LandingLayout({ children, headerProps }) {
  return (
    <>
      <Header {...headerProps} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
