import React, { useState } from "react";
import "./Css/Services.css";
import { Button } from "./Button";

export function Services() {
  const services = [
    { name: "Strzyżenie męskie maszynką", price: "45 zł" },
    { name: "Strzyżenie męskie maszynką + nożyczki", price: "55 zł" },
    { name: "Strzyżenie męskie tylko nożyczki", price: "70 zł" },
    { name: "Strzyżenie brody", price: "35 zł" },
    { name: "Strzyżenie grzywki", price: "35 zł" },
    { name: "Strzyżenie końcówek na prosto", price: "70 zł" },
    { name: "Strzyżenie damskie krótkie włosy", price: "100 zł" },
    { name: "Strzyżenie damskie średnie włosy", price: "110 zł" },
    { name: "Strzyżenie damskie długie włosy", price: "120 zł" },
    { name: "Peeling skóry głowy + ampułka", price: "75 zł" },
    { name: "Mycie + modelowanie włosów", price: "100 zł" },
    { name: "Prostowanie włosów", price: "100 zł" },
    { name: "Farbowanie odrostu Matrix", price: "200 zł" },
    { name: "Farbowanie Matrix krótkich włosów", price: "220 zł" },
    { name: "Farbowanie Matrix średnich włosów", price: "260 zł" },
    { name: "Farbowanie Matrix długich włosów", price: "300 zł" },
    { name: "Tonowanie Matrix włosów", price: "200 zł" },
    { name: "Farbowanie Matrix włosów + refleksy", price: "350 zł" },
    { name: "Dekoloryzacja odrostu + tonowanie", price: "350 zł" },
    { name: "Farbowanie odrostu Artego", price: "180 zł" },
    { name: "Farbowanie krótkich włosów Artego", price: "190 zł" },
    { name: "Farbowanie średnich włosów Artego", price: "230 zł" },
    { name: "Farbowanie długich włosów Artego", price: "260 zł" },
    { name: "Tonowanie Artego włosów", price: "150 zł" },
    { name: "Balejaż", price: "280 zł" },
    { name: "Microbalejaż", price: "340 zł" },
    { name: "Air touch", price: "490 zł" },
    { name: "Shatush", price: "460 zł" },
    { name: "Baby blond", price: "300 zł" },
    { name: "Refleksy", price: "220 zł" },
    { name: "Maskowanie siwych włosów", price: "170 zł" },
    { name: "Kolorowa kąpiel dla włosów", price: "100 zł" },
    {
      name: "Zabieg pielęgnacyjny (np. maska, ampułka, botoks)",
      price: "120 zł",
    },
    { name: "Zabieg głębokiej rekonstrukcji włosów", price: "170 zł" },
    { name: "Konsultacja fryzjerska", price: "55 zł" },
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

  return (
    <div>
      <h1 className="titul-services">Nasze Usługi</h1>
      <div className="services-grid-container">
        {currentServices.map((service, index) => (
          <div className="service-block" key={index}>
            <h2>{service.name}</h2>
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
        <Button label={"Zapisz się"} />
      </div>
    </div>
  );
}
