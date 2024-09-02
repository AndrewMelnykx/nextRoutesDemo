// components/Layout.js

import Head from "next/head";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch("http://localhost:3001/products", {
    cache: "no-store",
  });
  const products = await response.json();
  console.log(products);
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </div>
  );
}
