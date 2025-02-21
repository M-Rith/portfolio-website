import React from "react";

export default function FooterComponent() {
  return (
    <section className="footer-section pb-5">
      <div className="flex flex-row justify-center items-center">
        <p className="text-sm text-[#71717A]">
          &copy; {new Date().getFullYear()} Huot Monirith. All rights reserved.
        </p>
      </div>
    </section>
  );
}
