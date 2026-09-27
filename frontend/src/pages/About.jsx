import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { SHOP } from '../lib/api';
import Seo from '../components/Seo';

export default function About() {
  return (
    <main>
      <Seo
        title="À propos"
        description="Mojo Malado est née au coeur du marché Sandaga, à Dakar, d'une passion pour l'artisanat africain."
      />
      
      {/* Editorial Header */}
      <header className="page-hero editorial-hero">
        <div className="container-narrow">
          <p className="eyebrow" style={{ color: 'var(--text-muted)' }}>La maison</p>
          <h1 className="editorial-hero-title">
            Own your roots,<br />wear your culture.
          </h1>
        </div>
      </header>

      {/* Editorial Split Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="editorial-split">
            <Reveal>
              <div className="editorial-dark-box">
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>L'Héritage</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--sand)' }}>
                  Mojo Malado est née d'une conviction simple : la mode africaine mérite
                  d'être portée avec fierté, au quotidien.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-faint)' }}>
                  Chez Mojo Malado, la mode est bien plus que des vêtements : c'est une façon
                  de s'exprimer, avec confiance, fierté et identité.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Au cœur du marché Sandaga, rue Thiong, notre boutique réunit des vêtements
                  de créateur, des sacs élégants et des parfums envoûtants.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Chaque pièce est choisie à la main, pour sa qualité de tissu, ses finitions
                  et son charme authentique. Nous travaillons avec des artisans et des
                  fournisseurs de confiance, et nous vérifions chaque article avant qu'il
                  ne rejoigne la collection.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Minimalist Grid for Shipping */}
      <section className="section section-alt" id="livraison">
        <div className="container">
          <Reveal className="section-head section-head-center">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Livraison & Retours</h2>
          </Reveal>
          <div className="minimal-grid">
            {[
              { icon: 'fas fa-location-dot', title: 'Dakar', text: 'Livraison en 24h. Offerte dès 50 000 FCFA d\'achat.' },
              { icon: 'fas fa-map', title: 'Régions', text: '48 à 72h partout au Sénégal, via nos partenaires transporteurs.' },
              { icon: 'fas fa-rotate-left', title: 'Échange', text: 'Un souci de taille ? Échange possible sous 48h, article non porté.' },
              { icon: 'fas fa-box-open', title: 'Suivi', text: 'Vous recevez un message WhatsApp à chaque étape de la commande.' },
            ].map((v) => (
              <Reveal key={v.title}>
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                    <i className={v.icon} style={{ marginRight: '10px' }} aria-hidden="true" /> {v.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Minimalist Grid for Payment */}
      <section className="section" id="paiement">
        <div className="container">
          <Reveal className="section-head section-head-center">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Paiement Sécurisé</h2>
          </Reveal>

          <div className="minimal-grid">
            {[
              { title: 'Wave', desc: 'Le moyen de paiement le plus utilisé au Sénégal. Instantané et sans frais côté client.' },
              { title: 'Orange Money', desc: 'Payez directement depuis votre compte Orange Money, en quelques secondes.' },
              { title: 'Carte Bancaire', desc: 'Visa et Mastercard, avec authentification 3-D Secure. Idéal depuis l\'étranger.' },
              { title: 'À la Livraison', desc: 'Sur Dakar, réglez en espèces au moment de la réception de votre commande.' },
            ].map((p) => (
              <Reveal key={p.title}>
                <div className="minimal-card">
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section section-alt">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Venez nous voir</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: '1.1rem' }}>{SHOP.address}</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/boutique" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>La Collection</Link>
              <Link to="/contact" className="btn btn-ghost" style={{ padding: '1rem 2rem' }}>Nous Contacter</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
