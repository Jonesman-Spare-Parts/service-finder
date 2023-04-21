import { createClient } from "next-sanity";

export async function getServices() {
  const client = createClient({
    projectId: "xomm19bx",
    dataset: "production",
    apiVersion: "2023-04-18",
  });

  return client.fetch(
    `*[_type == "service"]{
      _id,
      _createdAt,
      name,
      "slug" : slug.current,
      "image" : image.asset->url,
      overview,
      background,
      "category" : category->name,
      offer,
      "services" : services[]->name
     }`
  );
}
