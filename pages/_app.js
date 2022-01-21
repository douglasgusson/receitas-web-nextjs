import { ChakraProvider } from "@chakra-ui/react";
import DefaultLayout from "../layouts/default";
import theme from "../style/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default MyApp;
