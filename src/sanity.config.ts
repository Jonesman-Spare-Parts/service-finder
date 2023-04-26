import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: "xomm19bx",
  dataset: "production",
  title: "ServiceHub",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
