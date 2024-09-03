import React from "react";
import { useTranslation } from "react-i18next";

export const JeansCollection = () => {
  const { t } = useTranslation();

  return (
    <a href="" className="global-animation bg-jean mt-[150px]">
      <div className="text-center px-4">
        <h1 className="drop-shadow text-5xl font-bold mb-3">
          {t("jeans-collection.title")}
        </h1>
        <p className="drop-shadow text-left text-xl mb-8">
          {t("jeans-collection.phrase")}
        </p>
        <p>
          <a
            className="text-xl drop-shadow blue-link uppercase pr-1 font-bold"
            href=""
          >
            {t("jeans-collection.link")}
          </a>
        </p>
      </div>
    </a>
  );
};

export default JeansCollection;
