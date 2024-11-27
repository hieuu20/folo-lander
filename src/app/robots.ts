import { MetadataRoute } from 'next';
 
export const revalidate = 30; 

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: process.env.NEXT_PUBLIC_DOMAIN + '/sitemap.xml',
  };
}