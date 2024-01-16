import { Container, ListContainer } from './HistoryList';

type HistoryListProps = {
  history: string[];
};

export const HistoryList: React.FC<HistoryListProps> = ({ history }) => {
  return (
    <Container>
      {history.map((item: string, index: number) => (
        <ListContainer key={index}>{item}</ListContainer>
      ))}
    </Container>
  );
};
