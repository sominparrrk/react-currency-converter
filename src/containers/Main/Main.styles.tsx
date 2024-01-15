import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.font.size.lg};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 4px;
  padding: ${({ theme }) => theme.font.size.md};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xl};
  margin: 0;
  text-align: center;
`;
