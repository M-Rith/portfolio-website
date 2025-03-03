import React from "react";
import Link from "next/link";
export default function FooterComponent() {
  return (
    <section className="footer-section pb-10">
      <hr className="my-10  border-black" />
      <div className="flex flex-row justify-center items-center">
        <p className="text-sm text-[#71717A]">
          &copy; {new Date().getFullYear()} Huot Monirith. All rights reserved.
        </p>
      </div>
    </section>
  );
}
