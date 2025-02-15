import EducationComponent from "@/components/education";
import ExperienceComponent from "@/components/experiences";
import ProductsComponent from "@/components/products";
import FooterComponent from "@/components/footer";
export default function Home() {
  return (
    <div>
      <ProductsComponent />
      <hr className="my-5" />
      <ExperienceComponent />
      <hr className="my-5" />
      <EducationComponent />
      <hr className="my-5" />
      <FooterComponent />
    </div>
  );
}
