import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import { I18nextProvider } from "react-i18next";
import { LanguageProvider } from "../context/LanguageContext";
import i18n from "../config/reactI18Next";
import "../assets/styles/globals.css";
import "../assets/styles/animations.css";
import "../assets/styles/keyframes.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <LanguageProvider>
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
          <Analytics />
        </I18nextProvider>
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default MyApp;
