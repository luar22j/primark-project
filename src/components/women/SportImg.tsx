import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSwipeable } from "react-swipeable";

export const SportImg = () => {
  const { t } = useTranslation();
  const imgData = t("women-section2", { returnObjects: true });
  const validItems = Object.entries(imgData).filter(
    ([key]) => !["currency", "color", "phrase", "title", "button"].includes(key)
  );
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalItems = validItems.length;

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (key: string) => {
    setFavorites((prev) => {
      const newFavorites = { ...prev, [key]: !prev[key] };
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = 400; // Ancho de cada imagen
        const newItemsPerPage = Math.floor(containerWidth / itemWidth);
        setItemsPerPage(newItemsPerPage > 0 ? newItemsPerPage : 1); // Asegurarse de que sea al menos 1
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, [containerRef.current]);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(currentIndex - itemsPerPage, 0));
    }
  };

  const handleNextClick = () => {
    if (currentIndex < totalItems - itemsPerPage) {
      setCurrentIndex(
        Math.min(currentIndex + itemsPerPage, totalItems - itemsPerPage)
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerPage]);

  const handlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
    trackMouse: true,
  });

  return (
    <div
      className="mt-[150px] flex lg:flex-row flex-col w-screen global-animation lg:gap-10 gap-5"
      {...handlers}
    >
      <div className="global-animation flex lg:hidden flex-col drop-shadow lg:absolute right-0 ml-10 lg:ml-0 lg:mt-10 mb-10 lg:mb-0 px-4 z-30">
        <p className="text-sm">{t("women-section2.phrase")}</p>
        <h1 className="drop-shadow text-5xl pr-4 font-bold mt-3 mb-10">
          {t("women-section2.title")}
        </h1>
        <p>
          <a className="drop-shadow blue-link uppercase pr-2 cursor-pointer font-bold text-lg">
            {t("women-section2.button")}
          </a>
        </p>
      </div>
      <div
        ref={containerRef}
        className="flex lg:flex-row flex-col lg:w-[70%] overflow-hidden"
      >
        <div className="global-animation hidden lg:flex flex-col drop-shadow lg:absolute right-0 ml-10 lg:ml-0 lg:mt-10 mb-10 lg:mb-0 w-[500px] z-30">
          <p>{t("women-section2.phrase")}</p>
          <h1 className="drop-shadow text-6xl font-bold mt-3 mb-10">
            {t("women-section2.title")}
          </h1>
          <p>
            <a className="drop-shadow blue-link uppercase pr-2 cursor-pointer font-bold text-xl">
              {t("women-section2.button")}
            </a>
          </p>
        </div>
        <div
          className="global-animation flex gap-3 duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / totalItems) * 100}%)`,
            width: `${totalItems * 400}px`,
          }}
        >
          {validItems.map(([key, { url, color }]) => (
            <div
              key={key}
              className="flex flex-col first:ml-2 w-[400px] flex-shrink-0"
            >
              <img
                className="w-[400px] rounded-lg border-2 border-gray-300 hover:border-black shadow hover:shadow-md cursor-pointer transition-all"
                src={`../img/women/section2/${url}`}
                alt={key}
              />
              <div className="flex justify-between mt-3 gap-3">
                <div className="flex flex-col gap-3">
                  <a href="" className="a-animation">
                    {t(`women-section2.${key}.name`)}
                  </a>
                  <div className="flex flex-col">
                    <p>
                      <a href="" className="font-bold text-lg">
                        {t(`women-section2.${key}.price`)}{" "}
                        {t("women-section2.currency")}
                      </a>
                    </p>
                    <p>
                      <a href="" className="text-gray-500 text-sm">
                        {color} {t(`women-section2.color`)}
                      </a>
                    </p>
                  </div>
                </div>
                <div
                  className="mr-3 mt-2 w-10 h-10 flex items-center justify-center rounded-md cursor-pointer hover:shadow hover:bg-gray-100 transition-all"
                  onClick={() => toggleFavorite(key)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className={`size-6 transition-all duration-300 ease-in-out ${
                      favorites[key] ? "fill-black" : "fill-transparent"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex global-animation flex-col items-center justify-end mb-[150px] gap-3">
        <div className="flex justify-center items-end gap-1">
          <div
            onClick={handlePrevClick}
            className={`p-2 hover:bg-gray-100 hover:shadow rounded transition-all ${
              currentIndex === 0
                ? "opacity-30 hover:bg-white hover:shadow-none"
                : "cursor-pointer"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          <div
            onClick={handleNextClick}
            className={`p-2 hover:bg-gray-100 hover:shadow rounded transition-all ${
              currentIndex >= totalItems - itemsPerPage
                ? "hover:bg-white opacity-30 hover:shadow-none"
                : "cursor-pointer"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-center">
          {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }).map(
            (_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                  currentIndex / itemsPerPage === index
                    ? "bg-black"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SportImg;
