import { createClient, groq } from "next-sanity";
import { Service } from "@/types/Service";
import clientConfig from "@/sanity/schemas/config/client-config";
import { Category } from "@/types/Category";

export async function getServices(searchValue: string): Promise<Service[]> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type=="service" && name match "*${searchValue}*" ]{
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

export async function getCategoryServices(
  category?: string
): Promise<Service[]> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type=="service" && category == $category]{
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
    { category }
  );
}

export async function getCategory(slug: string): Promise<Category> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type=="category" && slug.current == $slug][0]{
           _id,
           _createdAt,
            name,
            description,
            "slug": slug.current,
            icon,
            
}
    `,
    { slug }
  );
}

export async function getCategories(): Promise<Category[]> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type=="categories"]{
           _id,
           _createdAt,
            name,
            description,
            "slug": slug.current,
            icon,
}
    `
  );
}
