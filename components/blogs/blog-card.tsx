import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BlogsTypes } from "@/types/blogs";
import Link from "next/link";

interface BlogCardProps {
  blog: BlogsTypes;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2 className="text-lg font-bold">{blog.title}</h2>
        </CardTitle>
        <CardDescription>
          <p className="text-sm text-[#71717A] pt-2.5">{blog.content}</p>
          <div className="flex flex-row pt-2.5 items-center justify-between">
            <p className="text-sm text-black font-bold">{blog.createdAt}</p>
            <Link
              className="text-sm font-bold cursor-pointer hover:underline text-black"
              href={`/blogs/${blog.id}`}
            >
              Read more &gt;
            </Link>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
