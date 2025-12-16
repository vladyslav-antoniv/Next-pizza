import React from "react";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  className?: string;
}

export function ProductCart({ id, name, price, imageUrl, className }: Props) {
  return (
    <div className={className}>
      <Link href="/product/1" className="">
        <div className="flex justify-center p-6 bg-secondery rounded-lg h-[269px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mt-3 mb-1 font-bold" />
        <p className="text-sm text-gray-400">
          Chicken, mozzarella, raw cheddar and parmesan cheese, cheese sauce,
          tomatoes, alfredo sauce, garlic
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            <b>{price} $</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
}
