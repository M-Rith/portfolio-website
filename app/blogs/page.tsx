import React from "react";
import BlogData from "@/data/blogs.json";
import BlogCard from "@/components/blogs/blog-card";
import Header from "@/components/ui/header";
import { BlogsTypes } from "@/types/blogs.type";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-[85vh]">
      <Header title="📝 Blogs" description="Here are some of my blogs" />
      {BlogData.map((blog) => {
        return (
          <div key={blog.id} className="py-3 md:py-4 lg:py-5">
            <BlogCard blog={blog as BlogsTypes} />
          </div>
        );
      })}
    </div>
  );
}
