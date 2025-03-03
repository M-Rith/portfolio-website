import NotFound from "@/app/not-found";
import Header from "@/components/ui/header";
import TechnologyCard from "@/components/ui/technologyCard";
import ProductsData from "@/data/products.json";
import { getTechIcon } from "@/utils/techStackIcons";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  return ProductsData.map((product) => ({
    id: product.id.toString(),
  }));
}
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
    <div className="flex flex-col min-h-[85vh]">
      <Header title={product.name} description={product.longDescription} />

      <section id="technology" className="py-2.5">
        <Header
          title="🚀 Technology Stack"
          description="🛠️ Cutting-edge tools powering this project to success!"
        />
        <div className="flex flex-row flex-wrap gap-2 pt-2.5">
          {product.technologyStack.map((technology) => (
            <TechnologyCard key={technology} technology={technology} />
          ))}
        </div>
      </section>

      <section id="features" className="py-2.5">
        <Header
          title="⚡ Key Features"
          description="✨ Key features for performance, ease, and innovation"
        />

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

      {/* <section id="images" className="py-2.5">
        <Header
          title="📷 Screenshots"
          description="🔎 Click on an image to view it in full size."
        />

        {product.images.length > 0 ? (
          product.images.map((image, index) => (
            <div key={index} className="flex flex-col py-2.5">
              <ZoomImage image={image.url} description={image.name} />
              <p className="text-sm text-black font-bold">{image.name}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-[#71717A] py-1">No images found</p>
        )}
      </section> */}

      <section id="url" className="py-2.5">
        <h2 className="text-xl font-bold">Find It On</h2>
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
          <p className="text-sm text-black py-1">No URLs found</p>
        )}
      </section>
    </div>
  );
}
