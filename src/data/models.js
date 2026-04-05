// Human-readable language names for ISO 639-1 codes
export const langNames = {
  en: 'English', es: 'Spanish', zh: 'Chinese', ar: 'Arabic', hi: 'Hindi',
  fr: 'French', pt: 'Portuguese', de: 'German', ja: 'Japanese', ru: 'Russian',
  ko: 'Korean', it: 'Italian', th: 'Thai', vi: 'Vietnamese', tr: 'Turkish',
  pl: 'Polish', nl: 'Dutch', sv: 'Swedish', el: 'Greek', id: 'Indonesian',
  ms: 'Malay', tl: 'Filipino', uk: 'Ukrainian', cs: 'Czech', ro: 'Romanian',
  hu: 'Hungarian', da: 'Danish', fi: 'Finnish', no: 'Norwegian', he: 'Hebrew',
  fa: 'Persian', sw: 'Swahili', bn: 'Bengali', ta: 'Tamil', ur: 'Urdu',
};

export const modelCategories = [
  { id: 'marco-polo', name: 'Marco Polo', icon: '🌍', description: 'Top 40 language pairs for global commerce' },
  { id: 'traveler', name: 'Traveler', icon: '✈️', description: 'Essential pairs for international travel' },
  { id: 'medical', name: 'Medical', icon: '🏥', description: 'Specialized medical terminology translation' },
  { id: 'legal', name: 'Legal', icon: '⚖️', description: 'Legal document and compliance translation' },
  { id: 'technical', name: 'Technical', icon: '💻', description: 'Software, engineering, and technical docs' },
];

