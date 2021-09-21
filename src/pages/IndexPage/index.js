import Cover from '@/components/landing/Cover';
import Features from '@/components/landing/Features';
import Promotion from '@/components/landing/Promotion';
import WhyChooseUs from '@/components/landing/WhyChooseUs';

export default function IndexPage() {
  return (
    <div>
      <main>
        <Cover />
        <Features />
        <Promotion />
        <WhyChooseUs />
      </main>
    </div>
  );
}
