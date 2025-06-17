import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export const getAllProjects = () => {
  const projectsPath = path.join(contentDirectory, "projects");

  if (!fs.existsSync(projectsPath)) {
    console.warn(`Directory ${projectsPath} does not exist`);
    return [];
  }

  const fileNames = fs.readdirSync(projectsPath);

  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith("mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "");

      const fullFilePath = path.join(projectsPath, fileName);
      const fileContents = fs.readFileSync(fullFilePath, "utf-8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      };
    });
  return allProjects.sort((a, b) => {
    if (a.completedDate < b.completedDate) {
      return 1;
    } else {
      return -1;
    }
  });
};
