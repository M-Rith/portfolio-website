import React from "react";
import { ProductTypes } from "@/types/products.type";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import Link from "next/link";

interface ProductListProps {
  product: ProductTypes;
}

export default function ProductList({ product }: ProductListProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2 className="text-lg font-bold">{product.name}</h2>
          </CardTitle>
          <CardDescription>
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap gap-2 pt-2.5">
                {product.technologyStack.map((technology) => (
                  <Card
                    key={technology}
                    className="justify-center flex flex-row items-center px-3 py-1"
                  >
                    <p className="text-xs">{technology}</p>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-gray-600/80 pt-2.5">
                {product.description}
              </p>
              <div className="flex flex-row pt-2.5 items-end justify-end">
                <Link
                  className="text-sm font-bold cursor-pointer hover:underline"
                  href={`/products/${product.id}`}
                >
                  Read more &gt;
                </Link>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
