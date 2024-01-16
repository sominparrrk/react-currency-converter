import { Converter } from '../Converter';
import { Container, Title, Wrapper } from './Main.styles';

export const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Title>💷 Currency Converter 💵</Title>
        <Converter />
      </Wrapper>
    </Container>
  );
};
