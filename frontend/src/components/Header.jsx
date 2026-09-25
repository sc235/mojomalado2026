import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useCurrency } from '../contexts/CurrencyContext';
import I18nSelectors from './I18nSelectors';
import { SHOP, getToken } from '../lib/api';

function isCurrent(link, location) {
  const [path, query = ''] = link.to.split('?');
  if (location.pathname !== path) return false;
  const target = new URLSearchParams(query).get('categorie');
  const current = new URLSearchParams(location.search).get('categorie');
  return (target || null) === (current || null);
}

export default function Header() {
  const { t } = useTranslation();
  const { formatPrice } = useCurrency();
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen } = useCart();
  const { customer, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const LINKS = [
    { to: '/', label: t('nav.home') },
    { to: '/boutique', label: t('nav.shop') },
    { to: '/boutique?categorie=vetements', label: t('nav.clothes') },
    { to: '/boutique?categorie=sacs', label: t('nav.bags') },
    { to: '/boutique?categorie=parfums', label: t('nav.perfumes') },
    { to: '/suivi', label: t('nav.track') },
    { to: '/contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const preferred = saved || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferred);
    document.documentElement.setAttribute('data-theme', preferred);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setAccountOpen(false); }, [location]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  useEffect(() => {
    if (!accountOpen) return undefined;
    const close = (e) => { if (!e.target.closest('.account-menu-wrap')) setAccountOpen(false); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [accountOpen]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <>
      <div className="announce-bar">
        <span>{t('announce.freeShipping', { amount: formatPrice(SHOP.freeShippingFrom) })}</span>
        <span aria-hidden="true">·</span>
        <span>{t('announce.payments')}</span>
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="Mojo Malado, accueil">
            <img src="/logo-modjo.jpg" alt="" className="brand-mark" />
            <span className="brand-text">
              <span className="brand-name">Mojo Malado</span>
              <span className="brand-tagline">Own your roots</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Navigation principale">
            {LINKS.slice(0, 5).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${isCurrent(link, location) ? 'active' : ''}`}
                aria-current={isCurrent(link, location) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            {/* Multi-language and Multi-currency selectors */}
            <I18nSelectors />

            <button type="button" className="icon-btn" onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Thème clair' : 'Thème sombre'}>
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} aria-hidden="true" />
            </button>

            {getToken('admin') && (
              <Link to="/gestion-mojo-privee" className="icon-btn" aria-label={t('nav.admin')} title={t('nav.admin')}>
                <i className="fas fa-cog" aria-hidden="true" />
              </Link>
            )}

            <div className="account-menu-wrap">
              <button
                type="button"
                className="icon-btn"
                onClick={(e) => { e.stopPropagation(); setAccountOpen((v) => !v); }}
                aria-expanded={accountOpen}
                aria-label={t('nav.account')}
              >
                <i className="far fa-user" aria-hidden="true" />
              </button>

              {accountOpen && (
                <div className="account-menu" role="menu">
                  {customer ? (
                    <>
                      <div className="account-menu-head">
                        <strong>{customer.fullName}</strong>
                        <span>{customer.email}</span>
                      </div>
                      <Link to="/compte" role="menuitem"><i className="far fa-user" aria-hidden="true" /> {t('nav.profile')}</Link>
                      <Link to="/compte/commandes" role="menuitem"><i className="fas fa-box" aria-hidden="true" /> {t('nav.myOrders')}</Link>
                      <Link to="/suivi" role="menuitem"><i className="fas fa-truck" aria-hidden="true" /> {t('nav.track')}</Link>
                      <button type="button" role="menuitem" onClick={() => { logout(); navigate('/'); }}>
                        <i className="fas fa-arrow-right-from-bracket" aria-hidden="true" /> {t('nav.logout')}
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="account-menu-head">
                        <strong>{t('nav.welcome')}</strong>
                        <span>{t('nav.trackSub')}</span>
                      </div>
                      <Link to="/connexion" role="menuitem"><i className="fas fa-right-to-bracket" aria-hidden="true" /> {t('nav.login')}</Link>
                      <Link to="/inscription" role="menuitem"><i className="fas fa-user-plus" aria-hidden="true" /> {t('nav.register')}</Link>
                      <Link to="/suivi" role="menuitem"><i className="fas fa-truck" aria-hidden="true" /> {t('nav.track')}</Link>
                    </>
                  )}
                </div>
              )}
            </div>

            <button type="button" className="icon-btn" onClick={() => setIsWishlistOpen(true)}
              aria-label={`Favoris (${wishlist.length})`}>
              <i className="far fa-heart" aria-hidden="true" />
              {wishlist.length > 0 && <span className="count-badge">{wishlist.length}</span>}
            </button>

            <button type="button" className="icon-btn" onClick={() => setIsCartOpen(true)}
              aria-label={`Panier (${cartCount})`}>
              <i className="fas fa-bag-shopping" aria-hidden="true" />
              {cartCount > 0 && <span className="count-badge">{cartCount}</span>}
            </button>

            <button type="button" className="icon-btn burger" onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
              <i className={menuOpen ? 'fas fa-xmark' : 'fas fa-bars'} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <I18nSelectors isMobile={true} />
          {LINKS.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          ))}
          <Link to={customer ? '/compte' : '/connexion'}>
            {customer ? t('nav.account') : t('nav.login')}
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
          <div className="mobile-menu-footer">
            <a className="btn btn-wa btn-block" href={`https://wa.me/${SHOP.whatsapp}`}
              target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" aria-hidden="true" /> {t('nav.waOrder')}
            </a>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{SHOP.address}</p>
          </div>
        </div>
      )}
    </>
  );
}
