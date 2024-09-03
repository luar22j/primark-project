import React, { useEffect, useState } from "react";
import CountryModal from "./CountryModal";
import { useTranslation } from "react-i18next";

interface Country {
  code: string;
  name: string;
  currency: string;
  flag: string;
  language: string;
}

export const Footer = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [region, setRegion] = useState<boolean>(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("/data/countries.json")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);

        const userLanguage = navigator.language.slice(0, 2);
        setLanguage(userLanguage);

        const defaultCountry = data.find(
          (country: Country) => country.language === userLanguage
        );
        if (defaultCountry) {
          setSelectedCountry(defaultCountry);
          i18n.changeLanguage(defaultCountry.language);
        }
      })
      .catch((error) =>
        console.error("Error al cargar el archivo JSON:", error)
      );
  }, [i18n]);

  console.log(language);

  const abrirRegion = () => {
    setRegion(true);
  };

  const cerrarRegion = () => {
    setRegion(false);
  };

  const toggleSection = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const footerData = t("footer", { returnObjects: true });

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
    i18n.changeLanguage(country.language);
    cerrarRegion();
  };

  return (
    <footer className="flex flex-col flex-wrap justify-center items-center gap-20">
      <section className="global-animation md:gap-20 px-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid w-full">
        {Object.entries(footerData).map(([key, value], index) => {
          const { title, links } = value as { title: string; links: string[] };

          if (!links) {
            console.warn(`No links found for section: ${key}`);
            return null;
          }

          return (
            <div
              key={key}
              className="flex flex-col border-t-2 border-gray-200 md:border-none cursor-pointer md:cursor-default"
            >
              <div
                className="flex flex-row justify-between items-center p-3 m-2 md:p-0 rounded hover:bg-gray-100 md:hover:shadow-none hover:shadow md:hover:bg-white transition-all"
                onClick={() => toggleSection(index)}
              >
                <h1 className="global-animation md:mb-5 font-bold md:ml-3 md:cursor-text">
                  {title}
                </h1>
                <div className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`size-6 transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`${
                  expandedIndex === index
                    ? "max-h-[215px] opacity-100 mb-5"
                    : "max-h-0 opacity-0"
                } md:hidden transition-all duration-500 overflow-hidden flex flex-col ml-5 space-y-2`}
              >
                {links.map((link: string, linkIndex: number) => (
                  <a
                    key={`${key}-${linkIndex}`} // Añadir una clave única
                    className="a-animation global-animation hover:underline"
                    href="#"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="hidden md:flex flex-col ml-5 mb-5 space-y-1">
                {links.map((link: string, linkIndex: number) => (
                  <p key={`${key}-${linkIndex}`}>
                    <a
                      className="a-animation global-animation hover:underline"
                      href="#"
                    >
                      {link}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {selectedCountry && (
        <button
          onClick={abrirRegion}
          className="global-animation country flex flex-row border-2 rounded border-gray-400 justify-between p-2 gap-10 hover:border-black hover:shadow-md transition-all"
        >
          <div className="flex flex-row gap-3">
            <img
              className="rounded w-10"
              src={`/img/flags/${selectedCountry.flag}`}
              alt={`Bandera de ${selectedCountry.name}`}
            />
            {selectedCountry.name}, {selectedCountry.currency}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="svg size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      )}

      <CountryModal
        isOpen={region}
        onClose={cerrarRegion}
        onSelectCountry={handleCountryChange}
      />

      <div className="global-animation w-screen h-16 flex items-center justify-center border-t-2 border-black">
        2024 © Primark Limited
      </div>
    </footer>
  );
};

export default Footer;
