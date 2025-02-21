import React from "react";
import { ProductTypes } from "@/types/products.type";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import Link from "next/link";
import TechnologyCard from "../ui/technologyCard";

import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
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
                <TbBrandReactNative className="text-2xl text-black" />
                <RiNextjsFill className="text-2xl text-black" />
              </div>
              <p className="text-sm text-[#71717A] pt-2.5">
                {product.description}
              </p>
              <div className="flex flex-row pt-2.5 items-end justify-end">
                <Link
                  className="text-sm font-bold cursor-pointer hover:underline text-black"
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
