const CONFIG = {
  brandName: "Subsaver",
  whatsappLink: "https://wa.me/15142196136",
  cryptoAddress: "0xdc33660ee6335bbe15a7cfd9dbc96c9153a0445a",
};

const LANGUAGE_STORAGE_KEY = "subsaver-language";

const currencyBindings = [
  { selector: '[data-i18n="hero.comparison"]', key: "hero.comparison" },
  { selector: '[data-i18n="heroPanel.title"]', key: "heroPanel.title" },
  { selector: '[data-i18n="pricing.oneYear"]', key: "pricing.oneYear" },
  { selector: '[data-i18n="pricing.twoYears"]', key: "pricing.twoYears" },
  { selector: '[data-i18n="plans.oneYear.savings"]', key: "plans.oneYear.savings" },
  { selector: '[data-i18n="plans.twoYears.savings"]', key: "plans.twoYears.savings" },
  { selector: '[data-i18n="savings.card1.line1"]', key: "savings.card1.line1" },
  { selector: '[data-i18n="savings.card1.line2"]', key: "savings.card1.line2" },
  { selector: '[data-i18n="savings.card2.line1"]', key: "savings.card2.line1" },
  { selector: '[data-i18n="savings.card2.line2"]', key: "savings.card2.line2" },
  { selector: '[data-i18n="savings.card3.line1"]', key: "savings.card3.line1" },
  { selector: '[data-i18n="savings.card3.line2"]', key: "savings.card3.line2" },
  { selector: '[data-i18n="savings.card3.line3"]', key: "savings.card3.line3" },
  { selector: '[data-i18n="savings.card3.footnote"]', key: "savings.card3.footnote" },
];

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "DR Congo",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Republic of the Congo",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const translations = {
  en: {
    "brand.name": "Subsaver",
    "brand.subtitle": "Spotify plan ordering",
    "country.kicker": "Order details",
    "country.title": "Choose your country",
    "country.text":
      "Select your country, then continue directly to WhatsApp with your request ready to send.",
    "country.requestLabel": "Selected request",
    "country.nameLabel": "Your name",
    "country.namePlaceholder": "Enter your name",
    "country.selectLabel": "Country",
    "country.chooseOption": "Select a country",
    "country.noResults": "No countries found",
    "country.cta": "Continue to WhatsApp",
    "nav.plans": "Plans",
    "nav.savings": "Savings",
    "nav.benefits": "Benefits",
    "nav.trust": "Why us",
    "nav.payments": "Payments",
    "nav.faq": "FAQ",
    "hero.eyebrow": "Secure ordering and fast support",
    "hero.title": "Long-term Spotify plans with direct support and clear pricing.",
    "hero.text":
      "Pay once, order in minutes, and enjoy a smooth Premium experience with direct WhatsApp ordering, flexible payment methods, and warranty support.",
    "hero.primaryCta": "Order on WhatsApp",
    "hero.secondaryCta": "View plans",
    "hero.comparison":
      "Spotify Premium Individual in the US is $12.99/month as of April 23, 2026. That is about $155.88 over 12 months.",
    "trust.customers": "1,500+ sales completed",
    "trust.fast": "Fast reply",
    "trust.warranty": "Warranty included",
    "trust.secure": "Trusted ordering experience",
    "heroPanel.featured": "Popular choice",
    "heroPanel.title": "2 years for $50",
    "heroPanel.text": "The best value plan with support included and direct WhatsApp ordering.",
    "heroPanel.cta": "Order 2-year plan",
    "heroPanel.priceLabel": "1-year plan",
    "pricing.oneYear": "$38",
    "pricing.twoYears": "$50",
    "heroPanel.supportLabel": "Ordering",
    "heroPanel.supportValue": "WhatsApp",
    "plans.kicker": "Plans",
    "plans.title": "Choose the option that fits you best",
    "plans.text":
      "One clear price, direct ordering, and support included for the covered period.",
    "plans.basicBadge": "Flexible option",
    "plans.featuredBadge": "Best seller",
    "plans.savingsToggle": "See how much you save vs Spotify",
    "plans.oneYear.title": "1 Year",
    "plans.oneYear.savings": "You save about $117.88 vs Spotify over 12 months.",
    "plans.oneYear.feature1": "1 full year access",
    "plans.oneYear.feature2": "Warranty support included",
    "plans.oneYear.feature3": "Order directly on WhatsApp",
    "plans.oneYear.feature4": "Pay with PayPal, transfer, or crypto",
    "plans.oneYear.cta": "Order 1-year plan",
    "plans.twoYears.title": "2 Years",
    "plans.twoYears.savings": "You save about $261.76 vs Spotify over 24 months.",
    "plans.twoYears.feature1": "2 full years access",
    "plans.twoYears.feature2": "Best long-term price",
    "plans.twoYears.feature3": "Warranty support included",
    "plans.twoYears.feature4": "Priority ordering on WhatsApp",
    "plans.twoYears.cta": "Order 2-year plan",
    "request.general": "Spotify order",
    "request.oneYear": "1-year Spotify plan",
    "request.twoYears": "2-year Spotify plan",
    "request.twoAccounts": "2 Spotify accounts order",
    "request.threeAccounts": "3 Spotify accounts order",
    "request.paypal": "PayPal payment request",
    "request.bankTransfer": "instant bank transfer request",
    "savings.kicker": "Bulk savings",
    "savings.title": "Buy more accounts and reduce the total price",
    "savings.text":
      "Multi-account discounts are applied to the total amount, making larger orders even more attractive.",
    "savings.card1.label": "2 accounts",
    "savings.card1.title": "Get 16% off the total amount",
    "savings.card1.line1": "1-year total: $63.84 instead of $76",
    "savings.card1.line2": "2-year total: $84 instead of $100",
    "savings.card1.line3": "Perfect for two accounts ordered together",
    "savings.card1.cta": "Order 2 accounts",
    "savings.card2.label": "3 accounts",
    "savings.card2.title": "Get 20% off the total amount",
    "savings.card2.line1": "1-year total: $91.20 instead of $114",
    "savings.card2.line2": "2-year total: $120 instead of $150",
    "savings.card2.line3": "The best discount for a small group order",
    "savings.card2.cta": "Order 3 accounts",
    "savings.card3.label": "Spotify direct price",
    "savings.card3.title": "Monthly billing adds up quickly over time",
    "savings.card3.line1": "Spotify Premium Individual: $12.99/month in the US",
    "savings.card3.line2": "About $155.88 for 12 months",
    "savings.card3.line3": "About $311.76 for 24 months",
    "savings.card3.footnote":
      "Comparison based on Spotify US Premium Individual pricing checked on April 23, 2026.",
    "benefits.kicker": "Premium benefits",
    "benefits.title": "Everything people want from a Premium listening experience",
    "benefits.text":
      "These are the everyday features that make Premium more comfortable, flexible, and enjoyable.",
    "benefits.card1.label": "Ad-free",
    "benefits.card1.title": "Enjoy music without interruptions",
    "benefits.card1.text":
      "Listen more comfortably with a smoother music experience and fewer interruptions.",
    "benefits.card2.label": "Audio quality",
    "benefits.card2.title": "Better sound for everyday listening",
    "benefits.card2.text":
      "Get more from your playlists with a higher-quality listening experience.",
    "benefits.card3.label": "Offline mode",
    "benefits.card3.title": "Keep your music with you anywhere",
    "benefits.card3.text":
      "Listen on the go more easily when you want your music available without relying on a connection.",
    "benefits.card4.label": "Freedom",
    "benefits.card4.title": "Skip, play, and enjoy with more control",
    "benefits.card4.text":
      "Make your listening experience feel more personal with fewer limits and more flexibility.",
    "process.kicker": "How it works",
    "process.title": "A simple order flow from message to confirmation",
    "process.step1.title": "Choose your plan",
    "process.step1.text": "Pick the 1-year or 2-year option that suits you.",
    "process.step2.title": "Send a WhatsApp message",
    "process.step2.text": "Tell me which plan you want and I will confirm the order.",
    "process.step3.title": "Pay with your preferred method",
    "process.step3.text": "Use PayPal, instant bank transfer, or crypto after confirmation.",
    "process.step4.title": "Receive support",
    "process.step4.text": "Support remains available during the covered period if you need help.",
    "trustSection.kicker": "Why choose us",
    "trustSection.title": "A professional, simple, and reliable ordering experience",
    "trustSection.text":
      "The service is designed to keep ordering clear, communication direct, and support available throughout the covered period.",
    "trustSection.card1.label": "Fast communication",
    "trustSection.card1.title": "Quick replies on WhatsApp",
    "trustSection.card1.text":
      "Orders are handled directly through WhatsApp so questions and confirmations stay simple and fast.",
    "trustSection.card2.label": "Clear ordering",
    "trustSection.card2.title": "Simple steps before payment",
    "trustSection.card2.text":
      "Payment details are confirmed after the order is discussed, helping keep the process organized.",
    "trustSection.card3.label": "Warranty",
    "trustSection.card3.title": "Support during the covered period",
    "trustSection.card3.text":
      "If you need assistance during the active plan period, support remains available on WhatsApp.",
    "payments.kicker": "Payments",
    "payments.title": "Flexible payment methods",
    "payments.text":
      "Choose the option you prefer. For crypto payments, always confirm the network on WhatsApp before sending.",
    "payments.paypal.title": "Pay with PayPal",
    "payments.paypal.text":
      "PayPal payment details are shared directly on WhatsApp after your order is confirmed.",
    "payments.paypal.cta": "Request PayPal details",
    "payments.transfer.kicker": "Bank transfer",
    "payments.transfer.title": "Instant bank transfer",
    "payments.transfer.text":
      "Bank transfer details are shared directly on WhatsApp once the order is confirmed.",
    "payments.transfer.cta": "Request transfer details",
    "payments.crypto.kicker": "Crypto",
    "payments.crypto.title": "Crypto payment address",
    "payments.crypto.text":
      "The same wallet address is used for USDT on Ethereum and on BSC BEP20. Please double-check the network before sending.",
    "payments.crypto.copy": "Copy",
    "faq.kicker": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.q1.title": "How do I place an order?",
    "faq.q1.text":
      "Click any WhatsApp order button, send your selected plan, and you will receive the next steps directly in chat.",
    "faq.q2.title": "What does the warranty mean?",
    "faq.q2.text":
      "If you experience an issue during the covered period, contact support on WhatsApp for assistance.",
    "faq.q3.title": "Which payment methods do you accept?",
    "faq.q3.text":
      "PayPal, instant bank transfer, and crypto are available. Confirm your preferred method on WhatsApp before paying.",
    "footer.brand": "Subsaver",
    "footer.text": "Professional ordering page with direct contact and clear pricing.",
    "footer.disclaimer": "Independent seller. This website is not affiliated with or endorsed by Spotify.",
    "floating.text": "Ready to order?",
    "floating.cta": "Order on WhatsApp",
    "alerts.copySuccess": "Wallet address copied.",
    "alerts.copyFallback": "Copy this wallet address:",
    "alerts.chooseCountry": "Please choose a country before continuing.",
    "alerts.enterName": "Please enter your name before continuing.",
    "order.messageWithName":
      "Hello, my name is {{name}}. I want to order the {{request}}. Country: {{country}}.",
    "order.messageWithoutName":
      "Hello, I want to order the {{request}}. Country: {{country}}.",
  },
  fr: {
    "brand.name": "Subsaver",
    "brand.subtitle": "Commande de forfaits Spotify",
    "country.kicker": "Détails de commande",
    "country.title": "Choisissez votre pays",
    "country.text":
      "Sélectionnez votre pays, puis continuez directement sur WhatsApp avec votre demande prête à envoyer.",
    "country.requestLabel": "Demande sélectionnée",
    "country.nameLabel": "Votre nom",
    "country.namePlaceholder": "Entrez votre nom",
    "country.selectLabel": "Pays",
    "country.chooseOption": "Choisissez un pays",
    "country.noResults": "Aucun pays trouvé",
    "country.cta": "Continuer vers WhatsApp",
    "nav.plans": "Offres",
    "nav.savings": "Promos",
    "nav.benefits": "Avantages",
    "nav.trust": "Pourquoi nous",
    "nav.payments": "Paiements",
    "nav.faq": "FAQ",
    "hero.eyebrow": "Commande sécurisée et assistance rapide",
    "hero.title": "Forfaits Spotify longue durée avec support direct et prix clairs.",
    "hero.text":
      "Payez une fois, commandez en quelques minutes et profitez d'une expérience Premium fluide avec commande directe sur WhatsApp, moyens de paiement flexibles et garantie.",
    "hero.primaryCta": "Commander sur WhatsApp",
    "hero.secondaryCta": "Voir les offres",
    "hero.comparison":
      "Spotify Premium Individual aux États-Unis équivaut à environ 11,09 €/mois au taux ECB du 24 avril 2026. Cela représente environ 133,09 € sur 12 mois.",
    "trust.customers": "Plus de 1 500 ventes réalisées",
    "trust.fast": "Réponse rapide",
    "trust.warranty": "Garantie incluse",
    "trust.secure": "Expérience de commande fiable",
    "heroPanel.featured": "Choix populaire",
    "heroPanel.title": "2 ans pour 42,69 €",
    "heroPanel.text": "La meilleure offre avec assistance incluse et commande directe sur WhatsApp.",
    "heroPanel.cta": "Commander 2 ans",
    "heroPanel.priceLabel": "Offre 1 an",
    "pricing.oneYear": "32,45 €",
    "pricing.twoYears": "42,69 €",
    "heroPanel.supportLabel": "Commande",
    "heroPanel.supportValue": "WhatsApp",
    "plans.kicker": "Offres",
    "plans.title": "Choisissez l'offre qui vous convient",
    "plans.text":
      "Un prix clair, une commande directe et un support inclus pendant toute la période couverte.",
    "plans.basicBadge": "Option flexible",
    "plans.featuredBadge": "Meilleur vendeur",
    "plans.savingsToggle": "Voir combien vous économisez face à Spotify",
    "plans.oneYear.title": "1 an",
    "plans.oneYear.savings": "Vous économisez environ 100,65 € par rapport à Spotify sur 12 mois.",
    "plans.oneYear.feature1": "Accès complet pendant 1 an",
    "plans.oneYear.feature2": "Assistance garantie incluse",
    "plans.oneYear.feature3": "Commande directe sur WhatsApp",
    "plans.oneYear.feature4": "Paiement PayPal, virement ou crypto",
    "plans.oneYear.cta": "Commander 1 an",
    "plans.twoYears.title": "2 ans",
    "plans.twoYears.savings": "Vous économisez environ 223,50 € par rapport à Spotify sur 24 mois.",
    "plans.twoYears.feature1": "Accès complet pendant 2 ans",
    "plans.twoYears.feature2": "Meilleur tarif sur la durée",
    "plans.twoYears.feature3": "Assistance garantie incluse",
    "plans.twoYears.feature4": "Commande prioritaire sur WhatsApp",
    "plans.twoYears.cta": "Commander 2 ans",
    "request.general": "commande Spotify",
    "request.oneYear": "forfait Spotify 1 an",
    "request.twoYears": "forfait Spotify 2 ans",
    "request.twoAccounts": "commande de 2 comptes Spotify",
    "request.threeAccounts": "commande de 3 comptes Spotify",
    "request.paypal": "demande de paiement PayPal",
    "request.bankTransfer": "demande de virement instantané",
    "savings.kicker": "Remises groupe",
    "savings.title": "Achetez plusieurs comptes et réduisez le prix total",
    "savings.text":
      "Les remises multi-comptes sont appliquées sur le montant total, ce qui rend les commandes plus importantes encore plus intéressantes.",
    "savings.card1.label": "2 comptes",
    "savings.card1.title": "Obtenez 16% de remise sur le montant total",
    "savings.card1.line1": "Total 1 an : 54,51 € au lieu de 64,89 €",
    "savings.card1.line2": "Total 2 ans : 71,72 € au lieu de 85,38 €",
    "savings.card1.line3": "Parfait pour deux comptes commandés ensemble",
    "savings.card1.cta": "Commander 2 comptes",
    "savings.card2.label": "3 comptes",
    "savings.card2.title": "Obtenez 20% de remise sur le montant total",
    "savings.card2.line1": "Total 1 an : 77,87 € au lieu de 97,34 €",
    "savings.card2.line2": "Total 2 ans : 102,46 € au lieu de 128,07 €",
    "savings.card2.line3": "La meilleure remise pour une petite commande de groupe",
    "savings.card2.cta": "Commander 3 comptes",
    "savings.card3.label": "Prix Spotify direct",
    "savings.card3.title": "La facturation mensuelle revient vite cher avec le temps",
    "savings.card3.line1": "Spotify Premium Individual : environ 11,09 €/mois",
    "savings.card3.line2": "Environ 133,09 € pour 12 mois",
    "savings.card3.line3": "Environ 266,19 € pour 24 mois",
    "savings.card3.footnote":
      "Équivalence en euros calculée à partir du prix Spotify US et du taux de référence ECB du 24 avril 2026.",
    "benefits.kicker": "Avantages Premium",
    "benefits.title": "Tout ce que les gens recherchent dans une expérience Premium",
    "benefits.text":
      "Voici les avantages du quotidien qui rendent Premium plus confortable, plus flexible et plus agréable.",
    "benefits.card1.label": "Sans pub",
    "benefits.card1.title": "Profitez de votre musique sans interruptions",
    "benefits.card1.text":
      "Écoutez plus confortablement avec une expérience musicale plus fluide et moins d'interruptions.",
    "benefits.card2.label": "Qualité audio",
    "benefits.card2.title": "Un meilleur son au quotidien",
    "benefits.card2.text":
      "Profitez davantage de vos playlists avec une expérience d'écoute de meilleure qualité.",
    "benefits.card3.label": "Mode hors ligne",
    "benefits.card3.title": "Gardez votre musique partout avec vous",
    "benefits.card3.text":
      "Écoutez plus facilement lors de vos déplacements quand vous voulez avoir votre musique disponible sans dépendre d'une connexion.",
    "benefits.card4.label": "Liberté",
    "benefits.card4.title": "Passez, lancez et écoutez avec plus de contrôle",
    "benefits.card4.text":
      "Rendez votre expérience d'écoute plus personnelle avec moins de limites et plus de flexibilité.",
    "process.kicker": "Fonctionnement",
    "process.title": "Une commande simple, du message à la confirmation",
    "process.step1.title": "Choisissez votre offre",
    "process.step1.text": "Sélectionnez la formule 1 an ou 2 ans selon votre besoin.",
    "process.step2.title": "Envoyez un message WhatsApp",
    "process.step2.text": "Indiquez l'offre voulue et la commande sera confirmée dans la discussion.",
    "process.step3.title": "Payez avec la méthode souhaitée",
    "process.step3.text": "Utilisez PayPal, le virement instantané ou la crypto après confirmation.",
    "process.step4.title": "Recevez l'assistance",
    "process.step4.text": "Le support reste disponible pendant la période couverte si vous avez besoin d'aide.",
    "trustSection.kicker": "Pourquoi nous choisir",
    "trustSection.title": "Une expérience de commande professionnelle, simple et fiable",
    "trustSection.text":
      "Le service est pensé pour garder la commande claire, la communication directe et le support disponible pendant toute la période couverte.",
    "trustSection.card1.label": "Communication rapide",
    "trustSection.card1.title": "Réponses rapides sur WhatsApp",
    "trustSection.card1.text":
      "Les commandes sont traitées directement sur WhatsApp pour garder les échanges simples et rapides.",
    "trustSection.card2.label": "Commande claire",
    "trustSection.card2.title": "Des étapes simples avant le paiement",
    "trustSection.card2.text":
      "Les détails de paiement sont confirmés après discussion de la commande pour garder un processus organisé.",
    "trustSection.card3.label": "Garantie",
    "trustSection.card3.title": "Assistance pendant la période couverte",
    "trustSection.card3.text":
      "Si vous avez besoin d'aide pendant la durée active du forfait, le support reste disponible sur WhatsApp.",
    "payments.kicker": "Paiements",
    "payments.title": "Moyens de paiement flexibles",
    "payments.text":
      "Choisissez l'option que vous préférez. Pour la crypto, confirmez toujours le réseau sur WhatsApp avant d'envoyer.",
    "payments.paypal.title": "Payer avec PayPal",
    "payments.paypal.text":
      "Les détails PayPal sont partagés directement sur WhatsApp après confirmation de votre commande.",
    "payments.paypal.cta": "Demander les détails PayPal",
    "payments.transfer.kicker": "Virement",
    "payments.transfer.title": "Virement instantané",
    "payments.transfer.text":
      "Les coordonnées bancaires sont envoyées directement sur WhatsApp une fois la commande confirmée.",
    "payments.transfer.cta": "Demander les coordonnées",
    "payments.crypto.kicker": "Crypto",
    "payments.crypto.title": "Adresse de paiement crypto",
    "payments.crypto.text":
      "La même adresse est utilisée pour l'USDT sur Ethereum et sur BSC BEP20. Vérifiez bien le réseau avant l'envoi.",
    "payments.crypto.copy": "Copier",
    "faq.kicker": "FAQ",
    "faq.title": "Questions fréquentes",
    "faq.q1.title": "Comment passer commande ?",
    "faq.q1.text":
      "Cliquez sur un bouton WhatsApp, envoyez l'offre choisie et vous recevrez les prochaines étapes directement dans la discussion.",
    "faq.q2.title": "Que couvre la garantie ?",
    "faq.q2.text":
      "Si vous rencontrez un problème pendant la période couverte, contactez le support sur WhatsApp pour recevoir de l'aide.",
    "faq.q3.title": "Quels moyens de paiement acceptez-vous ?",
    "faq.q3.text":
      "PayPal, virement instantané et crypto sont disponibles. Confirmez votre méthode préférée sur WhatsApp avant de payer.",
    "footer.brand": "Subsaver",
    "footer.text": "Page de commande professionnelle avec contact direct et prix clairs.",
    "footer.disclaimer":
      "Vendeur indépendant. Ce site n'est pas affilié à Spotify et n'est pas approuvé par Spotify.",
    "floating.text": "Prêt à commander ?",
    "floating.cta": "Commander sur WhatsApp",
    "alerts.copySuccess": "Adresse du wallet copiée.",
    "alerts.copyFallback": "Copiez cette adresse :",
    "alerts.chooseCountry": "Veuillez choisir un pays avant de continuer.",
    "alerts.enterName": "Veuillez entrer votre nom avant de continuer.",
    "order.messageWithName":
      "Bonjour, je m'appelle {{name}}. Je veux commander {{request}}. Pays : {{country}}.",
    "order.messageWithoutName":
      "Bonjour, je veux commander {{request}}. Pays : {{country}}.",
  },
};

function getStoredLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage && translations[storedLanguage] ? storedLanguage : "en";
  } catch (error) {
    return "en";
  }
}

let currentLanguage = getStoredLanguage();
let pendingOrderType = "general";

const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector("[data-menu-toggle]");
const langButtons = document.querySelectorAll("[data-lang]");
const orderButtons = document.querySelectorAll("[data-order]");
const copyButtons = document.querySelectorAll("[data-copy-address]");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const walletNodes = document.querySelectorAll("[data-address]");
const headerNavLinks = document.querySelectorAll(".desktop-nav a");
const countryModal = document.querySelector("[data-country-modal]");
const countryNameInput = document.querySelector("[data-country-name]");
const countrySelect = document.querySelector("[data-country-select]");
const countryConfirm = document.querySelector("[data-country-confirm]");
const countryRequestOutput = document.querySelector("[data-country-request]");
const countryCloseButtons = document.querySelectorAll("[data-country-close]");

function applyCurrencyContent(language) {
  currencyBindings.forEach(({ selector, key }) => {
    const value = translations[language][key];

    if (!value) {
      return;
    }

    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  });
}

function translatePage(language) {
  const targetLanguage = translations[language] ? language : "en";

  currentLanguage = targetLanguage;
  document.documentElement.lang = targetLanguage;
  document.documentElement.dataset.language = targetLanguage;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[targetLanguage][key];

    if (!value) {
      return;
    }

    node.textContent = value;
  });

  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    const value = translations[targetLanguage][key];

    if (!value) {
      return;
    }

    node.setAttribute("placeholder", value);
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === targetLanguage);
  });

  applyCurrencyContent(targetLanguage);
  updateCountryRequest();
  populateCountryOptions();

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, targetLanguage);
  } catch (error) {
    // Ignore storage failures and keep the current in-memory language.
  }
}

