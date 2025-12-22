"use client";

import { cn } from "@/lib/utils";
import { Title, CheckboxFiltersGroup } from "./";
import { RangeSlider } from "../ui";
import { useIngredients } from "@/hooks/use-ingredients";
import { useFilters } from "@/hooks/use-filters";
import { useQueryFilters } from "@/hooks/use-query-filters";

interface Props {
  className?: string;
}

export function Filters({ className }: Props) {
  const {ingredients, loading} = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (price: number[]) => {
    filters.setPrices('priceFrom', price[0]);
    filters.setPrices('priceTo', price[1]);
  }

  return (
    <div className={cn("", className)}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          title="pizzaType"
          name="Type of dough"
          className="mt-5"
          selected={filters.pizzaTypes}
          onClickCheckbox={filters.setPizzaTypes}
          items={[
            { text: "Thin", value: "1" },
            { text: "Traditional", value: "2" },
          ]}
        />

        <CheckboxFiltersGroup
          title="Sizes"
          name="sizes"
          className="mt-5"
          selected={filters.sizes}
          onClickCheckbox={filters.setSizes}
          items={[
            { text: "20cm", value: "20" },
            { text: "30cm", value: "30" },
            { text: "40cm", value: "40" },
          ]}
        />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pd-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <input
            type="number"
            placeholder="0"
            min={0}
            max={100}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrices("priceFrom", Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="100"
            min={0}
            max={100}
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 100]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        name="ingredients"
        className="mt-5"
        limit={5}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
}
