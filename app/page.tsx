"use client";
import EducationComponent from "@/components/education";
import ExperienceComponent from "@/components/experiences";
import ProductsComponent from "@/components/products";
import FooterComponent from "@/components/footer";
import WelcomeComponent from "@/components/welcome";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <WelcomeComponent />
      <hr className="my-10" />
      <ProductsComponent />
      <hr className="my-10" />
      <ExperienceComponent />
      <hr className="my-10" />
      <EducationComponent />
      <hr className="my-10" />
      <FooterComponent />
    </div>
  );
}
