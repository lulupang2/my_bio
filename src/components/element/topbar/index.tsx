import { classes } from "@libs/classes";
import React from "react";

const cn = (str: string) => classes(`nav-` + str);
const Topbar = () => {
  return (
    <header>
      <nav>머리</nav>
    </header>
  );
};

export default Topbar;
