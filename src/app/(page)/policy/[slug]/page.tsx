/* eslint-disable @next/next/no-img-element */

export const dynamic = 'force-dynamic';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const obj: Record<string, string> = {
  "comunity-guideline": "https://p1.cdn.knky.co/articles/COMMUNITY_GUIDELINES.html",
  "terms-of-service": "https://p1.cdn.knky.co/articles/TERMS_OF_SERVICE.html"
};

export default async function ProductDetailPage({ params }: Props) {
  const slug = params.slug;
  return (
    <div className="position-relative _articles__articles-container__ky_Hc h-screen p-3 md:p-4 bg-white">
      <iframe
        src={obj[slug] as string}
        className="position-relative _articles__myIframe__s1OwR w-full h-full" spellCheck="false"
      >
        <img alt=""
          data-sentry-element="Image" data-sentry-source-file="page.tsx" loading="lazy" width="40" height="40"
          decoding="async" data-nimg="1" className="w-full h-full back-button-drop-shadow"
          src="/images/svg/back.svg" 
        />
      </iframe>
    </div>
  );
}
