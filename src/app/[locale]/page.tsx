import About from "@components/element/about";
import Home from "@components/element/home";
import Portfolio from "@components/element/portfolio";
import notion from "@libs/notion";
import React from "react";

export default async function Page() {
  const data = await notion();
  return (
    <React.Fragment>
      <Home />
      <About data={data} />
      <Portfolio />
    </React.Fragment>
  );
}
