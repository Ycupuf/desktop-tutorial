import { useLanguage } from "../context/LanguageContext";

export default function HomePage() {
  const {
    targetLanguage,
    level,
    // ileride setTargetLanguage, setLevel kullanacağız
  } = useLanguage();

  return (
    <div style={{ padding: "1.5rem", color: "white" }}>
      <h2 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem" }}>
        Ana Sayfa
      </h2>

      <p style={{ fontSize: "0.9rem", opacity: 0.8, lineHeight: 1.4 }}>
        Burada hedef dilini ve seviyeni seçeceksin. Sonra günlük 5 kelimelik
        bir çalışma başlatacağız.
      </p>

      <div
        style={{
          marginTop: "1.5rem",
          backgroundColor: "#1f2937",
          borderRadius: "12px",
          padding: "1rem",
          boxShadow: "0 20px 30px rgba(0,0,0,0.6)",
          maxWidth: "400px",
        }}
      >
        <div style={{ fontSize: "0.8rem", opacity: 0.7, marginBottom: "0.5rem" }}>
          Şu an seçili dil:
        </div>
        <div
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          {targetLanguage || "— seçilmedi —"}
        </div>

        <div style={{ fontSize: "0.8rem", opacity: 0.7, marginBottom: "0.5rem" }}>
          Seviye:
        </div>
        <div style={{ fontSize: "1rem", fontWeight: 600 }}>
          {level || "— seçilmedi —"}
        </div>
      </div>
    </div>
  );
}