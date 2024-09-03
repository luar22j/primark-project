import React, { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import "../../assets/css/log/main.css";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const SignUp = () => {
  const anoActual = new Date().getFullYear();
  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleDivClick = () => {
    setChecked(!checked);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.title = t("signUp.title");
  }, [location, t]);

  return (
    <form className="opacity-animation flex flex-col justify-center items-center m-5 gap-5">
      <div className="flex flex-col w-[80%] justify-center items-center gap-2">
        <input
          className="border-gray-300 focus:border-[#03a4d8] focus:shadow transition-all border-2 rounded p-2 w-full outline-none"
          placeholder={t("signUp.email")}
          type="email"
          required
        />

        <input
          className="border-gray-300 focus:border-[#03a4d8] focus:shadow transition-all border-2 rounded p-2 w-full outline-none"
          placeholder={t("signUp.name")}
          type="text"
          required
        />

        <input
          className="border-gray-300 focus:border-[#03a4d8] focus:shadow transition-all border-2 rounded p-2 w-full outline-none"
          placeholder={t("signUp.surname")}
          type="text"
          required
        />

        <div className="flex flex-col w-full gap-1 my-1">
          <h2>{t("signUp.birthDay")}</h2>
          <div className="inputs flex gap-3">
            <input
              className="border-gray-300 focus:border-[#03a4d8] focus:shadow transition-all border-2 rounded p-2 w-full outline-none"
              type="number"
              placeholder={t("signUp.day")}
              required
              min={1}
              max={31}
            />
            <input
              className="border-gray-300 focus:border-[#03a4d8] focus:shadow transition-all border-2 rounded p-2 w-full outline-none"
              type="number"
              placeholder={t("signUp.month")}
              required
              min={1}
              max={12}
            />
            <input
              className="border-gray-300 focus:border-[#03a4d8] focus:shadow transition-all border-2 rounded p-2 w-full outline-none"
              type="number"
              placeholder={t("signUp.year")}
              required
              min={1900}
              max={anoActual}
            />
          </div>
          <p className="text-sm text-gray-600">{t("signUp.conditions")}</p>
        </div>

        <div className="relative w-full flex items-center">
          <input
            className="pr-[70px] box-content border-gray-300 focus:border-[#03a4d8] focus:shadow transition-all border-2 rounded p-2 w-full outline-none"
            placeholder={t("signUp.createPassword")}
            type={passwordVisible ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {password && (
            <button
              type="button"
              className="absolute hover:text-[#03a4d8] right-0 h-full px-[10px] cursor-pointer rounded-r transition-all"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Ocultar" : "Mostrar"}
            </button>
          )}
        </div>

        <div className="relative w-full flex items-center">
          <input
            className="pr-[70px] box-content border-gray-300 focus:border-[#03a4d8] focus:shadow transition-all border-2 rounded p-2 w-full outline-none"
            placeholder={t("signUp.confirmPassword")}
            type={confirmPasswordVisible ? "text" : "password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          {confirmPassword && (
            <button
              type="button"
              className="absolute hover:text-[#03a4d8] right-0 h-full px-[10px] cursor-pointer rounded-r transition-all"
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? "Ocultar" : "Mostrar"}
            </button>
          )}
        </div>
      </div>

      <div
        className="flex justify-center gap-2 text-justify w-[80%] cursor-pointer"
        onClick={handleDivClick}
      >
        <div className="checkbox-wrapper-30">
          <span className="checkbox">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <svg>
              <use xlinkHref="#checkbox-30" className="checkbox"></use>
            </svg>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
            <symbol id="checkbox-30" viewBox="0 0 22 22">
              <path
                fill="none"
                stroke="#03a4d8"
                d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
              />
            </symbol>
          </svg>
        </div>
        <p>{t("signUp.ads")}</p>
      </div>
      <div className="w-[80%] text-justify text-[#7a7a7a] my-5">
        <div>
          {t("signUp.description")}{" "}
          <a className="underline" href="#">
            {t("signUp.privacity")}
          </a>{" "}
          {t("signUp.description02")}
        </div>
        <br />
        <div>
          {t("signUp.description03")}{" "}
          <a className="underline" href="#">
            {t("signUp.privacity")}
          </a>{" "}
          {t("signUp.description04")}{" "}
          <a className="underline" href="#">
            {t("signUp.terms")}
          </a>
          .
        </div>
      </div>
      <div className="w-[80%] bg-black py-3 px-5 text-white rounded cursor-pointer text-center hover:shadow-lg transition-all duration-200">
        <input
          className="uppercase cursor-pointer"
          type="submit"
          value={t("log.signUp")}
        />
      </div>
    </form>
  );
};

export default SignUp;
