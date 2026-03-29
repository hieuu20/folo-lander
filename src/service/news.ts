import { INews } from "@/types/news";

export const getAllNews = async (): Promise<INews[]> => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/client/news`,
      {
        next: { revalidate: 300 },
        method: "GET",
      }
    );

    return await response.json();
  } catch (err) {
    console.log({ err });
    return [];
  }
};

export const getNewsBySlug = async (slug: string): Promise<INews> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/client/news/${slug}`,
    {
      next: { revalidate: 300 },
      method: "GET",
    }
  );

  return await response.json();
};
