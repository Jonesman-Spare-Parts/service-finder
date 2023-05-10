import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaShoppingCart } from "react-icons/fa";

type ServiceCTASectionProps = {
  serviceName: string;
  serviceCategory: string;
  serviceIcon: string;
  externalLink: string;
};

function ServiceCtaSection({
  serviceName,
  externalLink,
  serviceCategory,
}: ServiceCTASectionProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center flex flex-col justify-between gap-8 ">
          <div className="mb-6 md:mb-0 flex justify-center">
            <div className="flex flex-col items-center">
              <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
                {serviceName}
              </span>
              <Link
                href={`/services/category/${serviceCategory}`}
                className=" mt-2 uppercase font-semibold bg-blue-100 text-blue-800  hover:bg-blue-200 hover:text-blue-900 text-xs mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
              >
                {serviceCategory}
              </Link>
            </div>
          </div>

          <div className={"flex justify-around font-bold text-lg"}>
            <a
              href="#"
              className="inline-flex  items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Get their service
              <FaShoppingCart className=" ml-2 w-4 h-4" />
            </a>
            <Link
              href={externalLink}
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            >
              Visit their website
              <FaExternalLinkAlt className="ml-2 w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCtaSection;
