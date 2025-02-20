import NotFound from "@/app/not-found";
import Title from "@/components/ui/title";
import ProductsData from "@/data/products.json";
import React from "react";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = ProductsData.find((product) => product.id === Number(id));

  if (!product) {
    return <NotFound />;
  }

  console.log(product);

  return (
    <div className="flex flex-col">
      <Title title={product.name} description={product.longDescription} />
    </div>
  );
}
