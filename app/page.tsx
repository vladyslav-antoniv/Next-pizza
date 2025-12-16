import {
  Container,
  Title,
  TopBar,
  Filters,
  ProductCart,
} from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function HomePage() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                items={[
                  {
                    id: 0,
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F40498%2Fconversions%2Ftext-optimized.jpg&w=384&q=75",
                    name: "Pepperoni Pizza",
                    price: 12,
                    items: [{ price: 12 }],
                  },
                  {
                    id: 1,
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F55274%2Fconversions%2Ftext-optimized.jpg&w=384&q=75",
                    name: "Margherita Pizza",
                    price: 10,
                    items: [{ price: 10 }],
                  },
                  {
                    id: 2,
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41893%2Fconversions%2Ftext-optimized.jpg&w=384&q=75",
                    name: "BBQ Chicken Pizza",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 3,
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F40498%2Fconversions%2Ftext-optimized.jpg&w=384&q=75",
                    name: "Pepperoni Pizza",
                    price: 12,
                    items: [{ price: 12 }],
                  },
                  {
                    id: 4,
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F55274%2Fconversions%2Ftext-optimized.jpg&w=384&q=75",
                    name: "Margherita Pizza",
                    price: 10,
                    items: [{ price: 10 }],
                  },
                  {
                    id: 5,
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41893%2Fconversions%2Ftext-optimized.jpg&w=384&q=75",
                    name: "BBQ Chicken Pizza",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                ]}
                categoryId={1}
              />

              {/* Combos (categoryId 1) */}
              <ProductsGroupList
                title="Combos"
                items={[
                  {
                    id: 6,
                    name: "Perfect Combo",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F40498%2Fconversions%2Ftext-optimized.jpg&w=384&q=75",
                    price: 19,
                    items: [{ price: 19 }],
                  },
                  {
                    id: 7,
                    name: "Hot Deal",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F55274%2Fconversions%2Ftext-optimized.jpg&w=384&q=75",
                    price: 22,
                    items: [{ price: 22 }],
                  },
                  {
                    id: 8,
                    name: "Friends Set",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41893%2Fconversions%2Ftext-optimized.jpg&w=384&q=75",
                    price: 30,
                    items: [{ price: 30 }],
                  },
                ]}
                categoryId={2}
              />

              {/* Appetizers (categoryId 2) */}
              <ProductsGroupList
                title="Appetizers"
                items={[
                  {
                    id: 9,
                    name: "Chicken Nuggets",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F40498%2Fconversions%2Ftext-optimized.jpg&w=384&q=75",
                    price: 6,
                    items: [{ price: 6 }],
                  },
                  {
                    id: 10,
                    name: "Potato Wedges",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F55274%2Fconversions%2Ftext-optimized.jpg&w=384&q=75",
                    price: 4,
                    items: [{ price: 4 }],
                  },
                  {
                    id: 11,
                    name: "Cheese Snacks",
                    imageUrl:
                      "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41893%2Fconversions%2Ftext-optimized.jpg&w=384&q=75",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
