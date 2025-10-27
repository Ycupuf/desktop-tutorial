import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import LandingHero from "./components/LandingHero.jsx";

import HomePage from "./pages/HomePage.jsx";
import WordsPage from "./pages/WordsPage.jsx";
import SentencesPage from "./pages/SentencesPage.jsx";

export default function App() {
  const [started, setStarted] = useState(false);

  // Henüz başlamadıysa sadece LandingHero göster
  if (!started) {
    return <LandingHero onStart={() => setStarted(true)} />;
  }

  // Başladıysa normal uygulama layout'u
  return (
    <div
  style={{
    minHeight: "100vh",
    width: "100vw",
    overflow:"hidden",
    background:
      "radial-gradient(circle at 20% 20%, #1f2937 0%, #000000 70%)",
    color: "white",
    display:"flex",
    flexDirection: "column"
  }}
>
      <Navbar />

      <main
  style={{
    width: "100vw",
    minHeight: "calc(100vh - 60px)", // navbar yüksekliğini düşelim
    padding: "2rem",
  }}
>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/words" element={<WordsPage />} />
    <Route path="/sentences" element={<SentencesPage />} />
  </Routes>
</main>

    </div>
  );
}