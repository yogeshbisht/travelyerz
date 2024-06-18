"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const BrandLogo = () => {
  const router = useRouter();

  return (
    <div className="cursor-pointer">
      <Image
        onClick={() => router.push("/")}
        src="/images/logo.svg"
        height="40"
        width="160"
        alt="brand logo"
      />
    </div>
  );
};

export default BrandLogo;
