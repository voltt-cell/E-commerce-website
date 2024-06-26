"use client";
import { addItem } from "@/features/cart/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import Link from "next/link";

export const ProductCard = ({
  id,
  image,
  title,
  price,
  cart,
}: {
  id: number;
  image: string;
  title: string;
  price: number;
  cart?: boolean;
}) => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.items);

  const handleAddToCart = (product: any) => {
    dispatch(addItem(product));
  };
  return (
    <div className="relative overflow-hidden rounded-lg group transition-all duration-300 ease-in-out bg-white transform hover:-translate-y-2 hover:shadow-xl">
      <img
        src={image}
        alt="Mens Cotton Jacket"
        width={400}
        height={300}
        className="object-cover w-full h-60 transition-all duration-300 ease-in-out transform group-hover:scale-105"
      />
      <div className="p-4 bg-background flex flex-col justify-between h-[200px] ">
        <div>
          <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
          <h4 className="text-base font-semibold md:text-lg">${price}</h4>
        </div>
        {!cart &&
          (items.includes(id) ? (
            <Link
              href={"/cart"}
              className="mt-2 w-full flex justify-center border rounded-lg py-2 text-[14px] font-semibold text-gray-600"
            >
              View Cart
            </Link>
          ) : (
            <Button
              onClick={() => {
                handleAddToCart(id);
              }}
              variant="outline"
              className="mt-2 w-full"
            >
              Add to Cart
            </Button>
          ))}
      </div>
    </div>
  );
};
