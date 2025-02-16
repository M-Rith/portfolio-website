import React from "react";
import Header from "./ui/header";
import ProductsData from "@/data/products.json";
import ProductList from "./products/productList";

export default function ProductsComponent() {
  return (
    <section id="products" className="products-section">
      <Header
        title="Products"
        description="There are list of publicly available products that I have been contributing to"
      />
      {ProductsData.map((product, index) => (
        <div
          key={product.id}
          className={`flex flex-col  ${
            index !== ProductsData.length - 1
              ? "py-3 md:py-4 lg:py-5"
              : "pt-3 md:pt-4 lg:pt-5"
          }`}
        >
          <ProductList key={product.id} product={product} />
        </div>
      ))}
    </section>
  );
}
