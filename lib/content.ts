import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project } from "@/types";

const contentDirectory = path.join(process.cwd(), "content");

export const getAllProjects = (): Project[] => {
  const projectsPath = path.join(contentDirectory, "projects");

  if (!fs.existsSync(projectsPath)) {
    console.warn(`Directory ${projectsPath} does not exist`);
    return [];
  }

  const fileNames = fs.readdirSync(projectsPath);

  const allProjects = fileNames
    .filter(
      (fileName: string) =>
        fileName.endsWith("mdx") || fileName.endsWith(".md"),
    )
    .map((fileName: string) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "");

      const fullFilePath = path.join(projectsPath, fileName);
      const fileContents = fs.readFileSync(fullFilePath, "utf-8");

      //   console.log("fileContents", fileContents);
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      } as Project;
    });

  return allProjects.sort((a, b) => {
    if (a.completedDate < b.completedDate) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getProjectBySlug = (slug: string): Project | null => {
  const projectsPath: string = path.join(contentDirectory, "projects");

  //checking to see if direcetory exists.
  if (!fs.existsSync(projectsPath)) {
    console.warn(`Directory ${projectsPath} does not exist`);
    return null;
  }

  //list of possible file extensions
  const possibleFiles = [`${slug}.mdx`, `${slug}.md`];

  for (const fileName of possibleFiles) {
    const fullFilePath = path.join(projectsPath, fileName);

    if (fs.existsSync(fullFilePath)) {
      const fileContents = fs.readFileSync(fullFilePath, "utf-8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      } as Project;
    }
  }
  return null;
};

export function getPageBySlug(slug: string): Project | null {
  const pagesPath = path.join(contentDirectory, "pages");

  const possibleFiles = [`${slug}.mdx`, `${slug}.md`];

  for (const fileName of possibleFiles) {
    const fullFilePath = path.join(pagesPath, fileName);

    if (fs.existsSync(fullFilePath)) {
      const fileContents = fs.readFileSync(fullFilePath, "utf8");
      const { data, content } = matter(fileContents);

      return { slug, content, ...data } as Project;
    }
  }

  return null;
}

export const getRelatedProjects = (slug: string): Project[] => {
  const projects: Project[] = getAllProjects();
  return projects
    .filter((project: Project) => project.slug !== slug)
    .slice(0, 3);
};
