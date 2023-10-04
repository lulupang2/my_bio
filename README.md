## portfolio page

# 배포주소

[bio.jisung.pro](https://bio.jisung.pro)

#### TODO-LIST

- [ ] 기획
- [x] 전체 레이아웃
- [x] 색상,폰트 변수처리
- [ ] header navigation
  > 그.. 아이콘이나 자잘한거 버튼 처리 남음
- [x] home section
- [x] about section
- [ ] portfolio section
  > modal처리 , 인터렉션 애니메이션 처리, 등등
- [ ] skill? section
  > 안할듯?
- [ ] 다중언어 처리
  > 안할거같은데.. 셋업한김에 작동하는지만 구현
- [x] 배포

```
├── messages        -- [다중언어(next intl)파일 처리]  -> contants폴더로 상수처리하는것도 괜찮을듯
├── public          -- [정적파일 폴더]
|  └── images
└── src
   ├── app
   |  └── [locale]  -- [메인페이지 라우팅]
   ├── components
   |  ├── common    -- [공용 컴포넌트]
   |  └── element   -- [섹션별 컴포넌트]
   |     ├── about
   |     ├── home
   |     ├── portfolio
   |     └── navigation
   ├── generated    -- [tsx파일로 변환작업 된 이미지 외]
   |  └── images
   ├── libs         -- [외부 함수처리] -> utils로 변경?
   ├── styles       -- [scss 스타일시트 폴더]
   |  ├── base      -- [디폴트(베이스) 스타일]
   |  ├── components-- [컴포넌트 스타일]
   |  ├── layouts   -- [레이아웃 스타일]
   |  ├── pages     -- [페이지(섹션) 스타일]
   |  └── vendor    -- [외부 라이브러리 스타일]
   └── store        -- [zustand 전역 상태처리]
```
