import { DefaultText, DefaultTitle, Wrapper } from './styled';

export default function TitleAndText({
  title,
  text,
  TitleComponent,
  TextComponent,
  align,
  color,
}) {
  const Title = TitleComponent || DefaultTitle;
  const Text = TextComponent || DefaultText;
  return (
    <Wrapper align={align} color={color}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
}
