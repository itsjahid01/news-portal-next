export const getAllCategories = async () => {
  const res = await fetch(
    "https://the-news-portal-server.vercel.app/categories",
    {
      cache: "force-cache",
    }
  );
  const categories = await res.json();
  return categories;
};
