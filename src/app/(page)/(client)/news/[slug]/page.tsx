import { connectDB } from "@/app/api/_db";
import { Footer } from "@/components/layouts";
import { getNewsBySlug } from "@/service";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  await connectDB();

  const slug = params.slug;
  const news = await getNewsBySlug(slug);

  if (!news) return notFound();

  return (
    <>
      <div className="container-version3 mt-16">
        <div className="w-full sm:w-4/5 lg:w-2/3 mx-auto">
          <Link href={"/#News"} className="block mt-6 text-lg md:text-xl xl:text-2xl font-semibold text-[#1A1A1A]">
            ← Back to home
          </Link>
          <div className="flex flex-col justify-center mt-4 mb-3 lg:mt-6 lg:mb-4">
            <h1 className="text-[24px] md:text-[28px] xl:text-[32px] font-bold text-black">{news.title}</h1>
          </div>
          <div
            className="text-justify mb-10 [&_a]:underline [&_a]:underline-offset-2 [&_img]:mx-auto text-[#1A1A1A]"
            dangerouslySetInnerHTML={{
              __html: news.content || "",
            }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
