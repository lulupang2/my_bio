"use client";

import { classes } from "@libs/classes";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const cn = (str: string) => classes(`portfolio-` + str);
const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("감지");
        }
      },
      { threshold: 1 }
    );
    observer.observe(ref.current!);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return (
    <article className={cn("container")}>
      <header className={cn("header")}>
        <div className={cn("header-title")}>
          <h1>my works</h1>
        </div>
        <div className={cn("header-filter")}>
          <button className={cn("header-filter-item")}>all</button>
          <button className={cn("header-filter-item")}>type1</button>
          <button className={cn("header-filter-item")}>type2</button>
        </div>
      </header>
      <div className={cn("contents")}>
        <div className={cn("thumb")}>
          <Image
            width={1900}
            height={1700}
            objectFit="contain"
            className={cn("thumb-image")}
            src="https://picsum.photos/1600/1200"
            alt=""
          />
        </div>

        <div className={cn("item")} ref={ref}>
          {tmp.map((item, index) => (
            <div className={cn("item-wrapper")} key={index}>
              <div className={cn("item-title")}>{item.title}</div>
              <div className={cn("item-box")}>
                {item.library.map((el, i) => (
                  <div key={i} className={cn("item-library")}>
                    {el}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Portfolio;

const tmp = [
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
  {
    title: "my works",
    library: ["react", "next", "typescript"],
  },
];
