import React from "react";

// importing tailwind files
import "tailwindcss/tailwind.css";
import "styles/globals.css";

// importing components
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}

export default MyApp;