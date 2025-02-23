import React from "react";
import Link from "next/link";
import Image from "next/image";
import notFoundImage from "@/public/notFound.svg";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <div className="flex flex-col h-[80vh] items-center justify-center">
      <Image src={notFoundImage} alt="404" className="w-1/2 " />
      <h1 className="text-3xl font-bold">Page Not Found</h1>

      <p className="text-md text-gray-600 pb-5">
        The page you are looking for does not exist.
      </p>

      <Button variant="outline" className="text-md text-gray-600">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
