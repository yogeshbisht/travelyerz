"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const BrandLogo = () => {
  const router = useRouter();

  return (
    <div className="cursor-pointer">
      <Image
        onClick={() => router.push("/")}
        className="block dark:hidden"
        src="/images/logo-dark.svg"
        height="40"
        width="160"
        alt="brand logo"
      />
      <Image
        onClick={() => router.push("/")}
        className="hidden dark:block"
        src="/images/logo-light.svg"
        height="40"
        width="160"
        alt="brand logo"
      />
    </div>
  );
};

export default BrandLogo;
