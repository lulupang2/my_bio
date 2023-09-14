import { classes } from "@libs/classes";
import { motion } from "framer-motion";
import React from "react";
type Props = {
  children: React.ReactNode;
  onClick: () => void;
};
const cn = (str: string) => classes(`backdrop-` + str);
const Backdrop = ({ children, onClick }: Props) => {
  const { div: Div } = motion;
  return (
    <Div
      className={cn("container")}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Div>
  );
};

export default Backdrop;
