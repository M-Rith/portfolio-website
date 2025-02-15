import React from "react";
import Header from "./ui/header";

export default function ProductsComponent() {
  return (
    <section className="products-section">
      <Header
        title="Products"
        description="There are list of publicly available products that I have been contributing to"
      />
    </section>
  );
}
