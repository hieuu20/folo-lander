import Link from "next/link";
import Image from "next/image";
import notFoundImage from '@public/images/404.jpg';
import { Button } from "@mantine/core";

export default async function Custom404() {
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col gap-5">
      <div className="relative w-[50%] lg:w-[30%]">
        <Image
          src={notFoundImage}
          className="w-full h-auto"
          alt="Not found image"
        />
      </div>
      <div className="text-center text-gray-600 font-semibold text-2xl">
        Oops! page not found 😢
      </div>
      <Button
        className={`w-[160px] md:w-[200px] font-semibold h-[48px] first-letter bg-black text-white mr-2 md:mr-6 rounded-none`}
      >
        <Link href={'/'}>
          Back to home
        </Link>
      </Button>
    </div>
  );
}
