import content from "../data/capstone-platform-content.json";

export type Cohort = (typeof content.cohorts)[number];
export type Project = (typeof content.projects)[number];

export const cohorts = content.cohorts;
export const projects = content.projects;
export const mediaLinks = content.mediaLinks;

export const visibleYears = Array.from(new Set(projects.map((project) => project.year)));
export const currentProjects = projects.filter((project) => project.cohortId === "coh3");
export const upcomingProjects = projects.filter((project) => project.cohortId === "coh4");
export const videoProjects = projects.filter((project) => project.studentSubmittedVideo);

export function getCohort(cohortId: string): Cohort | undefined {
  return cohorts.find((cohort) => cohort.id === cohortId);
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
