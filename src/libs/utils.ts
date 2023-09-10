const BASE_URL = `http://localhost:4000`;
const API_URL = (url: string) => `${BASE_URL}/${url}`;

const IMG_URL = `${process.env.NEXT_PUBLIC_S3_URL}img`;
const THUMB_URL = `${process.env.NEXT_PUBLIC_S3_URL}thumb`;

const getStaticImage = (image: string) => {
  return new URL(`./../public/images/${image}`, import.meta.url).href;
};

export { API_URL, getStaticImage, IMG_URL, THUMB_URL };
