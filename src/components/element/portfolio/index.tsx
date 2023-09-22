"use client";

import Modal from "@components/common/modal";
import { WorkModalProps } from "@components/common/modal/workModal";
import { classes } from "@libs/classes";
import { IMG_URL, THUMB_URL } from "@libs/utils";
import {
  useModalActions,
  useModalDataActions,
  useModalState,
} from "@store/index";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import _ from "lodash";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

//TO-DO: 작업정보를 전역상태나 useState 하나만 써서 관리해야할듯
//TO-DO: 섬네일 이미지 preload?
//TO-DO: 애니메이숀 적용하기
//TO-DO: stack 아이콘 추가하기
const cn = (str: string) => classes(`portfolio-` + str);
const Portfolio = () => {
  const [originData] = useState<WorkModalProps[]>(TEMP);
  const [filterData, setFilterData] = useState<WorkModalProps[]>([]);
  const [selectedData, setSelectedData] = useState<WorkModalProps>();
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    const data = _.cloneDeep(originData);
    setFilterData(data);
    setSelectedData(TEMP[0]);
  }, [originData]);
  const onFilter = (tag?: string) => {
    const data = _.cloneDeep(originData);
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
  const isModalOpen = useModalState();
  const modalOpen = useModalState();
  const setModaldata = useModalDataActions();
  const onThumbClickHandler = (data: WorkModalProps) => {
    openModal();
    setModaldata(data);
  };
  return (
    <article className={cn("container")} ref={targetRef}>
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
          <motion.div style={{ y }} className={cn("item")}>
            {filterData.map((item, index) => (
              <div
                className={cn("item-wrapper")}
                key={index}
                onMouseEnter={() => onHover(item)}
              >
                <div className={cn("item-title")}>{item.title}</div>
                <div className={cn("item-box")}>
                  {item.stack.map((el, i) => (
                    <div key={i} className={cn("item-library")}>
                      {el}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default Portfolio;

const TEMP: WorkModalProps[] = [
  {
    id: 1,
    title: "블록체인 기반 쇼핑몰 플랫폼",
    date: "2022.03~2022.04",
    members: "1명",
    tags: "work",
    desc: `React Native 기반으로 Android와 IOS 모바일 앱을 개발했습니다. 기존 출시된 모바일 어플을 디자인 리뉴얼 하는 작업이었으나 소스코드 유실로 typescript로 새로 진행`,
    stack: ["react", "reactnative", "typescript"],
    device: "mobile",
    thumb: `${THUMB_URL}/thumb_t.webp`,
    img: [
      `${IMG_URL}/t1.png`,
      `${IMG_URL}/t2.png`,
      `${IMG_URL}/t3.png`,
      `${IMG_URL}/t4.png`,
    ],
  },
  {
    id: 2,
    title: "이더리움 기반 전문 쇼핑몰 플랫폼",
    date: "2022.03~2022.04",
    members: "1명",
    tags: "work",
    desc: "React를 이용하여 관리 페이지 CMS 프론트엔드 개발 작업을 수행했습니다. REST API 기반으로 회원 관리 및 토큰 정보 관리 주문 관리 기능 등 구현",
    device: "web",
    stack: ["react"],
    thumb: `${THUMB_URL}/thumb_k.webp`,
    img: [
      `${IMG_URL}/k1.png`,
      `${IMG_URL}/k2.png`,
      `${IMG_URL}/k3.png`,
      `${IMG_URL}/k4.png`,
    ],
  },
  {
    id: 3,
    date: "(2022.09 ~ 2022.12)",
    title: "전문가 매칭 플랫폼",
    tags: "work",
    device: "web",
    members: "3명",
    desc: `
    전문가 매칭 플랫폼 전문가들의 여러 분야에서 매칭 가능하도록 개발된 플랫폼
`,
    thumb: `${THUMB_URL}/thumb_w.webp`,
    stack: ["react", "nextjs", "typescript"],
    img: [
      `${IMG_URL}/w1.png`,
      `${IMG_URL}/w2.png`,
      `${IMG_URL}/w3.png`,
      `${IMG_URL}/w4.png`,
    ],
  },
  {
    id: 4,
    title: "와이파이 단말기 보상 어플리케이션",
    date: "(2022.06 ~ 2022.09)",
    tags: "work",
    device: "mobile",
    members: "1명",
    desc: `공공 와이파이 단말기 접속 보상 어플리케이션
    전국에 배치된 공공와이파이 단말기에 접속
    캡티브 포탈에서 나오는 쿠폰을 공공팡
어플리케이션에 등록후 보상을 지급받는 리액트 네이티브 어플리케이션
    `,
    stack: ["react", "nextjs"],
    thumb: `${THUMB_URL}/thumb_g.webp`,
    img: [
      `${IMG_URL}/g1.png`,
      `${IMG_URL}/g2.png`,
      `${IMG_URL}/g3.png`,
      `${IMG_URL}/g4.png`,
    ],
  },
  {
    id: 5,
    title: "NFT 기반 콘서트 예약 플랫폼",
    date: "(2022.11 ~ 2022.12)",
    device: "mobile",
    members: `고객사측에서 서버,기획,디자인 작업
    회사 내부 프론트엔드 개발자 3명`,
    tags: "hobby",
    thumb: `${THUMB_URL}/thumb_b.webp`,

    desc: `
    고객사측에서 초반 설정 및 프로젝트가 어느정도 진행된 상태로 넘어온 케이스
    Cordova로 웹뷰 부분 프론트 작업으로 들어갔으나 예상 외로 작업량이 많아져서 긴급투입
    aws cognito 엑세스 토큰을 context api로 고객사에서 이미 세팅이 되어있어서
    provider를 사용하지 않는 zustand로 최근 검색어 등의 전역상태 및 로컬스토리지 관리
    aws s3, cloudfront,git PR관리`,
    stack: ["react", "typescript"],
    img: [
      `${IMG_URL}/b1.png`,
      `${IMG_URL}/b2.png`,
      `${IMG_URL}/b3.png`,
      `${IMG_URL}/b4.png`,
      `${IMG_URL}/b5.png`,
      `${IMG_URL}/b6.png`,
      `${IMG_URL}/b7.png`,
    ],
  },
];
