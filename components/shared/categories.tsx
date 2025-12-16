"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Pizzas" },
  { id: 2, name: "Combos" },
  { id: 3, name: "Appetizers" },
  { id: 4, name: "Cocktails" },
  { id: 5, name: "Coffee" },
  { id: 6, name: "Beverages" },
  { id: 7, name: "Desserts" },
  { id: 8, name: "Desserts" },
];

export function Categories({ className }: Props) {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map(({id, name}, index) => (
        <a
          className={cn(
            "flex items-center font-bold px-5 rounded-2xl h-11",
            categoryActiveId === index +1 &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
}
