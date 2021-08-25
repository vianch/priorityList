import React, { useEffect, ReactElement } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import injectSheet, {
  ThemeProvider,
  JssProvider,
  SheetsRegistry,
  createGenerateId,
} from "react-jss";
// CONSTANTS AND MODELS
import { WEB_TITLE } from "@/lib/common/constants";

// STORE
import { wrapper } from "store/store";

// Styles
import jssTheme from "theme";
import globalStyles from "theme/global";

function NextPage({ Component, pageProps }: AppProps): ReactElement {
  const sheets = new SheetsRegistry();
  const generateId = createGenerateId();

  const removeServerCSS = () => {
    const ssStyles = document.getElementById("server-side-styles");

    if (ssStyles) {
      ssStyles.parentNode.removeChild(ssStyles);
    }
  };

  useEffect(() => {
    removeServerCSS();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{WEB_TITLE}</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <JssProvider registry={sheets} generateId={generateId}>
        <ThemeProvider theme={jssTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </JssProvider>
    </React.Fragment>
  );
}

export default wrapper.withRedux(injectSheet(globalStyles)(NextPage));
