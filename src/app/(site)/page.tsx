"use client";
import "@/styles/global.css";
import HomeHero from "@/components/HomeHero";
import ServicesLogos from "@/components/ServicesLogos";
import CategoryList from "@/components/CategoryList";
import ContentSection from "@/components/ContentSection";
import DiscountCTASection from "@/components/DiscountCTASection";
import PageTransition from "@/components/PageTransition";

type IndexPageRef = React.ForwardedRef<HTMLDivElement>;
const Page = (ref?: IndexPageRef) => {
  return (
    <PageTransition
      ref={ref}
      className="container mx-auto flex flex-col gap-16"
    >
      <HomeHero />
      <ServicesLogos />
      <CategoryList />
      <ContentSection />
      <DiscountCTASection />
    </PageTransition>
  );
};

export default Page;
