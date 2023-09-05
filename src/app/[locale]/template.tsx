import NavigationBar from "@components/element/navigation";
import React from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  // const setTheme = useThemeActions();
  // useEffect(() => {
  //   const isDark =
  //     window && window.matchMedia("(prefers-color-scheme: Dark)").matches;
  //   setTheme(isDark);
  // }, []);
  return (
    <main>
      <NavigationBar />
      <section>{children}</section>
      <footer>푸터</footer>
    </main>
  );
};

export default Template;
