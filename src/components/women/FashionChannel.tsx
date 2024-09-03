import React from "react";
import { useTranslation } from "react-i18next";

export const FashionChannel = () => {
  const { t } = useTranslation();
  const fashionDataCol1 = t("fashion-channel.links.col1", {
    returnObjects: true,
  });
  const fashionDataCol2 = t("fashion-channel.links.col2", {
    returnObjects: true,
  });

  function renderColumn(data: any) {
    return (
      <div className="flex flex-col gap-10">
        {Object.entries(data).map(
          ([key, { title, text, by, img }]: [string, any]) => (
            <div key={key} className="flex flex-col gap-3 w-full md:w-[400px]">
              <a href="">
                <img
                  src={`../img/women/fashion/${img}`}
                  className="rounded-lg shadow-md border-2 border-gray-300 hover:border-black hover:shadow-lg transition-all w-full h-auto"
                  alt={img}
                />
              </a>
              <div className="flex flex-col gap-3">
                <p>
                  <a href="" className="flex flex-col gap-3">
                    <span className="text-2xl font-bold">{title}</span>
                    <span className="text">{text}</span>
                  </a>
                </p>
                <p className="text-sm">{by}</p>
              </div>
            </div>
          )
        )}
      </div>
    );
  }

  return (
    <div className="flex w-screen justify-center items-center">
      <div className="flex lg:flex-row flex-col gap-10 mx-[10%] mt-[100px] z-10">
        <div className="flex flex-col lg:items-start items-center gap-10 w-full lg:w-auto">
          <div className="flex flex-col drop-shadow right-0 w-full lg:w-[500px] z-30">
            <p>{t("fashion-channel.title.phrase")}</p>
            <h1 className="drop-shadow lg:text-7xl text-5xl font-bold mt-3 mb-10">
              {t("fashion-channel.title.title")}
            </h1>
            <p>
              <a className="drop-shadow blue-link uppercase pr-2 cursor-pointer font-bold text-xl">
                {t("fashion-channel.title.link")}
              </a>
            </p>
          </div>
          {renderColumn(fashionDataCol1)}
        </div>
        <div className="flex w-full lg:w-auto">
          {renderColumn(fashionDataCol2)}
        </div>
      </div>
    </div>
  );
};

export default FashionChannel;
