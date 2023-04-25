import { createClient, groq } from "next-sanity";
import { Service } from "@/types/Service";

export async function getServices(): Promise<Service[]> {
  const client = createClient({
    projectId: "xomm19bx",
    dataset: "production",
    apiVersion: "2023-03-04",
  });

  return client.fetch(
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
