import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cohorts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/cohorts" }),
  schema: z.object({
    cohortId: z.string(),
    year: z.string(),
    status: z.enum(["Current", "Upcoming", "Past"]),
    count: z.number().nullable(),
    displayMode: z.enum(["full", "preview", "topics"]),
    publiclyVisible: z.boolean().default(false),
    order: z.number()
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    reportTitle: z.string().optional(),
    author: z.string(),
    year: z.string(),
    cohortId: z.string(),
    order: z.number().optional(),
    detailLevel: z.enum(["full", "preview"]).default("full"),
    hasVideo: z.boolean().default(false),
    type: z.string().optional(),
    focus: z.string().optional(),
    summary: z.string(),
    publicLinks: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
          kind: z.enum(["live", "source", "resource"]).default("live")
        })
      )
      .default([]),
    cover: z
      .object({
        src: z.string(),
        alt: z.string()
      })
      .optional(),
    video: z
      .object({
        src: z.string(),
        type: z.string().default("video/mp4"),
        duration: z.string().optional(),
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

export const collections = { cohorts, projects };
