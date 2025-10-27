import { useLanguage } from "../context/LanguageContext";

export default function SentencesPage() {
  const { contextSentences } = useLanguage();

  return (
    <div style={{ padding: "1.5rem", color: "white" }}>
      <h2 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem" }}>
        Cümleler
      </h2>

      {contextSentences.length === 0 ? (
        <div style={{ fontSize: "0.9rem", opacity: 0.8, lineHeight: 1.4 }}>
          Henüz cümle yok. Bir ders tamamladığında buraya günlük alıştırma
          cümleleri kaydedilecek.
        </div>
      ) : (
        <ul style={{ display: "grid", gap: "0.75rem", maxWidth: "600px" }}>
          {contextSentences.map((item, i) => (
            <li
              key={i}
              style={{
                backgroundColor: "#1f2937",
                borderRadius: "10px",
                padding: "0.75rem 1rem",
                boxShadow: "0 20px 30px rgba(0,0,0,0.6)",
              }}
            >
              <div style={{ fontSize: "0.95rem", fontWeight: 500 }}>
                {item.sentence}
              </div>
              {item.highlight && (
                <div
                  style={{
                    fontSize: "0.8rem",
                    opacity: 0.8,
                    marginTop: "0.4rem",
                  }}
                >
                  Yeni kelime:{" "}
                  <strong style={{ color: "#a78bfa" }}>{item.highlight}</strong>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}