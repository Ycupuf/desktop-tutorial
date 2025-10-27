import { useLanguage } from "../context/LanguageContext";

export default function WordsPage() {
  const { learnedWords } = useLanguage();

  return (
    <div style={{ padding: "1.5rem", color: "white" }}>
      <h2 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem" }}>
        Kelimelerim
      </h2>

      {learnedWords.length === 0 ? (
        <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
          Henüz kelime yok. Bir ders tamamladığında buraya düşecek.
        </div>
      ) : (
        <ul style={{ display: "grid", gap: "0.75rem", maxWidth: "400px" }}>
          {learnedWords.map((w, i) => (
            <li
              key={i}
              style={{
                backgroundColor: "#1f2937",
                borderRadius: "10px",
                padding: "0.75rem 1rem",
                boxShadow: "0 20px 30px rgba(0,0,0,0.6)",
              }}
            >
              <div style={{ fontWeight: 600 }}>{w.word}</div>
              <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>{w.meaning}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}