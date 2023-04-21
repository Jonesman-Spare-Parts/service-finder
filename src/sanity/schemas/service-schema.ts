const service = {
  name: "Service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      to: [{ type: "category" }],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          options: {
            hotspot: true,
          },
        },
      ],
    },

    {
      name: "overview",
      title: "Overview",
      type: "text",
    },
    {
      name: "Background",
      title: "Background",
      type: "text",
    },
    {
      name: "offer",
      title: "Our Offer",
      type: "text",
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default service;
