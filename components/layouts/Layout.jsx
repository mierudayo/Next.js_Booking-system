import React from "react";
import Head from "next/head";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  children,
  title = "Book Best Hotels for your Holiday",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
