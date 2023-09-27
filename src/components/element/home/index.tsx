"use client";
import { HeroImage } from "@generated/images/";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import styles from "./index.module.scss";
const cx = clsx.bind(styles);

const Home = () => {
  const cn = (str: string) => cx(`home-` + str);
  const t = useTranslations("home");
  // const { h1: H1, p } = motion;
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
    <article className={cn("container")} id="home">
      <div className={cn("images")}>
        <HeroImage />
      </div>
      <div className={cn("typography")}>
        <h1 className={cn("title")}>{t("title")}</h1>
        <p className={cn("description")}>{t("description")}</p>
        <button className={`${cn("button")} btn`}>{t("button")}</button>
      </div>
    </article>
  );
};

export default Home;
