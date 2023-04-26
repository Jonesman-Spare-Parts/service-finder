import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaShoppingCart } from "react-icons/all";

type ServiceCTASectionProps = {
  serviceName: string;
  serviceIcon: string;
  externalLink: string;
};

function ServiceCtaSection({
  serviceName,
  serviceIcon,
  externalLink,
}: ServiceCTASectionProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center flex flex-col justify-between gap-12 ">
          <div className="mb-6 md:mb-0 flex justify-center">
            <a href="https://flowbite.com" className="flex items-center">
              {/*<Image src={logo} className="mr-3 h-8" alt="FlowBite Logo" />*/}
              <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
                {serviceName}
              </span>
            </a>
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
