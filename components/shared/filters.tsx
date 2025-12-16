import React from "react";
import { cn } from "@/lib/utils";
import { Title, FilterCheckbox, CheckboxFiltersGroup} from "./";
import { RangeSlider } from "../ui";

interface Props {
  className?: string;
}

export function Filters({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can be collected" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pd-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <input
            type="number"
            placeholder="0"
            min={0}
            max={100}
            defaultValue={0}
          />
          <input
            type="number"
            placeholder="100"
            min={0}
            max={100}
            defaultValue={100}
          />
        </div>
        <RangeSlider min={0} max={100} step={1} value={[0, 100]} />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={5}
        defaultItems={[
          {
            text: "Cheese sauce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Salted cucumbers",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Cheese sauce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Salted cucumbers",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
      />
    </div>
  );
}
