import React from "react";
import { cn } from "@/lib/utils";
import { Container, Categories, SortPopup } from ".";

interface Props {
  className?: string;
}

export function TopBar({ className }: Props) {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className="flex justify-between items-center">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
}