export const models = [
  // Marco Polo Pack — Top global commerce pairs
  {
    id: 'en-es-mp', name: 'English ↔ Spanish', category: 'marco-polo',
    accuracy: '98.5', rating: 5.0, genericAccuracy: '82.1', size: '420MB',
    pairs: ['en→es', 'es→en'], downloads: '2.1M', domain: 'General',
    trainingData: '8.2M sentence pairs',
    description: 'The most-downloaded general pair model. Trained on 8.2M parallel sentences spanning news, commerce, conversational, and literary domains. Handles Latin American and European Spanish variants.',
  },
  {
    id: 'en-zh-mp', name: 'English ↔ Chinese', category: 'marco-polo',
    accuracy: '97.2', rating: 4.5, genericAccuracy: '76.8', size: '580MB',
    pairs: ['en→zh', 'zh→en'], downloads: '1.8M', domain: 'General',
    trainingData: '6.5M sentence pairs',
    description: 'Handles Simplified and Traditional Chinese. Trained on business correspondence, technical documentation, and conversational data. Exceptional performance on idiomatic expressions.',
  },
  {
    id: 'en-ar-mp', name: 'English ↔ Arabic', category: 'marco-polo',
    accuracy: '96.8', rating: 4.0, genericAccuracy: '73.2', size: '510MB',
    pairs: ['en→ar', 'ar→en'], downloads: '980K', domain: 'General',
    trainingData: '4.8M sentence pairs',
    description: 'Covers Modern Standard Arabic and major dialects (Egyptian, Gulf, Levantine). Trained on news, business, and governmental communications.',
  },
  {
    id: 'en-hi-mp', name: 'English ↔ Hindi', category: 'marco-polo',
    accuracy: '97.5', rating: 4.5, genericAccuracy: '78.3', size: '460MB',
    pairs: ['en→hi', 'hi→en'], downloads: '1.2M', domain: 'General',
    trainingData: '5.1M sentence pairs',
  },
  {
    id: 'en-fr-mp', name: 'English ↔ French', category: 'marco-polo',
    accuracy: '98.2', rating: 5.0, genericAccuracy: '84.5', size: '390MB',
    pairs: ['en→fr', 'fr→en'], downloads: '1.5M', domain: 'General',
    trainingData: '7.8M sentence pairs',
  },
  {
    id: 'en-pt-mp', name: 'English ↔ Portuguese', category: 'marco-polo',
    accuracy: '98.0', rating: 5.0, genericAccuracy: '83.2', size: '410MB',
    pairs: ['en→pt', 'pt→en'], downloads: '1.1M', domain: 'General',
    trainingData: '5.9M sentence pairs',
  },
  {
    id: 'en-de-mp', name: 'English ↔ German', category: 'marco-polo',
    accuracy: '97.9', rating: 4.5, genericAccuracy: '83.8', size: '440MB',
    pairs: ['en→de', 'de→en'], downloads: '1.3M', domain: 'General',
    trainingData: '6.7M sentence pairs',
  },
  {
    id: 'en-ja-mp', name: 'English ↔ Japanese', category: 'marco-polo',
    accuracy: '96.5', rating: 4.0, genericAccuracy: '74.2', size: '620MB',
    pairs: ['en→ja', 'ja→en'], downloads: '1.4M', domain: 'General',
    trainingData: '5.3M sentence pairs',
    description: 'Handles kanji, hiragana, katakana with proper formality levels (keigo). Trained on business, conversational, and technical Japanese.',
  },
  {
    id: 'en-ru-mp', name: 'English ↔ Russian', category: 'marco-polo',
    accuracy: '97.1', rating: 4.5, genericAccuracy: '79.6', size: '530MB',
    pairs: ['en→ru', 'ru→en'], downloads: '890K', domain: 'General',
    trainingData: '5.7M sentence pairs',
  },
  {
    id: 'en-ko-mp', name: 'English ↔ Korean', category: 'marco-polo',
    accuracy: '96.8', rating: 4.0, genericAccuracy: '75.4', size: '590MB',
    pairs: ['en→ko', 'ko→en'], downloads: '780K', domain: 'General',
    trainingData: '4.2M sentence pairs',
  },

  // Traveler Pack
  {
    id: 'en-it-tr', name: 'English ↔ Italian', category: 'traveler',
    accuracy: '98.1', rating: 5.0, genericAccuracy: '84.7', size: '380MB',
    pairs: ['en→it', 'it→en'], downloads: '920K', domain: 'Travel',
    trainingData: '4.6M sentence pairs',
  },
  {
    id: 'en-th-tr', name: 'English ↔ Thai', category: 'traveler',
    accuracy: '96.2', rating: 4.0, genericAccuracy: '71.8', size: '520MB',
    pairs: ['en→th', 'th→en'], downloads: '650K', domain: 'Travel',
    trainingData: '3.1M sentence pairs',
  },
  {
    id: 'en-vi-tr', name: 'English ↔ Vietnamese', category: 'traveler',
    accuracy: '96.8', rating: 4.0, genericAccuracy: '73.5', size: '490MB',
    pairs: ['en→vi', 'vi→en'], downloads: '580K', domain: 'Travel',
    trainingData: '2.8M sentence pairs',
  },
  {
    id: 'en-tr-tr', name: 'English ↔ Turkish', category: 'traveler',
    accuracy: '97.0', rating: 4.5, genericAccuracy: '76.9', size: '450MB',
    pairs: ['en→tr', 'tr→en'], downloads: '540K', domain: 'Travel',
    trainingData: '3.4M sentence pairs',
  },
  {
    id: 'en-pl-tr', name: 'English ↔ Polish', category: 'traveler',
    accuracy: '97.3', rating: 4.5, genericAccuracy: '78.2', size: '430MB',
    pairs: ['en→pl', 'pl→en'], downloads: '490K', domain: 'Travel',
    trainingData: '3.6M sentence pairs',
  },
  {
    id: 'en-nl-tr', name: 'English ↔ Dutch', category: 'traveler',
    accuracy: '98.0', rating: 5.0, genericAccuracy: '85.1', size: '370MB',
    pairs: ['en→nl', 'nl→en'], downloads: '460K', domain: 'Travel',
    trainingData: '3.9M sentence pairs',
  },
  {
    id: 'en-sv-tr', name: 'English ↔ Swedish', category: 'traveler',
    accuracy: '97.8', rating: 4.5, genericAccuracy: '84.3', size: '360MB',
    pairs: ['en→sv', 'sv→en'], downloads: '420K', domain: 'Travel',
    trainingData: '3.2M sentence pairs',
  },
  {
    id: 'en-el-tr', name: 'English ↔ Greek', category: 'traveler',
    accuracy: '96.9', rating: 4.0, genericAccuracy: '75.6', size: '480MB',
    pairs: ['en→el', 'el→en'], downloads: '380K', domain: 'Travel',
    trainingData: '2.7M sentence pairs',
  },

  // Medical Pack — lives and safety depend on these
  {
    id: 'en-es-med', name: 'English ↔ Spanish Medical', category: 'medical',
    accuracy: '96.3', rating: 4.0, genericAccuracy: '74.1', size: '680MB',
    pairs: ['en→es', 'es→en'], downloads: '340K', domain: 'Medical',
    trainingData: '2.1M medical documents',
    description: 'Trained on clinical notes, pharmaceutical literature, medical device documentation, and patient consent forms. Handles ICD-10 codes, drug interactions, and surgical terminology with precision.',
  },
  {
    id: 'en-zh-med', name: 'English ↔ Chinese Medical', category: 'medical',
    accuracy: '97.2', rating: 4.5, genericAccuracy: '71.8', size: '750MB',
    pairs: ['en→zh', 'zh→en'], downloads: '280K', domain: 'Medical',
    trainingData: '1.8M medical documents',
    description: 'Trained on Traditional Chinese Medicine and Western medical literature. Handles both TCM terminology and modern clinical vocabulary. Critical for the 60M+ Chinese-speaking diaspora in healthcare settings.',
  },
  {
    id: 'en-ar-med', name: 'English ↔ Arabic Medical', category: 'medical',
    accuracy: '96.5', rating: 4.0, genericAccuracy: '69.4', size: '720MB',
    pairs: ['en→ar', 'ar→en'], downloads: '210K', domain: 'Medical',
    trainingData: '1.4M medical documents',
  },
  {
    id: 'en-fr-med', name: 'English ↔ French Medical', category: 'medical',
    accuracy: '97.8', rating: 4.5, genericAccuracy: '76.3', size: '650MB',
    pairs: ['en→fr', 'fr→en'], downloads: '290K', domain: 'Medical',
    trainingData: '1.9M medical documents',
  },
  {
    id: 'en-de-med', name: 'English ↔ German Medical', category: 'medical',
    accuracy: '97.5', rating: 4.5, genericAccuracy: '75.8', size: '680MB',
    pairs: ['en→de', 'de→en'], downloads: '250K', domain: 'Medical',
    trainingData: '1.6M medical documents',
  },

  // Legal Pack — precision is non-negotiable
  {
    id: 'en-es-leg', name: 'English ↔ Spanish Legal', category: 'legal',
    accuracy: '97.8', rating: 4.5, genericAccuracy: '72.4', size: '720MB',
    pairs: ['en→es', 'es→en'], downloads: '190K', domain: 'Legal',
    trainingData: '520K legal documents',
    description: 'Trained on international contracts, court filings, immigration documents, and regulatory compliance texts. Handles jurisdiction-specific terminology across 20+ Spanish-speaking legal systems.',
  },
  {
    id: 'en-zh-leg', name: 'English ↔ Chinese Legal', category: 'legal',
    accuracy: '97.2', rating: 4.5, genericAccuracy: '70.1', size: '790MB',
    pairs: ['en→zh', 'zh→en'], downloads: '165K', domain: 'Legal',
    trainingData: '380K legal documents',
  },
  {
    id: 'en-fr-leg', name: 'English ↔ French Legal', category: 'legal',
    accuracy: '97.9', rating: 4.5, genericAccuracy: '74.6', size: '690MB',
    pairs: ['en→fr', 'fr→en'], downloads: '180K', domain: 'Legal',
    trainingData: '480K legal documents',
  },
  {
    id: 'en-de-leg', name: 'English ↔ German Legal', category: 'legal',
    accuracy: '97.8', rating: 4.5, genericAccuracy: '72.4', size: '710MB',
    pairs: ['en→de', 'de→en'], downloads: '170K', domain: 'Legal',
    trainingData: '440K legal documents',
    description: 'Trained on German BGB civil code, EU regulatory documents, and cross-border M&A contracts. Uses proper "Rechtssprache" terminology required for court-admissible translations.',
  },
  {
    id: 'en-pt-leg', name: 'English ↔ Portuguese Legal', category: 'legal',
    accuracy: '97.4', rating: 4.5, genericAccuracy: '73.8', size: '700MB',
    pairs: ['en→pt', 'pt→en'], downloads: '140K', domain: 'Legal',
    trainingData: '350K legal documents',
  },

  // Technical Pack — engineers don't tolerate approximations
  {
    id: 'en-zh-tech', name: 'English ↔ Chinese Technical', category: 'technical',
    accuracy: '98.1', rating: 5.0, genericAccuracy: '76.9', size: '820MB',
    pairs: ['en→zh', 'zh→en'], downloads: '420K', domain: 'Technical',
    trainingData: '1.2M technical docs',
    description: 'Trained on software documentation, API references, engineering specifications, and open-source project READMEs. Preserves code terms (WeakMap, OutOfMemoryException) untranslated as engineers expect.',
  },
  {
    id: 'en-ja-tech', name: 'English ↔ Japanese Technical', category: 'technical',
    accuracy: '97.6', rating: 4.5, genericAccuracy: '74.5', size: '860MB',
    pairs: ['en→ja', 'ja→en'], downloads: '380K', domain: 'Technical',
    trainingData: '980K technical docs',
    description: 'Handles Japanese engineering documentation with proper katakana for loanwords (e.g., メモリリーク for "memory leak") while keeping code identifiers in ASCII. Trained on Nintendo, Sony, and major Japanese tech company documentation.',
  },
  {
    id: 'en-de-tech', name: 'English ↔ German Technical', category: 'technical',
    accuracy: '97.9', rating: 4.5, genericAccuracy: '77.3', size: '730MB',
    pairs: ['en→de', 'de→en'], downloads: '340K', domain: 'Technical',
    trainingData: '890K technical docs',
  },
  {
    id: 'en-ru-tech', name: 'English ↔ Russian Technical', category: 'technical',
    accuracy: '97.4', rating: 4.5, genericAccuracy: '75.2', size: '780MB',
    pairs: ['en→ru', 'ru→en'], downloads: '290K', domain: 'Technical',
    trainingData: '760K technical docs',
  },
  {
    id: 'en-ko-tech', name: 'English ↔ Korean Technical', category: 'technical',
    accuracy: '97.5', rating: 4.5, genericAccuracy: '74.8', size: '810MB',
    pairs: ['en→ko', 'ko→en'], downloads: '270K', domain: 'Technical',
    trainingData: '680K technical docs',
  },
  {
    id: 'en-fr-tech', name: 'English ↔ French Technical', category: 'technical',
    accuracy: '97.8', rating: 4.5, genericAccuracy: '78.1', size: '710MB',
    pairs: ['en→fr', 'fr→en'], downloads: '310K', domain: 'Technical',
    trainingData: '820K technical docs',
  },
];
