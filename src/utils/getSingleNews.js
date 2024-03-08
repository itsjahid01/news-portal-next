export const getSingleNews = async (newsId) => {
  const res = await fetch(
    `https://the-news-portal-server.vercel.app/news/${newsId}`
  );
  const singleNews = await res.json();
  return singleNews;
};
