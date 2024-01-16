import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.font.size.xs};
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  background-color: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 4px;
`;
