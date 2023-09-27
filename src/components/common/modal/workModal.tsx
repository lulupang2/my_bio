import { classes } from "@libs/classes";
import { useModalData } from "@store/index";
import Carousel from "../carousel";
import Image from "next/image";

export type WorkModalProps = {
  id: number;
  date: string;
  title: string;
  tags: string;
  device: string;
  desc: string;
  thumb: string;
  members: string;
  stack: string[];
  img: string[];
};
const cn = (str: string) => classes(`modal-` + str);

const WorkModal = ({ close }: { close: () => void }) => {
  const { date, title, members, device, desc, thumb, stack, img } =
    useModalData();

  return (
    <>
      <img
        className={cn(`close`)}
        src="/images/closeIcon.svg"
        alt="close icon"
        onClick={close}
      />
      <div className={cn(`imgs`)}>
        <Carousel imgs={img} thumb={thumb} />
      </div>
      <div className={cn(`contents`)}>
        <div className={cn(`contents-title`)}>
          <span className={cn(`contents-title-text`)}>{title}</span>
          <span className={cn(`contents-label`)}>설명</span>
          <span className={cn(`contents-title-desc`)}>{desc}</span>
        </div>
        <div className={cn(`contents-date`)}>
          <span className={cn(`contents-label`)}>Date</span>
          <span className={cn(`contents-text`)}>{date}</span>
        </div>
        <div className={cn(`contents-members`)}>
          <span className={cn(`contents-label`)}>Members</span>
          <span className={cn(`contents-text`)}>{members}</span>
        </div>
        <div className={cn(`contents-device`)}>
          <span className={cn(`contents-label`)}>Device</span>
          <span className={cn(`contents-text`)}>{device}</span>
        </div>
        <div className={cn(`contents-stack`)}>
          <span className={cn(`contents-label`)}>FrameWork</span>
          <span className={cn(`contents-text`)}>
            {stack.map((el) => (
              <>
                {el === "react" && (
                  <Image
                    src="/icons/React.svg"
                    alt="react logo icon"
                    width={50}
                    height={50}
                  />
                )}
                {el === "reactnative" && (
                  <Image
                    src="/icons/ReactNative.svg"
                    alt="react native logo icon"
                    width={50}
                    height={50}
                  />
                )}
                {el === "nextjs" && (
                  <Image
                    src="/icons/Next.js.svg"
                    alt="nextjs logo icon"
                    width={50}
                    height={50}
                  />
                )}
                {el === "chakra" && (
                  <Image
                    src="/icons/Chakra.svg"
                    alt="chakra ui logo icon"
                    width={50}
                    height={50}
                  />
                )}
                {el === "scss" && (
                  <Image
                    src="/icons/Sass.svg"
                    alt="sass logo icon"
                    width={50}
                    height={50}
                  />
                )}
                {el === "javascript" && (
                  <Image
                    src="/icons/JavaScript.svg"
                    alt="javacript logo icon"
                    width={50}
                    height={50}
                  />
                )}
                {el === "typescript" && (
                  <Image
                    src="/icons/TypeScript.svg"
                    alt="typescript logo icon"
                    width={50}
                    height={50}
                  />
                )}
              </>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};
export default WorkModal;
