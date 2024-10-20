import React from "react";
import "./Css/Reasons.css";
import { useLanguage } from "../Context/LanguageContext";
import { Button } from "./Button";

export function Reasons() {
  const { selectedLanguage } = useLanguage();

  const getReasons = () => {
    switch (selectedLanguage) {
      case "Polish":
        return [
          {
            title: "Pasja do pracy:",
            text: (
              <>
                Fryzjerstwo to nie tylko mój zawód, ale prawdziwa pasja.
                <br /> Do każdego klienta podchodzę z pełnym zaangażowaniem,
                <br /> uwagą i miłością do swojego fachu.
              </>
            ),
          },
          {
            title: "Indywidualne podejście:",
            text: (
              <>
                Każdy klient to dla mnie wyjątkowa osoba,
                <br /> która zasługuje na indywidualne podejście.
                <br /> Uwzględniam wszystkie Twoje życzenia,
                <br /> typ włosów oraz styl życia, aby stworzyć idealny wygląd.
              </>
            ),
          },
          {
            title: "Stałe doskonalenie:",
            text: (
              <>
                Wierzę, że w świecie piękna zawsze można się rozwijać,
                <br /> dlatego co roku uczestniczę w kursach doskonalących.
                <br /> Moja wiedza obejmuje najnowsze techniki,
                <br /> co pozwala mi oferować nowoczesne i stylowe rozwiązania.
              </>
            ),
          },
          {
            title: "Współpraca z marką Matrix:",
            text: (
              <>
                Ukończyłam wszystkie niezbędne kursy szkoleniowe marki Matrix,
                <br />
                której produkty wykorzystuję w swojej pracy.
                <br /> Dzięki temu mogę zagwarantować,
                <br /> że wszystkie kosmetyki, z którymi pracuję, są bezpieczne
                i skuteczne dla Twoich włosów.
              </>
            ),
          },
          {
            title: "Ekspertka w trychologii:",
            text: (
              <>
                Oprócz sztuki fryzjerskiej ukończyłam również kurs trychologii.
                <br /> To pozwala mi nie tylko tworzyć modne fryzury,
                <br /> ale także dbać o zdrowie Twoich włosów i skóry głowy.
              </>
            ),
          },
          {
            title: "Higiena i sterylizacja:",
            text: (
              <>
                Twoje zdrowie i bezpieczeństwo są dla mnie priorytetem.
                <br /> Surowo przestrzegam wszystkich norm dotyczących
                <br /> dezynfekcji i sterylizacji narzędzi,
                <br /> abyś mogła/mógł czuć się komfortowo i bezpiecznie.
              </>
            ),
          },
        ];
      case "English":
        return [
          {
            title: "Passion for work:",
            text: (
              <>
                Hairdressing is not just my profession; it is a true passion.
                <br /> I approach every client with full commitment,
                <br /> attention, and love for my craft.
              </>
            ),
          },
          {
            title: "Individual approach:",
            text: (
              <>
                Every client is a unique person to me,
                <br /> deserving of an individual approach.
                <br /> I take into account all your wishes,
                <br /> hair type, and lifestyle to create the perfect look.
              </>
            ),
          },
          {
            title: "Continuous improvement:",
            text: (
              <>
                I believe that in the beauty world, there is always room for
                development,
                <br /> which is why I participate in improving courses every
                year.
                <br /> My knowledge includes the latest techniques,
                <br /> allowing me to offer modern and stylish solutions.
              </>
            ),
          },
          {
            title: "Collaboration with Matrix brand:",
            text: (
              <>
                I have completed all necessary training courses for the Matrix
                brand,
                <br /> whose products I use in my work.
                <br /> This allows me to guarantee that all cosmetics I work
                with are safe and effective for your hair.
              </>
            ),
          },
          {
            title: "Expert in trichology:",
            text: (
              <>
                Besides hairdressing, I also completed a trichology course.
                <br /> This allows me not only to create fashionable hairstyles,
                <br /> but also to take care of the health of your hair and
                scalp.
              </>
            ),
          },
          {
            title: "Hygiene and sterilization:",
            text: (
              <>
                Your health and safety are my priority.
                <br /> I strictly adhere to all standards regarding
                <br /> disinfection and sterilization of tools,
                <br /> so you can feel comfortable and safe.
              </>
            ),
          },
        ];
      case "Ukrainian":
        return [
          {
            title: "Пристрасть до роботи:",
            text: (
              <>
                Перукарство — це не лише моя професія, а й справжня пристрасть.
                <br /> Я з повною віддачею підходжу до кожного клієнта,
                <br /> з увагою та любов'ю до своєї справи.
              </>
            ),
          },
          {
            title: "Індивідуальний підхід:",
            text: (
              <>
                Кожен клієнт для мене — це особлива людина,
                <br /> яка заслуговує на індивідуальний підхід.
                <br /> Я враховую всі ваші побажання,
                <br /> тип волосся та стиль життя, щоб створити ідеальний
                вигляд.
              </>
            ),
          },
          {
            title: "Постійне вдосконалення:",
            text: (
              <>
                Я вірю, що у світі краси завжди є можливість для розвитку,
                <br /> тому щороку я беру участь у курсах підвищення
                кваліфікації.
                <br /> Мої знання включають останні техніки,
                <br /> що дозволяє мені пропонувати сучасні та стильні рішення.
              </>
            ),
          },
          {
            title: "Співпраця з брендом Matrix:",
            text: (
              <>
                Я закінчила всі необхідні навчальні курси бренду Matrix,
                <br /> продукти якого використовую у своїй роботі.
                <br /> Завдяки цьому я можу гарантувати,
                <br /> що всі косметичні засоби, з якими я працюю, є безпечними
                та ефективними для твого волосся.
              </>
            ),
          },
          {
            title: "Експерт у трихології:",
            text: (
              <>
                Окрім мистецтва перукарства, я також закінчила курс трихології.
                <br /> Це дозволяє мені не лише створювати модні зачіски,
                <br /> а й дбати про здоров'я вашого волосся і шкіри голови.
              </>
            ),
          },
          {
            title: "Гігієна та стерилізація:",
            text: (
              <>
                Твоє здоров'я та безпека — мій пріоритет.
                <br /> Я суворо дотримуюся всіх норм щодо
                <br /> дезінфекції та стерилізації інструментів,
                <br /> щоб ви почувались комфортно та безпечно.
              </>
            ),
          },
        ];
      default:
        return [];
    }
  };

  return (
    <div>
      <h1 className="titul-reasons">
        {selectedLanguage === "Polish"
          ? "Dlaczego warto pracować ze mną?"
          : selectedLanguage === "English"
          ? "Why it's worth working with me?"
          : selectedLanguage === "Ukrainian"
          ? "Чому варто працювати зі мною?"
          : ""}
      </h1>
      <div className="reasons-scroll-container">
        {getReasons().map((reason, index) => (
          <div className="reason-block" key={index}>
            <h1>{reason.title}</h1>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <Button />
      </div>
    </div>
  );
}
