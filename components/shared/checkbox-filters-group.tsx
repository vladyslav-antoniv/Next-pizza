"use client";

import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Filter } from "lucide-react";
import { Input, Skeleton } from "../ui";

type Item = FilterChecboxProps;

interface CheckboxFiltersGroupProps {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchImputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultVelues?: string[];
  selected?: Set<string>;
  className?: string;
  name: string;
}

export function CheckboxFiltersGroup({
  title,
  items,
  defaultItems,
  limit = 5,
  searchImputPlaceholder = "Search...",
  onClickCheckbox,
  defaultVelues,
  loading,
  selected,
  name,
  className,
}: CheckboxFiltersGroupProps) {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

if (loading) {
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      <Skeleton className="h-6 mb-4 rounded-[8px]"/>
      <Skeleton className="h-6 mb-4 rounded-[8px]"/>
      <Skeleton className="h-6 mb-4 rounded-[8px]"/>
      <Skeleton className="h-6 mb-4 rounded-[8px]"/>
      <Skeleton className="h-6 mb-4 rounded-[8px]"/>
      <Skeleton className="h-6 mb-4 w-[28px] rounded-[8px]"/>

    </div>
  )
}

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchImputPlaceholder}
            className="bg-gray-50 border-none"
            value={searchValue}
            onChange={onChangeSearchInput}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            checked={selected?.has(item.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            className="mt-4 text-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show less" : `Show all (${items.length})`}
          </button>
        </div>
      )}
    </div>
  );
}
