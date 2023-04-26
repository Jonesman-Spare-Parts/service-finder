import { createClient, groq } from "next-sanity";
import { Service } from "@/types/Service";
import clientConfig from "@/sanity/schemas/config/client-config";

export async function getServices(): Promise<Service[]> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type=="service"]{
           _id,
           _createdAt,
            name,
            description,
            "slug": slug.current,
            "image": image.asset->url,
            category,
            rating,
            startPrice,
            offer,
            overview,
            background,
            url,
            services,
}
    `
  );
}

export async function getService(slug: string): Promise<Service> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type=="service" && slug.current == $slug][0]{
           _id,
           _createdAt,
            name,
            description,
            "slug": slug.current,
            "image": image.asset->url,
            category,
            rating,
            startPrice,
            offer,
            overview,
            background,
            url,
            services,
}
    `,
    { slug }
  );
}
