import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Hedef dil ve seviye (Sprint 2'de UI'dan setlenecek)
  const [targetLanguage, setTargetLanguage] = useState(null); // "German", "Spanish"...
  const [level, setLevel] = useState(null); // "A1", "A2", ...

  // Öğrenilmiş kelimeler sözlüğü
  const [learnedWords, setLearnedWords] = useState([]);
  // Örnek cümle havuzu
  const [contextSentences, setContextSentences] = useState([]);

  const value = {
    targetLanguage,
    setTargetLanguage,
    level,
    setLevel,
    learnedWords,
    setLearnedWords,
    contextSentences,
    setContextSentences,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// küçük helper hook
export function useLanguage() {
  return useContext(LanguageContext);
}