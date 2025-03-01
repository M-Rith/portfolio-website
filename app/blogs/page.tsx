import React from "react";
import blogs from "@/data/blogs.json";
import Link from "next/link";
export default function BlogPage() {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>

          <Link href={`/blogs/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
