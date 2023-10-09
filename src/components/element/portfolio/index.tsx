"use client";

import Modal from "@components/common/modal";
import { WorkModalProps } from "@components/common/modal/workModal";
import WORKLISTS from "@constants/worklists";
import { classes } from "@libs/classes";
import {
  useModalActions,
  useModalDataActions,
  useModalState,
} from "@store/index";
import {
  AnimatePresence,
  Variants,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import _ from "lodash";
import Image from "next/image";
import React, { useRef, useState } from "react";

const itemVariants: Variants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.8,
    },
  },
};

//TO-DO: 작업정보를 전역상태나 useState 하나만 써서 관리해야할듯
//TO-DO: 애니메이숀 적용하기
const cn = (str: string) => classes(`portfolio-` + str);
const Portfolio = () => {
  const [filterData, setFilterData] = useState<WorkModalProps[]>(WORKLISTS);
  const [selectedData, setSelectedData] = useState<WorkModalProps>(
    WORKLISTS[0]
  );
  const [selectedType, setSelectedType] = useState<string>("");

  const onFilter = (tag?: string) => {
    const data = _.cloneDeep(WORKLISTS);
    let copyData = [];
    if (tag) {
      copyData = data.filter((item) => item.tags === tag);
      setSelectedType(tag);
    } else {
      copyData = data;
      setSelectedType("");
    }
    setFilterData(copyData);
  };
  // useEffect(() => {
  //   onFilter(selectedType);
  // }, [selectedType]);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    layoutEffect: false,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const onHover = _.debounce((data: any) => {
    setSelectedData(data);
  }, 100);
  const setModal = useModalActions();
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  // const isModalOpen = useModalState();
  const modalOpen = useModalState();
  const setModaldata = useModalDataActions();
  const onThumbClickHandler = (data: WorkModalProps) => {
    openModal();
    setModaldata(data);
  };
  return (
    <article className={cn("container")} ref={targetRef} id="work">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && <Modal handleClose={closeModal} />}
      </AnimatePresence>
      <div className={cn("wrapper")}>
        <div className={cn("header")}>
          <div className={cn("header-title")}>
            <h1>my work</h1>
          </div>
          <div className={cn("header-filter")}>
            <input
              type="radio"
              name="filter"
              id="typeAll"
              value={""}
              checked={selectedType === ""}
              onChange={(e) => onFilter(e.target.value)}
            />
            <label htmlFor="typeAll">All</label>
            <input
              type="radio"
              name="filter"
              id="typeWork"
              value={"work"}
              checked={selectedType === "work"}
              onChange={(e) => onFilter(e.target.value)}
            />
            <label htmlFor="typeWork">Work</label>
            <input
              type="radio"
              name="filter"
              id="typeHobby"
              value={"hobby"}
              checked={selectedType === "hobby"}
              onChange={(e) => onFilter(e.target.value)}
            />
            <label htmlFor="typeHobby">Hobby</label>
          </div>
        </div>
        <div className={cn("contents")}>
          <div
            className={cn("thumb")}
            onClick={() => onThumbClickHandler(selectedData!)}
          >
            {selectedData && (
              <React.Fragment>
                <div className={cn("thumb-title")}>
                  <h1>{selectedData.title}</h1>
                </div>
                <div className={cn("thumb-image")}>
                  <Image
                    width={1600}
                    height={1200}
                    src={selectedData.thumb!}
                    alt={selectedData.title}
                  />
                </div>
              </React.Fragment>
            )}
          </div>
          <motion.div
            style={{ y }}
            className={cn("item")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            {filterData.map((item, index) => (
              <motion.div
                className={cn("item-wrapper")}
                key={index}
                onMouseEnter={() => onHover(item)}
                onClick={() => onHover(item)}
                variants={itemVariants}
              >
                <div className={cn("item-title")}>{item.title}</div>
                <div className={cn("item-stack")}>
                  {item.stack.map((el, i) => (
                    <div key={i} className={cn("item-box")}>
                      {/* 함수로 빼는게 낫나? */}
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
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default Portfolio;
