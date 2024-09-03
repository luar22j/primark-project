import React, { useState } from "react";
import "../../assets/css/log/main.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Main = () => {
  const { t } = useTranslation();
  const [isLogView, setIsLogView] = useState(true);

  return (
    <main className="flex flex-col lg:w-[40%] w-screen items-center p-5 overflow-auto">
      <div className="w-full">
        <Link
          to="/"
          className="flex justify-start gap-1 p-2 w-20 hover:bg-gray-100 hover:shadow rounded transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <div>{t("log.back")}</div>
        </Link>
      </div>
      <div>
        <Link
          className="logo text-5xl tracking-widest text-[#03a4d8] drop-shadow-md my-8 text-center uppercase"
          to="/"
        >
          Primark
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="uppercase text-sm sm:text-lg md:text-xl lg:text-xl text-center flex justify-center w-[70%] h-[45px]">
          <div
            onClick={() => setIsLogView(true)}
            className={`border-b-2 rounded rounded-b-none pb-5 transition-all w-[50%] ${
              isLogView
                ? "font-bold border-black cursor-default drop-shadow-sm"
                : "border-gray-300 cursor-pointer"
            }`}
          >
            {t("log.signIn")}
          </div>
          <div
            onClick={() => setIsLogView(false)}
            className={`border-b-2 rounded rounded-b-none pb-5 transition-all w-[50%] ${
              isLogView
                ? "border-gray-300 cursor-pointer"
                : "font-bold border-black cursor-default drop-shadow-sm"
            }`}
          >
            {t("log.signUp")}
          </div>
        </div>
        {isLogView ? <SignIn /> : <SignUp />}
      </div>
    </main>
  );
};

export default Main;
