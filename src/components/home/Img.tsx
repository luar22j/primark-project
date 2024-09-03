import React from "react";
import { useTranslation } from "react-i18next";
import "../../assets/css/home/img.css";
import { Link } from "react-router-dom";

export const Img = () => {
  const { t } = useTranslation();
  const imgData = t("img", { returnObjects: true });

  return (
    <div className="mx-10 lg:mt-[-40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 justify-items-center uppercase font-bold text-xl text-center">
      {Object.entries(imgData).map(([key, { name, img }]) => (
        <Link
          to={`/section/${key}`}
          key={key}
          className="apartados w-[300px] sm:w-full group"
        >
          <img
            className="rounded-lg border-2 border-black mb-3 shadow-xl group-hover:shadow-2xl w-full transition-all"
            src={`./img/section/${img}`}
            alt={name}
          />
          <span className="text-black">{name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Img;
