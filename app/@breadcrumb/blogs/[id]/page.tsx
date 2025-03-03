import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import blogs from "@/data/blogs.json";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default async function BreadcrumbSlot({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  return (
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/blogs">Blogs</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage className="capitalize">
          {blog ? blog?.title : id}
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  );
}
