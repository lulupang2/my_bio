import { classes } from "@libs/classes";

const cn = (str: string) => classes(`nav-` + str);
const Topbar = () => {
  return (
    <header>
      <nav className={cn(`container`)}>머리</nav>
    </header>
  );
};

export default Topbar;
