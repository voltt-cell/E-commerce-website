import Link from "next/link";
import { Navigation } from "./Navigation";
import { Shirt } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background shadow">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2">
          <Shirt />
          <span className="text-lg font-semibold">Fashion Hub</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};
