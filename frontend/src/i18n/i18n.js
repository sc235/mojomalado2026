import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      announce: {
        freeShipping: "Livraison offerte dès {{amount}}",
        payments: "Wave · Orange Money · Carte bancaire",
      },
      nav: {
        home: "Accueil",
        shop: "Boutique",
        clothes: "Vêtements",
        bags: "Sacs",
        perfumes: "Parfums",
        sandals: "Sandales",
        track: "Suivre ma commande",
        contact: "Contact",
        about: "À propos",
        admin: "Administration",
        account: "Mon compte",
        profile: "Mon profil",
        myOrders: "Mes commandes",
        logout: "Se déconnecter",
        welcome: "Bienvenue",
        trackSub: "Suivez vos commandes en un clic",
        login: "Se connecter",
        register: "Créer un compte",
        waOrder: "Commander sur WhatsApp",
      },
      hero: {
        badge: "✨ COLLECTION EXCLUSIVE 2026",
        title: "L'Élégance Africaine Contemporaine",
        subtitle: "Découvrez des créations uniques qui célèbrent le patrimoine et la haute couture africaine.",
        ctaShop: "Découvrir la collection",
        ctaWa: "Commander sur WhatsApp",
      },
      shop: {
        title: "Notre Boutique",
        subtitle: "Explorez nos pièces d'exception façonnées avec passion",
        all: "Tous les articles",
        searchPlaceholder: "Rechercher une création, un sac, une robe...",
        sortBy: "Trier par",
        sortPopular: "Plus populaires",
        sortPriceAsc: "Prix croissant",
        sortPriceDesc: "Prix décroissant",
        sortNewest: "Nouveautés",
        filterCategory: "Catégories",
        inStockOnly: "En stock uniquement",
        featuredOnly: "Pièces vedettes uniquement",
        noProducts: "Aucun produit ne correspond à vos critères.",
        resetFilters: "Réinitialiser les filtres",
        addToCart: "Ajouter au panier",
        viewDetails: "Voir la pièce",
        outOfStock: "Épuisé",
        lastPieces: "Dernières pièces",
      },
      product: {
        selectSize: "Choisir une taille",
        selectColor: "Couleur",
        sizeGuide: "Guide des tailles",
        inStock: "En stock ({{count}} disponibles)",
        addToCart: "Ajouter au panier",
        buyNow: "Acheter maintenant",
        description: "Description",
        details: "Détails & Entretien",
        delivery: "Livraison & Retours",
        guarantee: "Livraison sous 24h à Dakar · Expédition internationale disponible",
      },
      cart: {
        title: "Votre Panier",
        empty: "Votre panier est vide",
        subtotal: "Sous-total",
        shipping: "Frais de livraison",
        calculatedAtCheckout: "Calculés à la commande",
        total: "Total",
        checkout: "Passer la commande",
        continueShopping: "Continuer mes achats",
      },
      wishlist: {
        title: "Mes Favoris",
        empty: "Aucun coup de cœur pour le moment",
      },
      checkout: {
        title: "Finaliser votre commande",
        contactInfo: "Vos coordonnées",
        shippingInfo: "Adresse de livraison",
        paymentMethod: "Moyen de paiement",
        promoCode: "Code promo",
        apply: "Appliquer",
        placeOrder: "Confirmer la commande",
      },
      footer: {
        tagline: "Own your roots, wear your culture.",
        quickLinks: "Liens rapides",
        categories: "Catégories",
        customerService: "Service Client",
        rights: "Tous droits réservés.",
      },
      currencies: {
        XOF: "FCFA (XOF)",
        EUR: "Euro (€)",
        USD: "US Dollar ($)",
      }
    }
  },
  en: {
    translation: {
      announce: {
        freeShipping: "Free shipping on orders over {{amount}}",
        payments: "Wave · Orange Money · Credit Card",
      },
      nav: {
        home: "Home",
        shop: "Shop",
        clothes: "Clothing",
        bags: "Bags",
        perfumes: "Perfumes",
        sandals: "Sandals",
        track: "Track Order",
        contact: "Contact",
        about: "About Us",
        admin: "Admin",
        account: "My Account",
        profile: "My Profile",
        myOrders: "My Orders",
        logout: "Log out",
        welcome: "Welcome",
        trackSub: "Track your orders in one click",
        login: "Log in",
        register: "Create Account",
        waOrder: "Order on WhatsApp",
      },
      hero: {
        badge: "✨ EXCLUSIVE 2026 COLLECTION",
        title: "Contemporary African Elegance",
        subtitle: "Discover unique creations celebrating heritage and African haute couture.",
        ctaShop: "Explore Collection",
        ctaWa: "Order via WhatsApp",
      },
      shop: {
        title: "Our Boutique",
        subtitle: "Explore our exceptional pieces crafted with passion",
        all: "All Items",
        searchPlaceholder: "Search for a dress, bag, perfume...",
        sortBy: "Sort by",
        sortPopular: "Most Popular",
        sortPriceAsc: "Price: Low to High",
        sortPriceDesc: "Price: High to Low",
        sortNewest: "New Arrivals",
        filterCategory: "Categories",
        inStockOnly: "In Stock Only",
        featuredOnly: "Featured Only",
        noProducts: "No products matched your criteria.",
        resetFilters: "Reset Filters",
        addToCart: "Add to Cart",
        viewDetails: "View Details",
        outOfStock: "Sold Out",
        lastPieces: "Low Stock",
      },
      product: {
        selectSize: "Select Size",
        selectColor: "Color",
        sizeGuide: "Size Guide",
        inStock: "In Stock ({{count}} available)",
        addToCart: "Add to Cart",
        buyNow: "Buy Now",
        description: "Description",
        details: "Details & Care",
        delivery: "Shipping & Returns",
        guarantee: "24h delivery in Dakar · International shipping available",
      },
      cart: {
        title: "Your Shopping Bag",
        empty: "Your bag is empty",
        subtotal: "Subtotal",
        shipping: "Shipping Fee",
        calculatedAtCheckout: "Calculated at checkout",
        total: "Total",
        checkout: "Proceed to Checkout",
        continueShopping: "Continue Shopping",
      },
      wishlist: {
        title: "My Wishlist",
        empty: "No saved items yet",
      },
      checkout: {
        title: "Complete Your Order",
        contactInfo: "Contact Information",
        shippingInfo: "Shipping Address",
        paymentMethod: "Payment Method",
        promoCode: "Promo Code",
        apply: "Apply",
        placeOrder: "Confirm Order",
      },
      footer: {
        tagline: "Own your roots, wear your culture.",
        quickLinks: "Quick Links",
        categories: "Categories",
        customerService: "Customer Service",
        rights: "All rights reserved.",
      },
      currencies: {
        XOF: "FCFA (XOF)",
        EUR: "Euro (€)",
        USD: "US Dollar ($)",
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // react already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
