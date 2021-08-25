import React, { useEffect, ReactElement } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "react-jss";

// CONSTANTS AND MODELS
import { WEB_TITLE } from "@/lib/common/constants";

// STORE
import { wrapper } from "store/store";

// Styles
import jssTheme from "theme";

function NextPage({ Component, pageProps }: AppProps): ReactElement {
  const removeServerCSS = () => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
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

      <ThemeProvider theme={jssTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default wrapper.withRedux(NextPage);
