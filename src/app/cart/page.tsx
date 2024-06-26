"use client";
import { ProductCard } from "@/components/global/ProductCard";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/products";
import { CreditCard } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";

const Page = () => {
  const items = useSelector((state: any) => state.cart.items);
  const { data, isLoading } = useSWR("/products", () => getProducts());
  const itemsData = data?.filter((item: any) => items?.includes(item.id));
  return (
    <div className="min-h-[80vh]">
      <div className="container mx-auto grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-6">
        {itemsData?.map((product: any, index: number) => {
          return (
            <ProductCard
              key={index}
              id={product?.id}
              image={product?.images[0]}
              title={product.title}
              price={product?.price}
              cart={true}
            />
          );
        })}
      </div>
      <div className="w-full flex flex-col p-5">
        Total : $
        {itemsData?.reduce((acc: number, item: any) => acc + item.price, 0)}
        <Button variant={"outline"} className="gap-2 w-[200px]">
          Pay <CreditCard />
        </Button>
      </div>
    </div>
  );
};

export default Page;
