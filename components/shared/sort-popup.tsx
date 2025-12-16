import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface SortPopupProps {
  className?: string;
}

export function SortPopup({ className }: SortPopupProps) {
  return (
    <div className={cn('inline-flex item-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer', className)}>
      <ArrowUpDown size={16} />
      <b>Sort:</b>
      <b className="text-primary">popular</b>
    </div>
  );
}