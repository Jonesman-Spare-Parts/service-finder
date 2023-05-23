import React from "react";
import CategoryCard from "@/components/CategoryCard";
import Link from "next/link";
import { TbSoup } from "react-icons/tb";

export const categoriesArr = [
  {
    name: "Restaurant",
    slug: "restaurant",
    icon: <TbSoup />,
    description:
      "Get food from  favorite restaurant at Takoradi harbour at affordable prices. All restaurants are properly vetted to ensure their compliance with standardized food safeties",
  },
  {
    name: "Hotel",
    slug: "hotel",
    icon: <TbSoup />,
    description:
      "Get food from  favorite restaurant at Takoradi harbour at affordable prices. All restaurants are properly vetted to ensure their compliance with standardized food safeties",
  },
  {
    name: "Beauty",
    slug: "beauty",
    icon: <TbSoup />,
    description:
      "Get food from  favorite restaurant at Takoradi harbour at affordable prices. All restaurants are properly vetted to ensure their compliance with standardized food safeties",
  },
  {
    name: "Shopping",
    slug: "shopping",
    icon: <TbSoup />,
    description:
      "Get food from  favorite restaurant at Takoradi harbour at affordable prices. All restaurants are properly vetted to ensure their compliance with standardized food safeties",
  },
  {
    name: "Finance",
    slug: "finance",
    icon: <TbSoup />,
    description:
      "Get food from  favorite restaurant at Takoradi harbour at affordable prices. All restaurants are properly vetted to ensure their compliance with standardized food safeties",
  },
  {
    name: "Health",
    slug: "health",
    icon: <TbSoup />,
    description:
      "Get food from  favorite restaurant at Takoradi harbour at affordable prices. All restaurants are properly vetted to ensure their compliance with standardized food safeties",
  },
];

function CategoryList() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Get services from different categories
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here on ServiceHub you have a choice to choose services from
            different categories.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {categoriesArr.map((category, index) => (
            <Link
              href={`/services/category/${category.slug}`}
              key={index}
              className={
                "hover:bg-gray-100 hover:scale-105 rounded-lg p-4 transition ease-in-out delay-150"
              }
            >
              <CategoryCard
                key={index}
                description={category.description}
                icon={category.icon}
                name={category.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryList;
