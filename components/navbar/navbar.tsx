"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const path = pathname.split("/").filter((item) => item !== "");
  console.log(path);
  const breadcrumbPage = path.map((item, index) => {
    if (index === path.length - 1) {
      return (
        <BreadcrumbPage key={item} className="capitalize">
          {item}
        </BreadcrumbPage>
      );
    }
  });

  const breadcrumbItem = path.map((item, index) => {
    if (index !== path.length - 1) {
      return (
        <div key={item} className="flex items-center gap-2">
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${item}`}>{item}</BreadcrumbLink>
          </BreadcrumbItem>
        </div>
      );
    }
  });

  return (
    <Breadcrumb className="py-2.5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {breadcrumbItem}
        {breadcrumbItem.length > 0 && <BreadcrumbSeparator />}
        {breadcrumbPage}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
