"use client";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useSelector((state: any) => state.cart.items);
  return (
    <>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary transition-colors"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary transition-colors"
        >
          Products
        </Link>
        <Link
          href="/cart"
          className="text-sm relative font-medium text-muted-foreground hover:text-primary focus:text-primary transition-colors"
        >
          <div className="h-4 w-4 absolute left-4 flex items-center justify-center bottom-3 rounded-full bg-slate-600 text-white text-[12px]">
            {items?.length}
          </div>

          <ShoppingCart />
        </Link>
      </nav>
      <div className="md:hidden flex gap-5 items-center">
        <Link
          href="/cart"
          className="text-sm relative font-medium text-muted-foreground hover:text-primary focus:text-primary transition-colors"
        >
          <div className="h-4 w-4 absolute left-4 flex items-center justify-center bottom-3 rounded-full bg-slate-600 text-white text-[12px]">
            2
          </div>

          <ShoppingCart />
        </Link>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        {isOpen && (
          <div className="absolute top-16 right-0 z-10 w-full origin-top-right rounded-md bg-background py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Link
              href="#"
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary transition-colors"
            >
              Products
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
