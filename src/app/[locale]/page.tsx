import About from "@components/element/about";
import Home from "@components/element/home";
import Portfolio from "@components/element/portfolio";
import notion from "@libs/notion";
import clsx from "clsx";
import React from "react";

export default async function Page() {
  const data = await notion();
  return (
    <React.Fragment>
      <Home />
      <About data={data} />
      <Portfolio />
      <ETC />
    </React.Fragment>
  );
}

const ETC = () => {
  const cn = (str: string) => clsx(`ETC-` + str);
  return (
    <article className={cn(`container`)} id="ETC">
      <span className={cn(`title`)}>감사합니다 :) </span>
    </article>
  );
};
