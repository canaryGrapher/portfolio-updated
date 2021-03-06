import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AppProps } from "next/dist/shared/lib/router/router";
import Script from "next/script";

// importing tailwind files
import "tailwindcss/tailwind.css";
import "styles/globals.css";

// importing components
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

//importing images
import { Logo } from "../assets/common";

import * as gtag from "../lib/gtag";
declare global {
  interface Window {
    gtag: any;
  }
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <div className="overflow-x-hidden">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" type="image/png" href={Logo} />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default MyApp;
