import React from "react";
import { useEffect } from "react";
import countries from "../../../public/data/countries.json";
import { useTranslation } from "react-i18next";

interface Country {
  code: string; // Añadido en caso de que 'code' deba ser generado.
  name: string;
  currency: string;
  flag: string;
  language: string;
}

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  onSelectCountry: (country: Country) => void;
}

export const CountryModal = ({
  isOpen = false,
  onClose,
  onSelectCountry,
}: Props) => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="w-screen h-screen fixed inset-0 z-50 flex justify-center lg:justify-end items-center bg-black bg-opacity-20 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white sm:border-x-2  sm:border-black lg:w-[40%] sm:w-[90%] h-screen flex flex-col shadow-2xl overflow-y-auto ${
          isOpen ? "country-animation translate-none" : "translate-x-full"
        }`}
      >
        <div className="w-full flex justify-end p-5 pb-0">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="hover:shadow hover:bg-gray-100 rounded p-1 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-2xl text-center w-full font-semibold">
          {t("countries.title")}
        </h2>
        <p className="text-justify p-5">{t("countries.text")}</p>
        <div className="px-5 flex-1 mb-2">
          <ul className="space-y-1">
            {countries.map((country, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2"
                onClick={() => {
                  const countryCode = country.flag.split(".")[0];
                  onSelectCountry({
                    code: countryCode,
                    name: country.name,
                    currency: country.currency,
                    flag: country.flag,
                    language: country.language,
                  });
                  i18n.changeLanguage(country.language);
                }}
              >
                <img
                  src={`/img/flags/${country.flag}`}
                  alt={country.name}
                  className="w-6 h-4 rounded-sm"
                />
                <span>
                  {country.name}, {country.currency}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryModal;
