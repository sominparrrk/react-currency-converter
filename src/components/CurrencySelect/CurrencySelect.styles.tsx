import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: 200px;
  height: 32px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.md};

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.black};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.color.black};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;
