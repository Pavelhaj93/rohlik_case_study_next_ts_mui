import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalContextProvider } from "../src/context/GlobalContext";

import "../styles/globals.css";
import theme from "../src/themes/theme.config";

import Layout from "../src/components/Layout";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </GlobalContextProvider>
  );
}

export default MyApp;
