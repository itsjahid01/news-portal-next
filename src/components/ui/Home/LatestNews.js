import { getAllNews } from "@/utils/getAllNews";
import React from "react";

const LatestNews = async () => {
  const { data } = await getAllNews();
  console.log(data);
  return <div></div>;
};

export default LatestNews;
