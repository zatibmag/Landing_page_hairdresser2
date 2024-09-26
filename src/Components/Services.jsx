import React, { useState } from "react";
import "./Css/Services.css";
import { Button } from "./Button";

export function Services() {
  const services = [
    "Strzyżenie męskie maszynką",
    "Strzyżenie męskie maszynką + nożyczki",
    "Strzyżenie męskie tylko nożyczki",
    "Strzyżenie brody",
    "Strzyżenie grzywki",
    "Strzyżenie końcówek na prosto",
    "Strzyżenie damskie krótkie włosy",
    "Strzyżenie damskie średnie włosy",
    "Strzyżenie damskie długie włosy",
    "Peeling skóry głowy + ampułka",
    "Mycie + modelowanie włosów",
    "Prostowanie włosów",
    "Farbowanie odrostu Matrix",
    "Farbowanie Matrix krótkich włosów",
    "Farbowanie Matrix średnich włosów",
    "Farbowanie Matrix długich włosów",
    "Tonowanie Matrix włosów",
    "Farbowanie Matrix włosów + refleksy",
    "Dekoloryzacja odrostu + tonowanie",
    "Farbowanie odrostu Artego",
    "Farbowanie krótkich włosów Artego",
    "Farbowanie średnich włosów Artego",
    "Farbowanie długich włosów Artego",
    "Tonowanie Artego włosów",
    "Balejaż",
    "Microbalejaż",
    "Air touch",
    "Shatush",
    "Baby blond",
    "Refleksy",
    "Maskowanie siwych włosów",
    "Kolorowa kąpiel dla włosów",
    "Zabieg pielęgnacyjne (np. maska, ampułka, botoks)",
    "Zabieg głębokiej rekonstrukcji włosów",
    "Konsultacja fryzjerska",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 9;

  // Calculate the current services to be displayed based on the current page
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(services.length / servicesPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="App-header">Nasze Usługi</h1>
      <div className="services-grid-container">
        {currentServices.map((service, index) => (
          <div className="service-block" key={index}>
            <h2>{service}</h2>
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
      <Button label={"Zapisz się"} onClick={""} />
    </div>
  );
}
