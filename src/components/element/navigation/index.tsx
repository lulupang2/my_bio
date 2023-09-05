import { classes } from "@libs/classes";
import { useThemeStore } from "@store/index";
import { Variants, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useEffect, useRef, useState, useTransition } from "react";

const cn = (str: string) => classes(`nav-` + str);

const NavigationBar = () => {
  //테마
  const { theme, setTheme } = useThemeStore((state) => state);
  const onThemeChangeHandler = () => {
    setTheme(!theme);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? document.documentElement.setAttribute("data-theme", "light")
      : document.documentElement.setAttribute("data-theme", "dark");
  };

  //언어
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  const { ul: UL, li: LI, div: DIV, button: BUTTON } = motion;
  const [isOpen, setIsOpen] = useState(false);
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
  return (
    <header>
      <nav className={cn(`container`)}>
        <div className={cn(`logo`)}>
          <a href="/">🐒</a>
        </div>

        <ul className={cn(`menu`)}>
          <li className={cn(`menu-item`)} data-set={"active"}>
            <a href="/#home">home</a>
          </li>
          <li className={cn(`menu-item`)}>
            <a href="/#about">about</a>
          </li>
          <li className={cn(`menu-item`)}>
            <a href="/#work">work</a>
          </li>
          <li className={cn(`menu-item`)}>
            <a href="/#contact">contact</a>
          </li>
        </ul>

        <div className={cn(`action`)}>
          <DIV
            className={cn(`action-lang`)}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={ref}
          >
            <BUTTON
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen.toString()}
              <DIV
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
              ></DIV>
            </BUTTON>
            <UL
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
              <LI variants={itemVariants}>ENGLISH🇺🇸</LI>
              <LI variants={itemVariants}>한글🇰🇷</LI>
            </UL>
          </DIV>
          <div className={cn(`action-theme`)}>
            <input type="checkbox" name="sw" id="mode" onChange={onChange} />
            <label htmlFor="mode">☀️🌙</label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
