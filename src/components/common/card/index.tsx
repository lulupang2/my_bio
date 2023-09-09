import clsx from "clsx";
const classes = (className: string) => clsx(`card-${className}`);
type CardProps = {
  // title: string;
  // desc: string;
  // icon: string[];
  // thumb: string;
  onClick?: () => void;
  [key: string]: any;
};
const Card = (props: CardProps) => {
  const { title, desc, date, img, device, onClick } = props;
  const cn = clsx({
    "card-thumb": true,
    "card-thumb-mobile": device === "mobile",
    "card-thumb-web": device === "web",
  });
  return (
    <div className={classes("container")} onClick={onClick}>
      <div className={classes("wrapper")}>
        <div className={cn}>
          <img src={`${img[0]}`} alt={title} />
        </div>
        <div>
          <h1 className={classes("title")}>{title}</h1>
          <span className={classes("date")}>{date}</span>
          <span className={classes("description")}>{desc}</span>
        </div>
        <hr />
        <div className={classes("footer")}>
          {/* {stack.map((icon: any, index: number) => (
          <React.Fragment key={index}>
            {icon === "react" && <ReactIcon className={classes("Icon")} />}
            {icon === "reactnative" && (
              <ReactnativeIcon className={classes("Icon")} />
            )}
            {icon === "nextjs" && <NextjsIcon className={classes("Icon")} />}
            {icon === "typescript" && (
              <TypescriptIcon className={classes("Icon")} />
            )}
          </React.Fragment>
        ))} */}
        </div>
      </div>
    </div>
  );
};

export default Card;
