import React from "react";
import { useTranslation } from "react-i18next";

export const Miss = () => {
  const { t } = useTranslation();

  return (
    <a
      href=""
      className="global-animation bg-[#023352] mt-[150px] w-screen h-[500px] flex justify-center items-center"
    >
      <div className="flex flex-col text-center px-4 text-white drop-shadow">
        <h1 className="lg:text-6xl text-5xl font-bold text-left">
          {t("miss-nothing.title")}
        </h1>
        <p className="mt-[30px] text-xl">{t("miss-nothing.phrase")}</p>
        <p>
          <a
            className="blue-link mt-[50px] shadow text-xl pr-1 uppercase font-bold"
            href=""
          >
            {t("miss-nothing.link")}
          </a>
        </p>
      </div>
    </a>
  );
};

export default Miss;