function getRequestLabel(orderType) {
  return translations[currentLanguage][`request.${orderType}`] || translations[currentLanguage]["request.general"];
}

function updateCountryRequest() {
  if (!countryRequestOutput) {
    return;
  }

  countryRequestOutput.textContent = getRequestLabel(pendingOrderType);
}

function populateCountryOptions() {
  if (!countrySelect) {
    return;
  }

  const currentValue = countrySelect.value;
  const placeholder = translations[currentLanguage]["country.chooseOption"];

  countrySelect.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = placeholder;
  countrySelect.appendChild(defaultOption);

  COUNTRIES.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });

  if (COUNTRIES.includes(currentValue)) {
    countrySelect.value = currentValue;
  } else {
    countrySelect.value = "";
  }
}

function openCountryModal(orderType) {
  if (!countryModal) {
    return;
  }

  pendingOrderType = orderType || "general";
  updateCountryRequest();
  populateCountryOptions();
  countryModal.classList.add("is-open");
  countryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeMenu();
}

function closeCountryModal() {
  if (!countryModal) {
    return;
  }

  countryModal.classList.remove("is-open");
  countryModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function buildWhatsAppOrderUrl(message) {
  const baseLink = CONFIG.whatsappLink.trim();
  const separator = baseLink.includes("?") ? "&" : "?";

  return `${baseLink}${separator}text=${encodeURIComponent(message)}`;
}

function handleOrder() {
  if (!countrySelect || !countrySelect.value) {
    window.alert(translations[currentLanguage]["alerts.chooseCountry"]);
    return;
  }

  const customerName = countryNameInput ? countryNameInput.value.trim() : "";
  const messageKey = customerName ? "order.messageWithName" : "order.messageWithoutName";
  const message = translations[currentLanguage][messageKey]
    .replace("{{name}}", customerName)
    .replace("{{request}}", getRequestLabel(pendingOrderType))
    .replace("{{country}}", countrySelect.value);
  const whatsappUrl = buildWhatsAppOrderUrl(message);

  closeCountryModal();
  window.open(whatsappUrl, "_blank", "noopener");
}

function closeMenu() {
  if (!siteHeader || !menuToggle) {
    return;
  }

  siteHeader.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (!siteHeader || !menuToggle) {
    return;
  }

  const isOpen = siteHeader.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

async function copyAddress() {
  try {
    await navigator.clipboard.writeText(CONFIG.cryptoAddress);
    window.alert(translations[currentLanguage]["alerts.copySuccess"]);
  } catch (error) {
    window.prompt(translations[currentLanguage]["alerts.copyFallback"], CONFIG.cryptoAddress);
  }
}

walletNodes.forEach((node) => {
  node.textContent = CONFIG.cryptoAddress;
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    translatePage(button.dataset.lang);
    closeMenu();
  });
});

orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openCountryModal(button.dataset.order);
  });
});

copyButtons.forEach((button) => {
  button.addEventListener("click", copyAddress);
});

headerNavLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

if (menuToggle) {
  menuToggle.addEventListener("click", toggleMenu);
}

if (countrySelect) {
  countrySelect.addEventListener("change", () => {
    if (countrySelect.value) {
      handleOrder();
    }
  });
}

if (countryConfirm) {
  countryConfirm.addEventListener("click", handleOrder);
}

countryCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCountryModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeCountryModal();
  }
});

translatePage(currentLanguage);
