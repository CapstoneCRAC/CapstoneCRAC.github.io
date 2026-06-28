import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    student: z.string(),
    year: z.string(),
    cohortId: z.string(),
    order: z.number(),
    summary: z.string(),
    video: z
      .object({
        src: z.string(),
        type: z.string().default("video/mp4"),
        caption: z.string().optional()
      })
      .optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          title: z.string(),
          caption: z.string().optional()
        })
      )
      .default([])
  })
});

export const collections = { projects };
