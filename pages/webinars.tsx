import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// // importing components
// import WebinarSection from "../components/webinars/WebinarSection";

const Webinars: NextPage = () => (
  <React.Fragment>
    <Head>
      <title>Webinars | Yash Aryan</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="px-20 md:px-32 text-gray-200 h-96 text-center">
      {/* <WebinarSection /> */}
      <p className="pt-32 text-5xl text-gray-300">Page under development!</p>
    </div>
  </React.Fragment>
);

export default Webinars;
