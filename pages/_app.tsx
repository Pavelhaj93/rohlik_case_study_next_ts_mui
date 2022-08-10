import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";

import '../styles/globals.css';
import theme from "../src/themes/theme.config";

import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;