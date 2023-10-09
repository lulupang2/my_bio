"use client";
import clsx from "clsx";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

const About = ({ data }: any) => {
  // const observerRef = useRef(null);
  // const isInView = useInView(observerRef);
  const cn = (str: string) => clsx(`about-` + str);

  return (
    <article className={cn(`container`)} id="about">
      <NotionRenderer recordMap={data} fullPage disableHeader />
    </article>
  );
};

export default About;
