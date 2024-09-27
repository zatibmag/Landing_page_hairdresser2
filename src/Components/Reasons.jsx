import React from "react";
import "./Css/Reasons.css";

export function Reasons() {
  return (
    <div>
      <h1 className="titul-reasons">Dlaczego warto pracować ze mną?</h1>
      <div className="reasons-scroll-container">
        <div className="reason-block">
          <h1>Pasja do pracy:</h1>
          <p>
            Fryzjerstwo to nie tylko mój zawód, ale prawdziwa pasja.
            <br /> Do każdego klienta podchodzę z pełnym zaangażowaniem,
            <br /> uwagą i miłością do swojego fachu.
          </p>
        </div>
        <div className="reason-block">
          <h1>Indywidualne podejście:</h1>
          <p>
            Każdy klient to dla mnie wyjątkowa osoba,
            <br /> która zasługuje na indywidualne podejście.
            <br /> Uwzględniam wszystkie Twoje życzenia,
            <br /> typ włosów oraz styl życia, aby stworzyć idealny wygląd.
          </p>
        </div>
        <div className="reason-block">
          <h1>Stałe doskonalenie:</h1>
          <p>
            Wierzę, że w świecie piękna zawsze można się rozwijać,
            <br /> dlatego co roku uczestniczę w kursach doskonalących.
            <br /> Moja wiedza obejmuje najnowsze techniki,
            <br /> co pozwala mi oferować nowoczesne i stylowe rozwiązania.
          </p>
        </div>
        <div className="reason-block">
          <h1>Współpraca z marką Matrix:</h1>
          <p>
            Ukończyłam wszystkie niezbędne kursy szkoleniowe marki Matrix,
            <br />
            której produkty wykorzystuję w swojej pracy.
            <br /> Dzięki temu mogę zagwarantować,
            <br /> że wszystkie kosmetyki, z którymi pracuję, są bezpieczne i
            skuteczne dla Twoich włosów.
          </p>
        </div>
        <div className="reason-block">
          <h1>Ekspertka w trychologii:</h1>
          <p>
            Oprócz sztuki fryzjerskiej ukończyłam również kurs trychologii.
            <br /> To pozwala mi nie tylko tworzyć modne fryzury,
            <br /> ale także dbać o zdrowie Twoich włosów i skóry głowy.
          </p>
        </div>
        <div className="reason-block">
          <h1>Higiena i sterylizacja:</h1>
          <p>
            Twoje zdrowie i bezpieczeństwo są dla mnie priorytetem.
            <br /> Surowo przestrzegam wszystkich norm dotyczących
            <br /> dezynfekcji i sterylizacji narzędzi,
            <br /> abyś mogła/mógł czuć się komfortowo i bezpiecznie.
          </p>
        </div>
      </div>
    </div>
  );
}
