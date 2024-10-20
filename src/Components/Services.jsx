import React, { useState } from "react";
import { Button } from "./Button";
import { useLanguage } from "../Context/LanguageContext";
import "./Css/Services.css";

export function Services() {
  const { selectedLanguage } = useLanguage();

  const services = [
    {
      name: {
        Polish: "Strzyżenie męskie maszynką",
        English: "Men's Haircut with Machine",
        Ukrainian: "Чоловіча стрижка машинкою",
      },
      price: "45 zł",
    },
    {
      name: {
        Polish: "Strzyżenie męskie maszynką + nożyczki",
        English: "Men's Haircut with Machine + Scissors",
        Ukrainian: "Чоловіча стрижка машинкою + ножиці",
      },
      price: "55 zł",
    },
    {
      name: {
        Polish: "Strzyżenie męskie tylko nożyczki",
        English: "Men's Haircut with Scissors Only",
        Ukrainian: "Чоловіча стрижка тільки ножицями",
      },
      price: "70 zł",
    },
    {
      name: {
        Polish: "Strzyżenie brody",
        English: "Beard Trim",
        Ukrainian: "Стрижка бороди",
      },
      price: "35 zł",
    },
    {
      name: {
        Polish: "Strzyżenie grzywki",
        English: "Fringe Trim",
        Ukrainian: "Стрижка чубчика",
      },
      price: "35 zł",
    },
    {
      name: {
        Polish: "Strzyżenie końcówek na prosto",
        English: "Straight End Trim",
        Ukrainian: "Стрижка кінчіків волосся",
      },
      price: "70 zł",
    },
    {
      name: {
        Polish: "Strzyżenie damskie krótkie włosy",
        English: "Women's Short Haircut",
        Ukrainian: "Жіноча коротка стрижка",
      },
      price: "100 zł",
    },
    {
      name: {
        Polish: "Strzyżenie damskie średnie włosy",
        English: "Women's Medium Haircut",
        Ukrainian: "Жіноча середня стрижка",
      },
      price: "110 zł",
    },
    {
      name: {
        Polish: "Strzyżenie damskie długie włosy",
        English: "Women's Long Haircut",
        Ukrainian: "Жіноча довга стрижкa",
      },
      price: "120 zł",
    },
    {
      name: {
        Polish: "Peeling skóry głowy + ampułka",
        English: "Scalp Peeling + Ampoule",
        Ukrainian: "Пілінг шкіри голови + ампулка",
      },
      price: "75 zł",
    },
    {
      name: {
        Polish: "Mycie + modelowanie włosów",
        English: "Washing + Hair Styling",
        Ukrainian: "Миття + укладання волосся",
      },
      price: "100 zł",
    },
    {
      name: {
        Polish: "Prostowanie włosów",
        English: "Hair Straightening",
        Ukrainian: "Вирівнювання волосся",
      },
      price: "100 zł",
    },
    {
      name: {
        Polish: "Farbowanie odrostu Matrix",
        English: "Matrix Root Coloring",
        Ukrainian: "Фарбування коріння Matrix",
      },
      price: "200 zł",
    },
    {
      name: {
        Polish: "Farbowanie Matrix krótkich włosów",
        English: "Matrix Short Hair Coloring",
        Ukrainian: "Фарбування короткого волосся Matrix",
      },
      price: "220 zł",
    },
    {
      name: {
        Polish: "Farbowanie Matrix średnich włosów",
        English: "Matrix Medium Hair Coloring",
        Ukrainian: "Фарбування середнього волосся Matrix",
      },
      price: "260 zł",
    },
    {
      name: {
        Polish: "Farbowanie Matrix długich włosów",
        English: "Matrix Long Hair Coloring",
        Ukrainian: "Фарбування довгого волосся Matrix",
      },
      price: "300 zł",
    },
    {
      name: {
        Polish: "Tonowanie Matrix włosów",
        English: "Matrix Hair Toning",
        Ukrainian: "Тонування волосся Matrix",
      },
      price: "200 zł",
    },
    {
      name: {
        Polish: "Farbowanie Matrix włosów + refleksy",
        English: "Matrix Hair Coloring + Highlights",
        Ukrainian: "Фарбування волосся Matrix + мелірування",
      },
      price: "350 zł",
    },
    {
      name: {
        Polish: "Dekoloryzacja odrostu + tonowanie",
        English: "Root Decolorization + Toning",
        Ukrainian: "Деколоризація коріння + тонування",
      },
      price: "350 zł",
    },
    {
      name: {
        Polish: "Farbowanie odrostu Artego",
        English: "Artego Root Coloring",
        Ukrainian: "Фарбування коріння Artego",
      },
      price: "180 zł",
    },
    {
      name: {
        Polish: "Farbowanie krótkich włosów Artego",
        English: "Artego Short Hair Coloring",
        Ukrainian: "Фарбування короткого волосся Artego",
      },
      price: "190 zł",
    },
    {
      name: {
        Polish: "Farbowanie średnich włosów Artego",
        English: "Artego Medium Hair Coloring",
        Ukrainian: "Фарбування середнього волосся Artego",
      },
      price: "230 zł",
    },
    {
      name: {
        Polish: "Farbowanie długich włosów Artego",
        English: "Artego Long Hair Coloring",
        Ukrainian: "Фарбування довгого волосся Artego",
      },
      price: "260 zł",
    },
    {
      name: {
        Polish: "Tonowanie Artego włosów",
        English: "Artego Hair Toning",
        Ukrainian: "Тонування волосся Artego",
      },
      price: "150 zł",
    },
    {
      name: {
        Polish: "Balejaż",
        English: "Balayage",
        Ukrainian: "Балаяж",
      },
      price: "280 zł",
    },
    {
      name: {
        Polish: "powierzchniowy balejaż",
        English: "surface balayage",
        Ukrainian: "Поверхневий Балаяж",
      },
      price: "220 zł",
    },
    {
      name: {
        Polish: "Microbalejaż",
        English: "Micro Balayage",
        Ukrainian: "Мікро балаяж",
      },
      price: "340 zł",
    },
    {
      name: {
        Polish: "Air Touch",
        English: "Air Touch",
        Ukrainian: "Air Touch",
      },
      price: "490 zł",
    },
    {
      name: {
        Polish: "Shatush",
        English: "Shatush",
        Ukrainian: "Shatush",
      },
      price: "460 zł",
    },
    {
      name: {
        Polish: "Baby Blonde",
        English: "Baby Blonde",
        Ukrainian: "Baby Blonde",
      },
      price: "300 zł",
    },
    {
      name: {
        Polish: "Refleksy",
        English: "Highlights",
        Ukrainian: "Мелірування",
      },
      price: "220 zł",
    },
    {
      name: {
        Polish: "Maskowanie siwych włosów",
        English: "Gray Hair Camouflage",
        Ukrainian: "Маскування сивого волосся",
      },
      price: "170 zł",
    },
    {
      name: {
        Polish: "Kolorowa kąpiel dla włosów",
        English: "Color Bath for Hair",
        Ukrainian: "Кольорова баня для волосся",
      },
      price: "100 zł",
    },
    {
      name: {
        Polish: "Zabieg pielęgnacyjny (np. maska, ampułka, botoks)",
        English: "Nourishing Treatment (e.g. mask, ampoule, botox)",
        Ukrainian: "Доглядова процедура (наприклад, маска, ампулка, ботокс)",
      },
      price: "120 zł",
    },
    {
      name: {
        Polish: "Zabieg głębokiej rekonstrukcji włosów",
        English: "Deep Hair Reconstruction Treatment",
        Ukrainian: "Глибоке відновлення волосся",
      },
      price: "170 zł",
    },
    {
      name: {
        Polish: "Konsultacja fryzjerska",
        English: "Hairdressing Consultation",
        Ukrainian: "Консультація перукаря",
      },
      price: "55 zł",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 9;

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const totalPages = Math.ceil(services.length / servicesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getServiceName = (service) => {
    switch (selectedLanguage) {
      case "Polish":
        return service.name.Polish;
      case "English":
        return service.name.English;
      case "Ukrainian":
        return service.name.Ukrainian;
      default:
        return service.name.Polish;
    }
  };

  return (
    <div>
      <h1 className="titul-services">
        {selectedLanguage === "Polish" && "Nasze Usługi"}
        {selectedLanguage === "English" && "Our Services"}
        {selectedLanguage === "Ukrainian" && "Наші послуги"}
      </h1>
      <div className="services-grid-container">
        {currentServices.map((service, index) => (
          <div className="service-block" key={index}>
            <h2>{getServiceName(service)}</h2>
            <p>{service.price}</p>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="button-container">
        <Button />
      </div>
    </div>
  );
}
