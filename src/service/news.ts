import { INews } from "@/types/news";

export const getAllNews = async (): Promise<INews[]> => {
  const response = await fetch(process.env.API_URL + `/client/news`, {
    cache: 'no-store',
    method: 'GET',
  });

  return await response.json();
};

export const getNewsBySlug = async (slug: string): Promise<INews> => {
  const response = await fetch(process.env.API_URL + `/client/news/${slug}`, {
    cache: 'no-store',
    method: 'GET',
  });

  return await response.json();
};
