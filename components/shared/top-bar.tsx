import React from "react";
import { cn } from "@/lib/utils";
import { Container, Categories, SortPopup } from ".";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
  className?: string;
}

export function TopBar({categories, className }: Props) {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className="flex justify-between items-center">
        <Categories items={categories}/>
        <SortPopup />
      </Container>
    </div>
  );
}