import EducationComponent from "@/components/education";
import ExperienceComponent from "@/components/experiences";
import ProductsComponent from "@/components/products";
import FooterComponent from "@/components/footer";
export default function Home() {
  return (
    <div>
      <div className="h-screen"></div>
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
