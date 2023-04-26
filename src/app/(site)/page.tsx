"use client";
import "@/styles/global.css";
import HomeHero from "@/components/HomeHero";
import ServicesLogos from "@/components/ServicesLogos";
import CategoryList from "@/components/CategoryList";
import ContentSection from "@/components/ContentSection";
import DiscountCTASection from "@/components/DiscountCTASection";

const Page = () => {
  return (
    <div className="container mx-auto flex flex-col gap-16">
      <HomeHero />
      <ServicesLogos />
      <CategoryList />
      <ContentSection />
      <DiscountCTASection />
    </div>
  );
};

export default Page;
