import Topbar from "@components/element/topbar";
import React from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Topbar />
      <section>{children}</section>
      <footer>푸터</footer>
    </main>
  );
};

export default Template;
