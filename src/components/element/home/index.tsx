"use client";
import React from "react";
import clsx from "clsx";
import { HeroImage } from "@generated/images/myImages";
import { classes } from "@libs/classes";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const cn = (str: string) => classes(`home-` + str);

const Home = () => {
  const t = useTranslations("home");
  const { h1: H1, p } = motion;
  if (typeof document !== "undefined") {
    console.count("check render");

    document
      .querySelectorAll(".btn")
      .forEach(
        (button) =>
          (button.innerHTML =
            "<div class=home-button-contents><span>" +
            button.textContent?.split("").join("</span><span>") +
            "</span></div>")
      );
  }

  return (
    <article className={cn("container")}>
      <div className={cn("images")}>
        <HeroImage />
      </div>
      <div className={cn("typography")}>
        <H1 className={cn("title")}>{t("title")}</H1>
        <p className={cn("description")}>{t("description")}</p>
        <button className={`${cn("button")} btn`}>{t("button")}</button>
      </div>
    </article>
  );
};

export default Home;
