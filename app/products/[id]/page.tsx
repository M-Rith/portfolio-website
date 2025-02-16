import React from "react";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl">{id}</h1>
    </div>
  );
}
