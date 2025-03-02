import React from "react";
import blogs from "@/data/blogs.json";
import BlogCard from "@/components/blogs/blog-card";
import Header from "@/components/ui/header";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-[85vh]">
      <Header title="📝 Blogs" description="Here are some of my blogs" />
      {blogs.map((blog) => (
        <div key={blog.id} className="py-3 md:py-4 lg:py-5">
          <BlogCard key={blog.id} blog={blog} />
        </div>
      ))}
    </div>
  );
}
