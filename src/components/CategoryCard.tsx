import React from "react";

type CategoryCardProps = {
  name: string;
  icon: JSX.Element;
  description: string;
};

function CategoryCard({ name, icon, description }: CategoryCardProps) {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{name}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default CategoryCard;
