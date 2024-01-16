import { Currency } from '../../types/currency';
import { StyledSelect } from './CurrencySelect.styles';

type CurrencySelectProps = {
  options: Currency[];
  value: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const CurrencySelect: React.FC<CurrencySelectProps> = ({ placeholder, value, onChange, options }) => {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {placeholder && <option value=''>{placeholder}</option>}
      {options.map((option: Currency, index: number) => (
        <option key={index} value={option.code}>
          {option.code} - {option.name}
        </option>
      ))}
    </StyledSelect>
  );
};
