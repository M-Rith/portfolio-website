import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/ui/header";
import ProductsData from "@/data/products.json";
import ProductList from "./products/productList";

export default function ProductsComponent() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="products"
      className="products-section"
    >
      <Header
        title="Products"
        description="There are list of publicly available products that I have been contributing to"
      />
      {ProductsData.map((product, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          key={product.id}
          className={`flex flex-col  ${
            index !== ProductsData.length - 1
              ? "py-3 md:py-4 lg:py-5"
              : "pt-3 md:pt-4 lg:pt-5"
          }`}
        >
          <ProductList key={product.id} product={product} />
        </motion.div>
      ))}
    </motion.section>
  );
}
