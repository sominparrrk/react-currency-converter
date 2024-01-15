import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.font.size.sm};
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Text = styled.p<{ $errorMsg?: boolean }>`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.$errorMsg ? props.theme.font.size.sm : props.theme.font.size.md };
  color: ${props => props.$errorMsg ? props.theme.color.error : props.theme.color.black };
`;

export const ClearHistory = styled.button`
  align-self: flex-end;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.font.size.sm};
`;
