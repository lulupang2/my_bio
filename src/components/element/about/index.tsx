"use client";
import { AboutImage } from "@generated/images";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./index.module.scss";

const cx = clsx.bind(styles);
const About = () => {
  const { div: Div } = motion;
  const observerRef = useRef(null);
  const isInView = useInView(observerRef);
  const cn = (str: string) => cx(`about-` + str);
  const imageStyle = clsx({
    [cn("image")]: true,
    [cn("image-hidden")]: !isInView,
  });

  return (
    <article className={cn(`container`)}>
      <div className={cn(`contents`)}>
        <div className={cn(`wrapper`)}>
          <h1>
            <span>About</span> us
          </h1>
          <h3>
            Web <span>Developer</span>
          </h3>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga maxime
          saepe repellat nemo nobis odit quibusdam repellendus recusandae. Fuga,
          nam. Doloribus a autem quas odio quisquam nulla! Mollitia, nisi
          eligendi.
        </p>
        <p>
          2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          maxime saepe repellat nemo nobis odit quibusdam repellendus
          recusandae. Fuga, nam. Doloribus a autem quas odio quisquam nulla!
          Mollitia, nisi eligendi.
        </p>
        <p>
          3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          maxime saepe repellat nemo nobis odit quibusdam repellendus
          recusandae. Fuga, nam. Doloribus a autem quas odio quisquam nulla!
          Mollitia, nisi eligendi.
        </p>
        <p ref={observerRef}>
          4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          maxime saepe repellat nemo nobis odit quibusdam repellendus
          recusandae. Fuga, nam. Doloribus a autem quas odio quisquam nulla!
          Mollitia, nisi eligendi.
        </p>
      </div>
      <div className={cn(`images`)}>
        <div className={imageStyle}>
          <AboutImage />
        </div>
      </div>
    </article>
  );
};

export default About;
