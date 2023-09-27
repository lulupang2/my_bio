"use client";
import { classes } from "@libs/classes";
import { Variants, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { useCallback, useEffect, useRef, useState } from "react";

const cn = (str: string) => classes(`nav-` + str);

const NavigationBar = () => {
  //네비게이션
  const onMoveToElement = useCallback((id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  //테마
  const [isChecked, setIsChecked] = useState(false);
  const onClickThemeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? document.documentElement.setAttribute("data-theme", "light")
      : document.documentElement.setAttribute("data-theme", "dark");
    return setIsChecked(!isChecked);
  };

  //언어
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const onSelect = (lang: string) => {
    router.replace(pathname, { locale: lang });
    console.log("nextLocale", lang);
  };

  //애니메이션
  const { div: DIV, span: SPAN } = motion;
  const [isOpen, setIsOpen] = useState(false);
  const itemVariants: Variants = {
    open: {
      opacity: 1,

      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, transition: { duration: 0.2 } },
  };
  const langSelectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langSelectRef.current &&
        !langSelectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [langSelectRef]);
  return (
    <header>
      <nav className={cn(`container`)}>
        <div className={cn(`logo`)}>
          <a href="/">🐒</a>
        </div>

        <ul className={cn(`menu`)}>
          <li
            className={cn(`menu-item`)}
            data-set={"active"}
            onClick={() => onMoveToElement("home")}
          >
            home
          </li>
          <li
            className={cn(`menu-item`)}
            onClick={() => onMoveToElement("about")}
          >
            about
          </li>
          <li
            className={cn(`menu-item`)}
            onClick={() => onMoveToElement("portfolio")}
          >
            work
          </li>
          <li
            className={cn(`menu-item`)}
            onClick={() => onMoveToElement("contact")}
          >
            contact
          </li>
        </ul>

        <div className={cn(`action`)}>
          <DIV
            className={cn(`action-lang`)}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={langSelectRef}
          >
            <SPAN whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
              {locale.toString() === "ko" ? "한글" : "English"} 🔻
            </SPAN>
            <DIV
              className={cn(`action-lang-list`)}
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              <DIV
                variants={itemVariants}
                onClick={() => onSelect("ko")}
                onMouseEnter={() => console.log("ko")}
                className={cn(`action-lang-option`)}
              >
                한글 🇰🇷
              </DIV>
              <DIV
                variants={itemVariants}
                onClick={() => onSelect("en")}
                onMouseEnter={() => console.log("en")}
                className={cn(`action-lang-option`)}
              >
                ENGLISH 🇺🇸
              </DIV>
            </DIV>
          </DIV>
          <div className={cn(`action-theme`)}>
            <input
              type="checkbox"
              name="sw"
              id="mode"
              onChange={(e) => onClickThemeHandler(e)}
              checked={isChecked}
            />
            <label htmlFor="mode">{isChecked ? "☀️" : "🌙"}</label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
