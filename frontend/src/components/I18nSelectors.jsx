import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../contexts/CurrencyContext';

export default function I18nSelectors({ isMobile = false }) {
  const { i18n } = useTranslation();
  const { currency, setCurrency, currencies } = useCurrency();
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);
  const containerRef = useRef(null);

  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'fr';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setLangOpen(false);
        setCurrOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  const changeCurrency = (code) => {
    setCurrency(code);
    setCurrOpen(false);
  };

  if (isMobile) {
    return (
      <div className="mobile-i18n-wrap" style={{ display: 'flex', gap: '10px', marginTop: '15px', padding: '0 10px' }}>
        <select
          value={currentLang}
          onChange={(e) => changeLanguage(e.target.value)}
          className="i18n-select-mobile"
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-card)',
            color: 'var(--text-color)',
            fontSize: '0.85rem'
          }}
        >
          <option value="fr">🇫🇷 Français</option>
          <option value="en">🇬🇧 English</option>
        </select>

        <select
          value={currency}
          onChange={(e) => changeCurrency(e.target.value)}
          className="i18n-select-mobile"
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-card)',
            color: 'var(--text-color)',
            fontSize: '0.85rem'
          }}
        >
          <option value="XOF">FCFA (XOF)</option>
          <option value="EUR">€ EUR</option>
          <option value="USD">$ USD</option>
        </select>
      </div>
    );
  }

  return (
    <div className="i18n-selectors" ref={containerRef} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Language selector */}
      <div className="i18n-dropdown" style={{ position: 'relative' }}>
        <button
          type="button"
          className="i18n-btn"
          onClick={() => { setLangOpen(!langOpen); setCurrOpen(false); }}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-color)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 8px',
            borderRadius: '4px'
          }}
        >
          <span>{currentLang === 'en' ? '🇬🇧 EN' : '🇫🇷 FR'}</span>
          <i className="fas fa-chevron-down" style={{ fontSize: '0.65rem', opacity: 0.7 }} />
        </button>

        {langOpen && (
          <div
            className="i18n-menu"
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '6px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              padding: '6px 0',
              minWidth: '120px',
              zIndex: 100
            }}
          >
            <button
              type="button"
              onClick={() => changeLanguage('fr')}
              style={{
                width: '100%',
                padding: '8px 14px',
                textAlign: 'left',
                background: currentLang === 'fr' ? 'var(--bg-secondary)' : 'transparent',
                border: 'none',
                color: 'var(--text-color)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              🇫🇷 Français
            </button>
            <button
              type="button"
              onClick={() => changeLanguage('en')}
              style={{
                width: '100%',
                padding: '8px 14px',
                textAlign: 'left',
                background: currentLang === 'en' ? 'var(--bg-secondary)' : 'transparent',
                border: 'none',
                color: 'var(--text-color)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              🇬🇧 English
            </button>
          </div>
        )}
      </div>

      <span style={{ opacity: 0.3, fontSize: '0.8rem' }}>|</span>

      {/* Currency selector */}
      <div className="i18n-dropdown" style={{ position: 'relative' }}>
        <button
          type="button"
          className="i18n-btn"
          onClick={() => { setCurrOpen(!currOpen); setLangOpen(false); }}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-color)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 8px',
            borderRadius: '4px'
          }}
        >
          <span>{currencies[currency]?.symbol || currency}</span>
          <i className="fas fa-chevron-down" style={{ fontSize: '0.65rem', opacity: 0.7 }} />
        </button>

        {currOpen && (
          <div
            className="i18n-menu"
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '6px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              padding: '6px 0',
              minWidth: '130px',
              zIndex: 100
            }}
          >
            {Object.values(currencies).map((curr) => (
              <button
                key={curr.code}
                type="button"
                onClick={() => changeCurrency(curr.code)}
                style={{
                  width: '100%',
                  padding: '8px 14px',
                  textAlign: 'left',
                  background: currency === curr.code ? 'var(--bg-secondary)' : 'transparent',
                  border: 'none',
                  color: 'var(--text-color)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{curr.name}</span>
                <span style={{ opacity: 0.6, fontSize: '0.75rem' }}>{curr.symbol}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
