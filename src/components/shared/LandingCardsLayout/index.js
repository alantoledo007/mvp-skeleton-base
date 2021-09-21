import TitleAndText from '../TitleAndText';
import { Card, Layout, Title } from './styled';

export default function LandingCardsLayout({ data }) {
  return (
    <Layout>
      {data.map((i) => (
        <Card key={i.id}>
          <TitleAndText
            TitleComponent={Title}
            title={i.title}
            text={i.description}
            align="center"
          />
        </Card>
      ))}
    </Layout>
  );
}
