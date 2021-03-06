import React, { useEffect } from "react";
import Head from "next/head";
import { NextPage } from "next";

import * as gtag from "../lib/gtag";

// // importing components
import DesignSection from "../components/designs/DesignSection";

const Designs: NextPage = () => {
  useEffect(() => {
    gtag.event({
      action: "page_visited",
      category: "Page Visit",
      label: "Page visited",
      value: "Designs",
    });
  });
  return (
    <React.Fragment>
      <Head>
        <title>Designs | Yash Aryan</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="px-5 md:px-20 lg:px-32 text-gray-200">
        {false ? (
          <DesignSection />
        ) : (
          <div className="min-h-64">
            <p className="pt-20 pb-48 my-20 text-3xl">
              This page isn&apos;t complete yet
            </p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Designs;
