import React from "react";
import "../../assets/css/style.css";

interface CookiesProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Cookies = ({ isOpen, onClose }: CookiesProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <section
      className={`fixed z-40 flex justify-center items-end bg-black bg-opacity-40 w-screen h-screen transition-opacity duration-500 overflow-hidden ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <main
        className={`bg-white shadow-top flex flex-col lg:flex-row justify-center items-center w-screen p-5 lg:px-16 py-8 gap-10 transition-transform duration-500 ${
          isOpen ? "cookie-animation translate-none" : "translate-y-full"
        }`}
      >
        <div className="flex flex-col lg:w-[50%] w-full gap-1">
          <h1 className="text-2xl font-bold">Usamos Cookies</h1>
          <div className="text-justify">
            Al hacer clic en “Aceptar todas las cookies”, usted acepta que las
            cookies se guarden en su dispositivo para mejorar la navegación del
            sitio, analizar el uso del mismo, y colaborar con nuestros estudios
            para marketing.{" "}
            <a href="#" className="underline">
              Política de cookies
            </a>
          </div>
        </div>
        <div className="flex lg:w-[50%] w-full flex-col justify-center items-center gap-3">
          <div className="flex md:flex-row w-full flex-col justify-center gap-5">
            <button
              onClick={onClose}
              className="text-lg border-2 border-black bg-white font-bold rounded p-4 px-8 uppercase hover:shadow-lg transition-all"
            >
              Solo cookies obligatorias
            </button>
            <button
              onClick={onClose}
              className="text-lg border-2 border-black bg-black text-white font-bold rounded p-4 px-8 uppercase hover:shadow-lg transition-all"
            >
              Aceptar todas las cookies
            </button>
          </div>
          <a href="#" className="underline">
            Configuración De las Cookies
          </a>
        </div>
      </main>
    </section>
  );
};

export default Cookies;
