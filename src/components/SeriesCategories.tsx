"use client";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SeriesCategories({
  categories,
}: {
  categories: { id: number; name: string }[];
}) {
  const pathname = usePathname();

  return (
    <div className="flex justify-between gap-5 w-full flex-nowrap overflow-x-scroll scrollbar-hide h-24">
      {categories.map((category: any) => (
        <Link
          href={`/series/category/${category.id}`}
          key={category.id}
          className="w-full h-24"
        >
          <Card
            className="flex flex-col items-center justify-center p-5 h-24"
            classNames={{
              base: `rounded-2xl ${
                pathname === `/series/category/${category.id}`
                  ? "bg-primary text-black"
                  : "bg-default border border-default hover:bg-primary hover:text-black"
              }`,
            }}
            fullWidth
          >
            <h3 className="text-xl font-semibold text-inherit text-wrap truncate">
              {category.name}
            </h3>
          </Card>
        </Link>
      ))}
    </div>
  );
}
