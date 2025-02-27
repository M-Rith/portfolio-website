"use client";
import React from "react";
import Image from "next/image";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import LightGallery from "lightgallery/react";
interface ZoomImageProps {
  image: string;
  width?: number;
  height?: number;
  description: string;
}

export default function ZoomImage({
  image,
  width = 400,
  height = 200,
  description,
}: ZoomImageProps) {
  return (
    <div>
      <LightGallery>
        <a href={image}>
          <Image
            src={image}
            alt={description}
            width={width}
            height={height}
            quality={100}
          />
        </a>
      </LightGallery>
    </div>
  );
}
