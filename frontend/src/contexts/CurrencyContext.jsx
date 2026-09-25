import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const CURRENCIES = {
  XOF: { code: 'XOF', symbol: 'FCFA', rate: 1, decimals: 0, position: 'after', name: 'FCFA' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.00152449, decimals: 2, position: 'after', name: 'EUR (€)' },
  USD: { code: 'USD', symbol: '$', rate: 0.00166667, decimals: 2, position: 'before', name: 'USD ($)' },
};

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState('XOF');

  useEffect(() => {
    const saved = localStorage.getItem('currency');
    if (saved && CURRENCIES[saved]) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (code) => {
    if (CURRENCIES[code]) {
      setCurrencyState(code);
      localStorage.setItem('currency', code);
    }
  };

  const formatPrice = (amountInXOF) => {
    const n = Number(amountInXOF) || 0;
    const curr = CURRENCIES[currency] || CURRENCIES.XOF;
    const converted = n * curr.rate;

    const formatted = converted.toLocaleString(
      currency === 'EUR' ? 'fr-FR' : currency === 'USD' ? 'en-US' : 'fr-FR',
      {
        minimumFractionDigits: curr.decimals,
        maximumFractionDigits: curr.decimals,
      }
    );

    return curr.position === 'before'
      ? `${curr.symbol}${formatted}`
      : `${formatted} ${curr.symbol}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, currencies: CURRENCIES }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
