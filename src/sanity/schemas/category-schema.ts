export const categoryList = [
  "restaurant",
  "hotel",
  "shopping",
  "health",
  "beauty",
  "finance",
];

const category = {
  name: "category",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      options: {
        list: [...categoryList],
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      accept: ".svg",
    },
    {
      name: "description",
      title: "description",
      type: "text",
    },
  ],
};

export default category;
