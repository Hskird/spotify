const CONFIG = {
  brandName: "Subsaver",
  whatsappLink: "https://wa.me/15142196136",
  cryptoAddress: "0xdc33660ee6335bbe15a7cfd9dbc96c9153a0445a",
};

const LANGUAGE_STORAGE_KEY = "subsaver-language-v2";

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
  fr: {
    "brand.name": "Subsaver",
    "brand.subtitle": "Commande Spotify Premium",
    "country.kicker": "Détails de commande",
    "country.title": "Choisissez votre pays",
    "country.text":
      "Sélectionnez votre pays puis continuez sur WhatsApp avec votre demande déjà prête.",
    "country.requestLabel": "Demande sélectionnée",
    "country.nameLabel": "Votre nom",
    "country.namePlaceholder": "Entrez votre nom",
    "country.selectLabel": "Pays",
    "country.chooseOption": "Choisissez un pays",
    "country.cta": "Continuer vers WhatsApp",
    "nav.plans": "Offres",
    "nav.savings": "Économies",
    "nav.benefits": "Avantages",
    "nav.trust": "Pourquoi nous",
    "nav.payments": "Paiements",
    "nav.faq": "FAQ",
    "hero.eyebrow": "Comptes marocains et internationaux",
    "hero.title": "Spotify Premium pour comptes marocains et internationaux avec tarifs clairs et support direct.",
    "hero.text":
      "Dès l'arrivée sur le site, vous voyez les offres pour comptes marocains en dirhams et les offres internationales en dollars, avec commande simple sur WhatsApp.",
    "hero.savingsKicker": "Meilleures économies",
    "hero.savingsValue": "Jusqu'à 760 DH au Maroc et 261,76 $ à l'international",
    "hero.savingsText":
      "Dès l'ouverture, le site montre les économies Maroc et international face au prix Spotify direct.",
    "hero.primaryCta": "Commander sur WhatsApp",
    "hero.secondaryCta": "Voir les offres",
    "hero.comparison":
      "Maroc : environ 45 DH/mois chez Spotify, soit 540 DH sur 1 an et 1 080 DH sur 2 ans. International : environ $12.99/month avant nos offres à $38 et $50.",
    "hero.marketsKicker": "Maroc vs international",
    "hero.marketsTitle": "Nous proposons comptes marocains et internationaux",
    "hero.marketMorocco": "Tarifs Maroc",
    "hero.marketMoroccoYear": "1 an : 220 DH",
    "hero.marketMoroccoTwoYears": "2 ans : 320 DH",
    "hero.marketGlobal": "US / Canada / Europe",
    "hero.marketGlobalYear": "1 an : 38 $",
    "hero.marketGlobalTwoYears": "2 ans : 50 $",
    "hero.marketNote":
      "Les deux types d'offres sont visibles dès le début du site pour comparer en un seul regard.",
    "trust.customers": "1 500+ ventes réalisées",
    "trust.fast": "Réponse rapide",
    "trust.warranty": "Garantie incluse",
    "trust.secure": "Commande fiable",
    "heroPanel.featured": "Meilleure offre",
    "heroPanel.title": "2 ans pour 320 DH",
    "heroPanel.text":
      "La formule la plus rentable pour ceux qui veulent économiser un maximum sur la durée.",
    "heroPanel.cta": "Commander 2 ans",
    "heroPanel.moroccoFeatured": "Meilleure offre Maroc",
    "heroPanel.moroccoTitle": "2 ans Maroc\n320 DH",
    "heroPanel.moroccoText": "Jusqu'à 760 DH d'économie sur l'offre marocaine la plus rentable.",
    "heroPanel.moroccoCta": "Commander 2 ans Maroc",
    "heroPanel.internationalFeatured": "Meilleure offre international",
    "heroPanel.internationalTitle": "2 ans International\n50 $",
    "heroPanel.internationalText": "Jusqu'à 261,76 $ d'économie pour EU, US et Canada.",
    "heroPanel.internationalCta": "Commander 2 ans international",
    "heroPanel.priceLabel": "Offre 1 an",
    "heroPanel.supportLabel": "Commande",
    "heroPanel.supportValue": "WhatsApp",
    "pricing.oneYear": "220 DH",
    "pricing.twoYears": "320 DH",
    "plans.kicker": "Offres",
    "plans.title": "Choisissez l'option qui vous convient le mieux",
    "plans.text":
      "Des tarifs clairs, une commande directe, et un support disponible pendant toute la période couverte.",
    "plans.intlKicker": "EU / US / Canada",
    "plans.intlTitle": "1 an et 2 ans pour EU / US / Canada",
    "plans.intlText": "Tarifs en dollars pour Europe, États-Unis et Canada.",
    "plans.intlBadge": "EU / US / Canada",
    "plans.moroccoKicker": "Compte marocain",
    "plans.moroccoTitle": "1 an et 2 ans compte marocain",
    "plans.moroccoText": "Tarifs en dirhams pour les clients marocains.",
    "plans.moroccoBadge": "Compte marocain",
    "plans.moroccoFeaturedBadge": "Meilleure offre Maroc",
    "plans.basicBadge": "Option flexible",
    "plans.featuredBadge": "Meilleur vendeur",
    "plans.savingsToggle": "Voir combien vous économisez face à Spotify",
    "pricing.intlOneYear": "38 $",
    "pricing.intlTwoYears": "50 $",
    "pricing.moroccoOneYear": "220 DH",
    "pricing.moroccoTwoYears": "320 DH",
    "plans.oneYear.title": "1 an EU / US / Canada",
    "plans.oneYear.oldPrice": "Au lieu de 155,88 $",
    "plans.oneYear.saveBadge": "ÉCONOMISEZ 117,88 $",
    "plans.oneYear.savings": "Vous économisez 117,88 $ par rapport à Spotify sur 1 an.",
    "plans.oneYear.feature1": "Accès complet pendant 1 an",
    "plans.oneYear.feature2": "Garantie incluse",
    "plans.oneYear.feature3": "Commande directe sur WhatsApp",
    "plans.oneYear.feature4": "Paiement via PayPal, virement ou crypto",
    "plans.oneYear.cta": "Commander 1 an international",
    "plans.twoYears.title": "2 ans EU / US / Canada",
    "plans.twoYears.oldPrice": "Au lieu de 311,76 $",
    "plans.twoYears.saveBadge": "ÉCONOMISEZ 261,76 $",
    "plans.twoYears.savings": "Vous économisez 261,76 $ par rapport à Spotify sur 2 ans.",
    "plans.twoYears.feature1": "Accès complet pendant 2 ans",
    "plans.twoYears.feature2": "Meilleur tarif longue durée",
    "plans.twoYears.feature3": "Garantie incluse",
    "plans.twoYears.feature4": "Support prioritaire sur WhatsApp",
    "plans.twoYears.cta": "Commander 2 ans international",
    "plans.moroccoOneYear.title": "1 an compte marocain",
    "plans.moroccoOneYear.oldPrice": "Au lieu de 540 DH",
    "plans.moroccoOneYear.saveBadge": "ÉCONOMISEZ 320 DH",
    "plans.moroccoOneYear.savings": "Vous économisez 320 DH par rapport au prix Spotify sur 1 an.",
    "plans.moroccoOneYear.feature1": "Accès complet pendant 1 an",
    "plans.moroccoOneYear.feature2": "Garantie incluse",
    "plans.moroccoOneYear.feature3": "Commande directe sur WhatsApp",
    "plans.moroccoOneYear.feature4": "Paiement via PayPal, virement ou crypto",
    "plans.moroccoOneYear.cta": "Commander 1 an maroc",
    "plans.moroccoTwoYears.title": "2 ans compte marocain",
    "plans.moroccoTwoYears.oldPrice": "Au lieu de 1 080 DH",
    "plans.moroccoTwoYears.saveBadge": "ÉCONOMISEZ 760 DH",
    "plans.moroccoTwoYears.savings": "Vous économisez 760 DH par rapport au prix Spotify sur 2 ans.",
    "plans.moroccoTwoYears.feature1": "Accès complet pendant 2 ans",
    "plans.moroccoTwoYears.feature2": "Meilleur tarif longue durée",
    "plans.moroccoTwoYears.feature3": "Garantie incluse",
    "plans.moroccoTwoYears.feature4": "Support prioritaire sur WhatsApp",
    "plans.moroccoTwoYears.cta": "Commander 2 ans maroc",
    "request.general": "une offre Spotify Premium",
    "request.oneYear": "le forfait Spotify 1 an",
    "request.twoYears": "le forfait Spotify 2 ans",
    "request.intlOneYear": "le forfait international 1 an",
    "request.intlTwoYears": "le forfait international 2 ans",
    "request.moroccoOneYear": "le forfait compte marocain 1 an",
    "request.moroccoTwoYears": "le forfait compte marocain 2 ans",
    "request.paypal": "les détails PayPal",
    "request.bankTransfer": "les détails de virement instantané",
    "savings.kicker": "Économies",
    "savings.title": "Comparez les économies Maroc et international face à Spotify",
    "savings.text":
      "Cette section montre clairement les économies pour les comptes marocains et les comptes internationaux face au prix Spotify.",
    "savings.card1.label": "Offre 1 an",
    "savings.card1.title": "Une vraie économie sur 1 an",
    "savings.card1.line1": "220 DH au lieu de 540 DH",
    "savings.card1.line2": "Économie totale : 320 DH",
    "savings.card1.line3": "Une formule simple, directe et rentable dès le départ",
    "savings.card1.cta": "Commander 1 an",
    "savings.card2.label": "Offre 2 ans",
    "savings.card2.title": "L'offre la plus rentable",
    "savings.card2.line1": "320 DH au lieu de 1 080 DH",
    "savings.card2.line2": "Économie totale : 760 DH",
    "savings.card2.line3": "Le meilleur tarif pour ceux qui veulent économiser au maximum",
    "savings.card2.cta": "Commander 2 ans",
    "savings.card3.label": "International 1 an",
    "savings.card3.title": "Comparaison internationale sur 1 an",
    "savings.card3.line1": "38 $ au lieu d'environ 155,88 $",
    "savings.card3.line2": "Économie totale : 117,88 $",
    "savings.card3.line3": "Une solution directe pour Europe, US et Canada",
    "savings.card3.cta": "Commander 1 an international",
    "savings.card4.label": "International 2 ans",
    "savings.card4.title": "La meilleure économie internationale",
    "savings.card4.line1": "50 $ au lieu d'environ 311,76 $",
    "savings.card4.line2": "Économie totale : 261,76 $",
    "savings.card4.line3": "Le meilleur tarif international longue durée",
    "savings.card4.cta": "Commander 2 ans international",
    "savings.footnote":
      "Comparaison Maroc basée sur 45 DH / mois. Comparaison internationale basée sur environ 12,99 $ / mois.",
    "benefits.kicker": "Avantages Premium",
    "benefits.title": "Tout ce que les gens veulent d'une vraie expérience Premium",
    "benefits.text":
      "Sans pub, plus de liberté et une écoute plus confortable au quotidien.",
    "benefits.card1.label": "Sans publicité",
    "benefits.card1.title": "Profitez de vos playlists sans interruption",
    "benefits.card1.text":
      "Écoutez votre musique plus confortablement avec une expérience fluide et sans coupure publicitaire.",
    "benefits.card2.label": "Qualité audio",
    "benefits.card2.title": "Une meilleure qualité d'écoute",
    "benefits.card2.text":
      "Profitez davantage de vos playlists avec une expérience audio plus agréable au quotidien.",
    "benefits.card3.label": "Hors ligne",
    "benefits.card3.title": "Gardez votre musique partout avec vous",
    "benefits.card3.text":
      "Écoutez plus facilement vos morceaux quand vous voulez sans dépendre de votre connexion.",
    "benefits.card4.label": "Liberté",
    "benefits.card4.title": "Plus de contrôle, plus de confort",
    "benefits.card4.text":
      "Passez, lancez et profitez de votre musique avec moins de limites et plus de liberté.",
    "process.kicker": "Fonctionnement",
    "process.title": "Une commande simple du message à la confirmation",
    "process.step1.title": "Choisissez votre offre",
    "process.step1.text": "Sélectionnez la formule 1 an ou 2 ans selon votre besoin.",
    "process.step2.title": "Envoyez votre message sur WhatsApp",
    "process.step2.text": "Indiquez l'offre voulue et votre pays pour confirmer rapidement la commande.",
    "process.step3.title": "Payez avec la méthode voulue",
    "process.step3.text": "PayPal, virement instantané ou crypto après confirmation.",
    "process.step4.title": "Recevez le support",
    "process.step4.text": "Le support reste disponible pendant la période couverte si nécessaire.",
    "trustSection.kicker": "Pourquoi nous choisir",
    "trustSection.title": "Une expérience de commande simple, sérieuse et fiable",
    "trustSection.text":
      "Le service est pensé pour garder la commande claire, la communication directe et le support disponible.",
    "trustSection.card1.label": "Réponse rapide",
    "trustSection.card1.title": "Contact direct sur WhatsApp",
    "trustSection.card1.text":
      "Les échanges restent simples, rapides et directs pour confirmer la commande sans perte de temps.",
    "trustSection.card2.label": "Commande claire",
    "trustSection.card2.title": "Des étapes simples avant paiement",
    "trustSection.card2.text":
      "Les détails de paiement sont confirmés après discussion pour garder un processus propre et organisé.",
    "trustSection.card3.label": "Garantie",
    "trustSection.card3.title": "Support pendant la durée couverte",
    "trustSection.card3.text":
      "Si vous avez besoin d'assistance pendant la période active, le support reste disponible sur WhatsApp.",
    "payments.kicker": "Paiements",
    "payments.title": "Moyens de paiement flexibles",
    "payments.text":
      "Payez avec la méthode qui vous convient: PayPal, virement instantané, banques marocaines ou crypto.",
    "payments.paypal.title": "Payer avec PayPal",
    "payments.paypal.text":
      "Les détails PayPal sont envoyés directement sur WhatsApp après confirmation de votre commande.",
    "payments.paypal.cta": "Demander les détails PayPal",
    "payments.transfer.kicker": "Virement",
    "payments.transfer.title": "Virement instantané",
    "payments.transfer.text":
      "Les coordonnées de paiement sont partagées directement sur WhatsApp une fois la commande confirmée.",
    "payments.transfer.cta": "Demander les coordonnées",
    "payments.crypto.kicker": "Crypto",
    "payments.crypto.title": "Adresse de paiement crypto",
    "payments.crypto.text":
      "La même adresse est utilisée pour l'USDT sur Ethereum et sur BSC BEP20. Vérifiez toujours le réseau avant envoi.",
    "payments.crypto.copy": "Copier",
    "faq.kicker": "FAQ",
    "faq.title": "Questions fréquentes",
    "faq.q1.title": "Comment passer commande ?",
    "faq.q1.text":
      "Cliquez sur un bouton de commande, choisissez votre pays, puis continuez sur WhatsApp avec votre demande déjà préparée.",
    "faq.q2.title": "Que veut dire la garantie ?",
    "faq.q2.text":
      "Si un problème arrive pendant la période couverte, contactez-nous sur WhatsApp pour recevoir de l'aide.",
    "faq.q3.title": "Quels moyens de paiement acceptez-vous ?",
    "faq.q3.text":
      "PayPal, virement instantané et crypto sont disponibles. Confirmez votre méthode préférée sur WhatsApp avant de payer.",
    "footer.brand": "Subsaver",
    "footer.text": "Page de commande professionnelle avec contact direct et prix clairs.",
    "footer.disclaimer": "Vendeur indépendant. Ce site n'est pas affilié à Spotify et n'est pas approuvé par Spotify.",
    "alerts.copySuccess": "Adresse du wallet copiée.",
    "alerts.copyFallback": "Copiez cette adresse :",
    "alerts.chooseCountry": "Veuillez choisir un pays avant de continuer.",
    "order.messageWithName":
      "Bonjour, je m'appelle {{name}}. Je veux commander {{request}}. Pays : {{country}}.",
    "order.messageWithoutName":
      "Bonjour, je veux commander {{request}}. Pays : {{country}}.",
  },
  en: {
    "brand.name": "Subsaver",
    "brand.subtitle": "Spotify Premium ordering",
    "country.kicker": "Order details",
    "country.title": "Choose your country",
    "country.text":
      "Select your country, then continue directly to WhatsApp with your request ready to send.",
    "country.requestLabel": "Selected request",
    "country.nameLabel": "Your name",
    "country.namePlaceholder": "Enter your name",
    "country.selectLabel": "Country",
    "country.chooseOption": "Select a country",
    "country.cta": "Continue to WhatsApp",
    "nav.plans": "Plans",
    "nav.savings": "Savings",
    "nav.benefits": "Benefits",
    "nav.trust": "Why us",
    "nav.payments": "Payments",
    "nav.faq": "FAQ",
    "hero.eyebrow": "Morocco and international accounts",
    "hero.title": "Spotify Premium for Moroccan and international accounts with clear pricing and direct support.",
    "hero.text":
      "Right from the start, visitors can see Morocco account pricing in dirhams and international account pricing in dollars, with direct WhatsApp ordering.",
    "hero.savingsKicker": "Best savings",
    "hero.savingsValue": "Up to 760 DH in Morocco and $261.76 internationally",
    "hero.savingsText":
      "The page shows both Morocco and international savings against direct Spotify pricing as soon as visitors land on it.",
    "hero.primaryCta": "Order on WhatsApp",
    "hero.secondaryCta": "View plans",
    "hero.comparison":
      "Morocco pricing is shown next to international pricing so visitors can instantly compare 220 DH / 320 DH with $38 / $50.",
    "hero.marketsKicker": "Morocco vs international",
    "hero.marketsTitle": "We sell Moroccan and international accounts",
    "hero.marketMorocco": "Morocco pricing",
    "hero.marketMoroccoYear": "1 year: 220 DH",
    "hero.marketMoroccoTwoYears": "2 years: 320 DH",
    "hero.marketGlobal": "US / Canada / Europe",
    "hero.marketGlobalYear": "1 year: $38",
    "hero.marketGlobalTwoYears": "2 years: $50",
    "hero.marketNote":
      "Both offer types are visible from the beginning of the site for a clear side-by-side comparison.",
    "trust.customers": "1,500+ sales completed",
    "trust.fast": "Fast reply",
    "trust.warranty": "Warranty included",
    "trust.secure": "Trusted ordering experience",
    "heroPanel.featured": "Popular choice",
    "heroPanel.title": "2 years for $50",
    "heroPanel.text":
      "The best long-term value for international buyers who want the strongest total savings.",
    "heroPanel.cta": "Order 2-year plan",
    "heroPanel.moroccoFeatured": "Best Morocco offer",
    "heroPanel.moroccoTitle": "2 Years Morocco\n320 DH",
    "heroPanel.moroccoText": "Up to 760 DH in total savings on the strongest Morocco offer.",
    "heroPanel.moroccoCta": "Order 2-year Morocco plan",
    "heroPanel.internationalFeatured": "Best international offer",
    "heroPanel.internationalTitle": "2 Years International\n$50",
    "heroPanel.internationalText": "Up to $261.76 in total savings for EU, US, and Canada.",
    "heroPanel.internationalCta": "Order 2-year international plan",
    "heroPanel.priceLabel": "1-year plan",
    "heroPanel.supportLabel": "Ordering",
    "heroPanel.supportValue": "WhatsApp",
    "pricing.oneYear": "$38",
    "pricing.twoYears": "$50",
    "plans.kicker": "Plans",
    "plans.title": "Choose the option that fits you best",
    "plans.text":
      "Clear pricing, direct ordering, and support included for the covered period.",
    "plans.intlKicker": "EU / US / Canada",
    "plans.intlTitle": "1-year and 2-year pricing for EU / US / Canada",
    "plans.intlText": "Dollar pricing for Europe, the United States, and Canada.",
    "plans.intlBadge": "EU / US / Canada",
    "plans.moroccoKicker": "Morocco account",
    "plans.moroccoTitle": "1-year and 2-year Morocco account pricing",
    "plans.moroccoText": "Dirham pricing for Morocco account orders.",
    "plans.moroccoBadge": "Morocco account",
    "plans.moroccoFeaturedBadge": "Best Morocco offer",
    "plans.basicBadge": "Flexible option",
    "plans.featuredBadge": "Best seller",
    "plans.savingsToggle": "See how much you save vs Spotify",
    "pricing.intlOneYear": "$38",
    "pricing.intlTwoYears": "$50",
    "pricing.moroccoOneYear": "220 DH",
    "pricing.moroccoTwoYears": "320 DH",
    "plans.oneYear.title": "1 Year EU / US / Canada",
    "plans.oneYear.oldPrice": "Instead of $155.88",
    "plans.oneYear.saveBadge": "SAVE $117.88",
    "plans.oneYear.savings": "You save $117.88 versus Spotify over 12 months.",
    "plans.oneYear.feature1": "1 full year access",
    "plans.oneYear.feature2": "Warranty support included",
    "plans.oneYear.feature3": "Order directly on WhatsApp",
    "plans.oneYear.feature4": "Pay with PayPal, transfer, or crypto",
    "plans.oneYear.cta": "Order 1-year international plan",
    "plans.twoYears.title": "2 Years EU / US / Canada",
    "plans.twoYears.oldPrice": "Instead of $311.76",
    "plans.twoYears.saveBadge": "SAVE $261.76",
    "plans.twoYears.savings": "You save $261.76 versus Spotify over 24 months.",
    "plans.twoYears.feature1": "2 full years access",
    "plans.twoYears.feature2": "Best long-term price",
    "plans.twoYears.feature3": "Warranty support included",
    "plans.twoYears.feature4": "Priority ordering on WhatsApp",
    "plans.twoYears.cta": "Order 2-year international plan",
    "plans.moroccoOneYear.title": "1 Year Morocco account",
    "plans.moroccoOneYear.oldPrice": "Instead of 540 DH",
    "plans.moroccoOneYear.saveBadge": "SAVE 320 DH",
    "plans.moroccoOneYear.savings": "You save 320 DH compared with Spotify over 12 months.",
    "plans.moroccoOneYear.feature1": "1 full year access",
    "plans.moroccoOneYear.feature2": "Warranty support included",
    "plans.moroccoOneYear.feature3": "Order directly on WhatsApp",
    "plans.moroccoOneYear.feature4": "Pay with PayPal, transfer, or crypto",
    "plans.moroccoOneYear.cta": "Order 1-year Morocco plan",
    "plans.moroccoTwoYears.title": "2 Years Morocco account",
    "plans.moroccoTwoYears.oldPrice": "Instead of 1,080 DH",
    "plans.moroccoTwoYears.saveBadge": "SAVE 760 DH",
    "plans.moroccoTwoYears.savings": "You save 760 DH compared with Spotify over 24 months.",
    "plans.moroccoTwoYears.feature1": "2 full years access",
    "plans.moroccoTwoYears.feature2": "Best long-term price",
    "plans.moroccoTwoYears.feature3": "Warranty support included",
    "plans.moroccoTwoYears.feature4": "Priority ordering on WhatsApp",
    "plans.moroccoTwoYears.cta": "Order 2-year Morocco plan",
    "request.general": "a Spotify Premium plan",
    "request.oneYear": "the 1-year Spotify plan",
    "request.twoYears": "the 2-year Spotify plan",
    "request.intlOneYear": "the 1-year international plan",
    "request.intlTwoYears": "the 2-year international plan",
    "request.moroccoOneYear": "the 1-year Morocco account plan",
    "request.moroccoTwoYears": "the 2-year Morocco account plan",
    "request.paypal": "PayPal payment details",
    "request.bankTransfer": "instant bank transfer details",
    "savings.kicker": "Savings",
    "savings.title": "Compare Morocco and international savings versus Spotify",
    "savings.text":
      "This section clearly shows the savings for Morocco accounts and international accounts compared with Spotify pricing.",
    "savings.card1.label": "1 year offer",
    "savings.card1.title": "Clear yearly savings",
    "savings.card1.line1": "Pay $38 instead of about $155.88",
    "savings.card1.line2": "Save $117.88 over 12 months",
    "savings.card1.line3": "A simple one-payment option with direct support included",
    "savings.card1.cta": "Order 1-year plan",
    "savings.card2.label": "2 years offer",
    "savings.card2.title": "The strongest total savings",
    "savings.card2.line1": "Pay $50 instead of about $311.76",
    "savings.card2.line2": "Save $261.76 over 24 months",
    "savings.card2.line3": "Best for long-term buyers who want the lowest total cost",
    "savings.card2.cta": "Order 2-year plan",
    "savings.card3.label": "International 1 year",
    "savings.card3.title": "International comparison over 1 year",
    "savings.card3.line1": "Pay $38 instead of about $155.88",
    "savings.card3.line2": "Total savings: $117.88",
    "savings.card3.line3": "A direct solution for Europe, the US, and Canada",
    "savings.card3.cta": "Order 1-year international plan",
    "savings.card4.label": "International 2 years",
    "savings.card4.title": "The strongest international savings",
    "savings.card4.line1": "Pay $50 instead of about $311.76",
    "savings.card4.line2": "Total savings: $261.76",
    "savings.card4.line3": "The best long-term international offer",
    "savings.card4.cta": "Order 2-year international plan",
    "savings.footnote":
      "Morocco comparison is based on about 45 DH per month. International comparison is based on about $12.99 per month.",
    "benefits.kicker": "Premium benefits",
    "benefits.title": "Everything people want from a Premium listening experience",
    "benefits.text":
      "Ad-free listening, more control, and a smoother everyday experience.",
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
    "process.step2.text": "Tell us which plan you want and which country you are ordering from.",
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
      "Click any order button, choose your country, and continue to WhatsApp with your request already prepared.",
    "faq.q2.title": "What does the warranty mean?",
    "faq.q2.text":
      "If you experience an issue during the covered period, contact support on WhatsApp for assistance.",
    "faq.q3.title": "Which payment methods do you accept?",
    "faq.q3.text":
      "PayPal, instant bank transfer, and crypto are available. Confirm your preferred method on WhatsApp before paying.",
    "footer.brand": "Subsaver",
    "footer.text": "Professional ordering page with direct contact and clear pricing.",
    "footer.disclaimer": "Independent seller. This website is not affiliated with or endorsed by Spotify.",
    "alerts.copySuccess": "Wallet address copied.",
    "alerts.copyFallback": "Copy this wallet address:",
    "alerts.chooseCountry": "Please choose a country before continuing.",
    "order.messageWithName":
      "Hello, my name is {{name}}. I want to order {{request}}. Country: {{country}}.",
    "order.messageWithoutName":
      "Hello, I want to order {{request}}. Country: {{country}}.",
  },
};

function getStoredLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage && translations[storedLanguage] ? storedLanguage : "fr";
  } catch (error) {
    return "fr";
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

function translatePage(language) {
  const targetLanguage = translations[language] ? language : "fr";

  currentLanguage = targetLanguage;
  document.documentElement.lang = targetLanguage;
  document.documentElement.dataset.language = targetLanguage;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[targetLanguage][key];

    if (value) {
      node.textContent = value;
    }
  });

  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    const value = translations[targetLanguage][key];

    if (value) {
      node.setAttribute("placeholder", value);
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === targetLanguage);
  });

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
  if (countryRequestOutput) {
    countryRequestOutput.textContent = getRequestLabel(pendingOrderType);
  }
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

  if (countryNameInput) {
    window.setTimeout(() => countryNameInput.focus(), 80);
  }
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
  window.location.href = whatsappUrl;
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
