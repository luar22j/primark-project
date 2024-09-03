import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // Importa el backend

i18n
  .use(Backend) // Usa el backend para cargar traducciones
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/data/{{lng}}/translation.json", // Ruta para cargar las traducciones
    },
    lng: "es", // Idioma por defecto
    fallbackLng: "es", // Idioma de respaldo
    debug: true, // Activa el modo de depuración
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  });

export default i18n;
