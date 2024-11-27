import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderLogoIcon from '@public/icons/logo.svg';


export function HeaderLogo() {
  return (
    <Link
      href={"/"}
      className="relative w-[56px] md:w-[64px] aspect-[1.65] cursor-pointer block"
    >
      <Image src={HeaderLogoIcon} alt="header logo" fill />
    </Link>
  );
}
