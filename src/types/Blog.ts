import { PortableTextBlock } from "@sanity/types";

export interface Blog {
  _id: string;
  createdAt: Date;
  title: string;
  content: PortableTextBlock[];
  category: string;
  slug: string;
  image: string;
  author: string;
}
