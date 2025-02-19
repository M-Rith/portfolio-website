import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/ui/header";
import ProductsData from "@/data/products.json";
import ProductList from "./products/productList";

export default function ProductsComponent() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.5 }}
      id="products"
      className="products-section"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <Header
          title="Products"
          description="Here is a list of publicly available products that I have contributed to"
        />
      </motion.div>
      {ProductsData.map((product, index) => (
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          key={product.id}
          className={`flex flex-col ${
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
