"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);

  return (
    <div
      onClick={handleClick}
      className={cn(
        "p-4 mb-4 min-w-40 h-40 hover:text-brand bg-white transition duration-500 cursor-pointer shadow-md hover:shadow-lg rounded-md",
        {
          "border-b-brand-dark text-brand-dark": selected,
          "border-transparent text-muted-foreground": !selected,
        }
      )}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Icon size={60} />
        <div className="font-medium">{label}</div>
      </div>
    </div>
  );
};

export default CategoryBox;
