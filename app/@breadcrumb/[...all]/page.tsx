import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import type { ReactElement } from "react";
import blogs from "@/data/blogs.json";
import products from "@/data/products.json";

export async function generateStaticParams() {
  const paths = [
    // Add paths for blogs
    ...blogs.map((blog) => ({
      all: ["blogs", blog.id.toString()],
    })),
    // Add paths for products
    ...products.map((product) => ({
      all: ["products", product.id.toString()],
    })),
    // Add other static paths
    { all: ["blogs"] },
    { all: ["products"] },
    { all: ["faq"] },
  ];

  return paths;
}

export default async function BreadcrumbSlot(props: {
  params: Promise<{ all: string[] }>;
}) {
  const params = await props.params;
  const breadcrumbItems: ReactElement[] = [];
  let breadcrumbPage: ReactElement = <></>;
  for (let i = 0; i < params.all.length; i++) {
    const route = params.all[i];
    const href = `/${params.all.at(0)}/${route}`;
    if (i === params.all.length - 1) {
      breadcrumbPage = (
        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize">{route}</BreadcrumbPage>
        </BreadcrumbItem>
      );
    } else {
      breadcrumbItems.push(
        <React.Fragment key={href}>
          <BreadcrumbItem>
            <BreadcrumbLink href={href} className="capitalize">
              {route}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </React.Fragment>
      );
    }
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbItems}
        <BreadcrumbSeparator />
        {breadcrumbPage}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
