import NotFound from "@/app/not-found";
import Header from "@/components/ui/header";
import TechnologyCard from "@/components/ui/technologyCard";
import ProductsData from "@/data/products.json";
import { getTechIcon } from "@/utils/techStackIcons";
import Link from "next/link";
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
  return (
    <div className="flex flex-col min-h-[80vh]">
      <Header title={product.name} description={product.longDescription} />

      <section id="technology" className="py-2.5">
        <h2 className="text-xl font-bold">Technology Stack</h2>
        <div className="flex flex-row flex-wrap gap-2 pt-2.5">
          {product.technologyStack.map((technology) => (
            <TechnologyCard key={technology} technology={technology} />
          ))}
        </div>
      </section>

      <section id="features" className="py-2.5">
        <h2 className="text-xl font-bold">Key Features</h2>
        <div className="flex flex-col">
          <ul className="list-disc pl-4">
            {product.features.map((feature) => (
              <li key={feature} className="text-sm text-[#71717A] py-1">
                <p className="text-sm text-[#71717A]">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="images" className="py-2.5">
        <h2 className="text-xl font-bold">Images</h2>
      </section>

      <section id="url" className="py-2.5">
        <h2 className="text-xl font-bold">Links to the product</h2>
        {product.url.length > 0 ? (
          <div>
            {product.url.map((url) => (
              <div
                key={url.name}
                className="flex flex-row py-1 gap-2 items-center"
              >
                {getTechIcon(url.name)}
                <Link
                  href={url.url}
                  target="_blank"
                  className="text-sm text-black"
                >
                  {url.name === "website"
                    ? "Website"
                    : url.name === "playStore"
                    ? "Play Store"
                    : url.name === "appStore"
                    ? "App Store"
                    : url.name}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[#71717A] py-1">No URLs found</p>
        )}
      </section>
    </div>
  );
}
