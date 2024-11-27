import { MetadataRoute } from 'next';


export const revalidate = 10;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: process.env.NEXT_PUBLIC_DOMAIN + '/',
      lastModified: '2024-11-06T03:37:18.471Z'
    },
  ];
}
