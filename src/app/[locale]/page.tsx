import About from "@components/element/about";
import Home from "@components/element/home";
import Portfolio from "@components/element/portfolio";
import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Portfolio />
    </React.Fragment>
  );
}
