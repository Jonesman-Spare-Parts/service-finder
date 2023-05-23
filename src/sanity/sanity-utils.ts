import { createClient, groq } from "next-sanity";
import { Service } from "@/types/Service";
import clientConfig from "@/sanity/schemas/config/client-config";
import { Category } from "@/types/Category";
import { Blog } from "@/types/Blog";

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

export async function getCategories(searchValue: string): Promise<Category[]> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type=="categories && name match "*${searchValue}*"]{
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

export async function getBlogs(searchValue: string): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type=="blog" && title match "*${searchValue}*" ]{
           _id,
           _createdAt,
            title,
            author,
            "slug": slug.current,
            "image": image.asset->url,
            content,
            category,
}
    `
  );
  
}

export async function getBlog(slug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type=="blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
       title,
       author,
       "slug": slug.current,
       "image": image.asset->url,
       content,
       category,
    }`,
    { slug }
  );
}
