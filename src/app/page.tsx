import "../styles/global.css";
import Hero from "@/components/Hero";
import ServicesLogos from "@/components/ServicesLogos";
import CategoryList from "@/components/CategoryList";
import ContentSection from "@/components/ContentSection";
import CTASection from "@/components/CTASection";

const Page = () => {
  return (
    <section className="container mx-auto">
      <Hero />
      <ServicesLogos />
      <CategoryList />
      <ContentSection />
      <CTASection />
    </section>
  );
};

export default Page;
