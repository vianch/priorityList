import Head from "next/head";
import { ReactElement } from "react";

interface MetaHeadProps {
  description: string;
  url: string;
  title?: string;
  image?: string;
  canonicalPath?: string | null;
}
const MetaHead = ({
  title = null,
  description,
  image = null,
  url,
  canonicalPath = null,
}: MetaHeadProps): ReactElement => {
  const pageTitle = title || "THE HAT PACK";
  const pageUrl =
    process?.env?.NEXT_PUBLIC_APP_URL || "https://the-hat-pack.com";

  return (
    <Head>
      <title>{pageTitle}</title>

      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={description} />
      {image && <meta property="twitter:image" content={image} />}
      {canonicalPath && pageUrl && (
        <link
          data-react-helmet="true"
          href={`${pageUrl}${canonicalPath}`}
          rel="canonical"
        />
      )}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="author" content="the-hat-pack" />
      <meta name="keywords" content="hat pack, security, encrypt , design" />
    </Head>
  );
};
export default MetaHead;
