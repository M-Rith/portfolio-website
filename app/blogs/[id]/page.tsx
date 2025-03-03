import React from "react";
import Header from "@/components/ui/header";
import BlogsData from "@/data/blogs.json";
import NotFound from "@/app/not-found";
import { splitTextWithHighlights } from "@/utils/textHighlighter";

export async function generateStaticParams() {
  return BlogsData.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default async function BlogsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = BlogsData.find((blog) => blog.id === Number(id));
  if (!blog) {
    return <NotFound />;
  }

  const HighlightedText = ({
    text,
    highlights,
  }: {
    text: string;
    highlights?: string[];
  }) => {
    const segments = splitTextWithHighlights(text, highlights);

    return (
      <>
        {segments.map(({ segment, isHighlighted }, index) =>
          isHighlighted ? (
            <strong className="text-black" key={index}>
              {segment}
            </strong>
          ) : (
            <span key={index}>{segment}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-[80vh]">
      <Header title={blog.title} description={blog.createdAt} />

      <div className="flex flex-col pt-2.5">
        {blog.content.map((content, index) => (
          <div key={index} className="py-2.5">
            {content.type === "paragraph" && (
              <p className="text-sm text-[#71717A]">
                <HighlightedText
                  text={content.content as string}
                  highlights={content.highlights}
                />
              </p>
            )}
            {content.type === "subtitle" && (
              <h2 className="text-lg font-bold">
                <HighlightedText
                  text={content.content as string}
                  highlights={content.highlights}
                />
              </h2>
            )}
            {content.type === "list" && (
              <ul className="list-disc list-inside">
                {Array.isArray(content.content) ? (
                  content.content.map((item, index) => (
                    <li key={index} className="text-sm text-[#71717A] py-1">
                      <HighlightedText
                        text={item}
                        highlights={content.highlights}
                      />
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-[#71717A]">
                    <HighlightedText
                      text={content.content as string}
                      highlights={content.highlights}
                    />
                  </li>
                )}
              </ul>
            )}
            {content.type === "end" && (
              <p className="text-sm text-black font-bold flex flex-row justify-end py-5">
                <HighlightedText
                  text={content.content as string}
                  highlights={content.highlights}
                />
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
