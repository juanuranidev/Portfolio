import { ChakraProvider } from "@chakra-ui/react";
import { LanguageProvider } from "../context/LanguageContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default MyApp;
