import { NotionAPI } from "notion-client";
import { cache } from "react";

const notion = new NotionAPI();
const result = cache(async () => {
  const data = await notion.getPage("94fb31ed6ddf44f782219d9cab86948d");
  return data;
});

export default result;
