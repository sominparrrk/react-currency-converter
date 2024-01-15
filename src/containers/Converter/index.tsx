import { useEffect, useState } from "react";
import { ClearHistory, Container, FormWrapper, Text } from "./Converter.styles";
import { Input } from "../../components/Input/Input";
import { CurrencySelect } from "../../components/CurrencySelect/CurrencySelect";
import { supportedCurrencies } from "../../lib/supportedCurrencies";
import { HistoryList } from "../HistoryList";
import getExchangeRate from "../../lib/api/getExchangeRate";

export const Converter = () => {
  const [fromCurrency, setFromCurrency] = useState('GBP');
  const [toCurrency, setToCurrency] = useState('');
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState<number | null>(null);
  const [exchangeRate, setExchangeRate] = useState<{ [key: string]: number }>({});
  const [isSameCurrencyError, setIsSameCurrencyError] = useState(false);
  const [conversionHistory, setConversionHistory] = useState<string[]>([]);

  const convertCurrency = () => {
    if (fromCurrency === toCurrency) {
      setIsSameCurrencyError(true);
      setToAmount(null);
    } else {
      setIsSameCurrencyError(false);
      setToAmount(fromAmount * exchangeRate[toCurrency]);
    }
  };

  useEffect(() => {
    getExchangeRate(fromCurrency).then(rates => setExchangeRate(rates));
  }, [fromCurrency]);

  useEffect(() => {
    toCurrency && setConversionHistory([`${fromAmount} ${fromCurrency} 👉 ${toCurrency}`, ...conversionHistory]);
  }, [toAmount]);

  useEffect(() => {
    toCurrency && convertCurrency();
  }, [fromCurrency, fromAmount, toCurrency, exchangeRate]);

  useEffect(() => {
    const localHistory = localStorage.getItem('history');
    localHistory && setConversionHistory(JSON.parse(localHistory));
  }, []);

  useEffect(() => {
    toCurrency !== '' && localStorage.setItem('history', JSON.stringify(conversionHistory));
  }, [conversionHistory]);

  return (
    <Container>
      <FormWrapper>
        <Input value={fromAmount} onChange={e => setFromAmount(Number(e.target.value))} />
        <CurrencySelect options={supportedCurrencies} value={fromCurrency} onChange={e => setFromCurrency(e.target.value)} />
      </FormWrapper>
      <Text $errorMsg={false}>equals</Text>
      <FormWrapper>
        {toCurrency && toAmount && <Text $errorMsg={false}>{toAmount.toFixed(2)} {toCurrency}</Text>}
        <CurrencySelect options={supportedCurrencies} placeholder="Select the currency" value={toCurrency} onChange={e => setToCurrency(e.target.value)} />
      </FormWrapper>
      {isSameCurrencyError && <Text $errorMsg={true}>Please select different currency</Text>}
      {conversionHistory.length > 0 && <HistoryList history={conversionHistory} />}
      <ClearHistory onClick={() => setConversionHistory([])}>Clear history</ClearHistory>
    </Container>
  );
};
