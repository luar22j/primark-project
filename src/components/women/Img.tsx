import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../../assets/css/women/img.css";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

export const Img = () => {
  const { t } = useTranslation();
  const imgData = t("women-img", { returnObjects: true });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const totalItems = Object.keys(imgData).length;

  const containerRef = useRef(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (containerRef.current) {
        const containerWidth = (containerRef.current as HTMLElement)
          .offsetWidth;
        const itemWidth = 250; // Ancho de cada imagen
        setItemsPerPage(Math.floor(containerWidth / itemWidth));
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

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

  const handlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
    trackMouse: true,
  });

  return (
    <div className="flex lg:flex-row flex-col w-full h-auto" {...handlers}>
      <div
        ref={containerRef}
        className="flex lg:w-[90%] lg:mt-[-40px] mt-10 overflow-hidden"
      >
        <div
          className="flex transition-transform first:ml-1 duration-500 gap-1 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / totalItems) * 100}%)`,
            width: `${totalItems * 250}px`,
          }}
        >
          {Object.entries(imgData).map(([key, { name, url }]) => (
            <Link
              to={`/${key}`}
              key={key}
              className="women-section text-center uppercase font-bold w-[250px] group"
            >
              <img
                className="rounded-lg border-2 border-gray-300 hover:border-black mb-3 shadow group-hover:shadow-md w-full transition-all"
                src={`../img/women/section/${url}`}
                alt={name}
              />
              <span className="text-black drop-shadow hover:drop-shadow-lg">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex global-animation justify-center items-center w-[10%] ml-10 mt-5 lg:mt-[-50px] gap-1">
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
    </div>
  );
};

export default Img;
