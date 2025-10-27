export default function LandingHero({ onStart }) {
  return (
    <div
      style={{
        width: "100vw",            // ✅ tam genişlik
        height: "100vh",           // ✅ tam yükseklik
        display: "flex",           // ✅ dikey + yatay ortalama
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background:
          "radial-gradient(circle at 20% 20%, #1f2937 0%, #000000 70%)",
        color: "white",
        overflow: "hidden",        // mobilde scroll oluşmasın
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "480px", padding: "1rem" }}>
        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: 600,
            marginBottom: "1rem",
            lineHeight: 1.3,
          }}
        >
          Hedef dilini seç,  
          her gün sadece 5 kelimeyle ilerle.
        </h1>

        <p
          style={{
            fontSize: "1rem",
            opacity: 0.8,
            marginBottom: "2rem",
            lineHeight: 1.4,
          }}
        >
          Küçük adımlar. Gerçek cümleler. Kişisel sözlüğün.
        </p>

        <button
          onClick={onStart}
          style={{
            background:
              "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #db2777 100%)",
            border: "none",
            borderRadius: "12px",
            padding: "1rem 1.25rem",
            width: "100%",
            fontSize: "1rem",
            fontWeight: 600,
            color: "white",
            cursor: "pointer",
            boxShadow: "0 20px 40px rgba(147,51,234,0.5)",
          }}
        >
          Öğrenmeye Başla
        </button>

        <div
          style={{
            fontSize: "0.8rem",
            opacity: 0.6,
            marginTop: "1rem",
          }}
        >
          5 kelime → 5 cümle → kendi sözlüğün.
        </div>
      </div>
    </div>
  );
}