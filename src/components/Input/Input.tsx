import { StyledInput } from "./Input.styles";

type InputProps = {
  value: number | undefined;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input:React.FC<InputProps> = ({
  type = 'number',
  ...rest
}) => <StyledInput {...rest} type={type} />;
