import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// // importing components
import CertificateSection from "../components/certificates/CertificateSection";

const Certificates: NextPage = () => (
  <React.Fragment>
    <Head>
      <title>Certificates | Yash Aryan</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="px-5 md:px-32 text-gray-200">
      <CertificateSection />
    </div>
  </React.Fragment>
);

export default Certificates;
