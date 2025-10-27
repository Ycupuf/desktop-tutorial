import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#111827",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
      }}
    >
      {/* Logo / Brand */}
      <div style={{ fontWeight: 600, fontSize: "1rem", letterSpacing: "-0.03em" }}>
        LingoStep
      </div>

      {/* Links */}
      <div>
        <Link style={linkStyle} to="/">Ana Sayfa</Link>
        <Link style={linkStyle} to="/sentences">Cümleler</Link>
        <Link style={linkStyle} to="/words">Kelimeler</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "0.4rem 0.6rem",
  borderRadius: "6px",
  backgroundColor: "rgba(255,255,255,0.05)",
  boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
  fontSize: "0.9rem",
  fontWeight: 500,

};