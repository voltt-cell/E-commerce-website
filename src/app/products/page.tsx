import { ProductCard } from "@/components/global/ProductCard";
import { getProducts } from "@/lib/products";

export default async function Page() {
  const data = await getProducts();
  return (
    <main className="flex-1 bg-muted">
      <div className="container mx-auto grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-6">
        {data.map((product: any, index: number) => {
          return (
            <ProductCard
              key={index}
              id={product?.id}
              image={product?.images[0]}
              title={product.title}
              price={product?.price}
            />
          );
        })}
      </div>
    </main>
  );
}
