import React from "react";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface SearchModalProps {
  showModal: boolean;
  closeModal: () => void;
}

export const SearchModal = ({ showModal, closeModal }: SearchModalProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const { t } = useTranslation();
  const imgData = t("img", { returnObjects: true });

  useEffect(() => {
    console.log(imgData); // Verifica qué se carga aquí
  }, [imgData]);

  // Effect to manage body scroll based on modal visibility
  useEffect(() => {
    document.body.classList.toggle("no-scroll", showModal);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showModal]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  if (!showModal) {
    return null;
  }

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-30 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white flex flex-col p-5 shadow-lg w-screen h-auto transition-transform duration-300 ${
          showModal ? "search-animation" : ""
        }`}
      >
        <div className="flex lg:order-1 lg:flex-row flex-col lg:justify-between justify-center items-start lg:gap-44">
          <div className="w-[30%] hidden lg:block">
            <Link
              className="logo text-4xl lg:text-5xl tracking-wider drop-shadow text-[#03a4d8] text-center uppercase"
              to="/"
            >
              Primark
            </Link>
          </div>
          <div className="w-full order-1 lg:order-3">
            <div className="flex flex-row order-2 lg:order-3 items-center border-b-2 border-black w-full">
              <button className="h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="size-6 ml-2 h-[40px] w-[30px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder={t("search.search")}
                className="w-full p-2 rounded-md outline-none"
                value={searchText}
                onChange={handleChange}
              />
              {searchText && (
                <button
                  onClick={clearSearch}
                  className="text-gray-400 mr-3 hover:text-gray-600 transition-all"
                >
                  {t("search.clear")}
                </button>
              )}
            </div>
            <div className="mt-5">
              <div className="hidden md:flex flex-col">
                <h1 className="text-gray-400 mb-3">{t("search.popular")}</h1>
                <div className="flex gap-5">
                  {Object.entries(imgData).map(([key, { name, img, url }]) => (
                    <Link
                      key={key}
                      className="flex flex-col gap-3 text-center cursor-pointer hover:scale-105 transition-all"
                      to={`/section/${url}`}
                    >
                      <img
                        src={`/img/section/${img}`}
                        alt={name}
                        className="rounded drop-shadow-lg"
                      />
                      <h2 className="uppercase text-sm font-semibold">
                        {name}
                      </h2>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="md:border-t border-gray-200 mt-10">
                <Link
                  to="/location"
                  className="mt-3 hover:shadow flex flex-row items-center gap-1 cursor-pointer p-3 rounded-md pl-1 hover:bg-gray-100 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <h1 className="md:text-lg">{t("search.locator")}</h1>
                </Link>
                <div className="mt-1 flex flex-row hover:shadow items-center gap-1 cursor-pointer p-3 rounded-md pl-1 hover:bg-gray-100 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                  <h1 className="md:text-lg">{t("search.help")}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] w-full lg:order-3 flex justify-end">
            <button
              onClick={closeModal}
              className="hover:bg-gray-100 hover:shadow rounded p-1 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
