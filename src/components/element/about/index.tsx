import { classes } from '@libs/classes';
import React from 'react';

const About = () => {
  const cn = (str: string) => classes(`about-` + str);

  return <article className={cn(`container`)}>About</article>;
};

export default About;
