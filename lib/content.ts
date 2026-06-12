import { Project, Til, Update } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

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
		.slice(0, 2);
};

export const getTilSnippets = (): Til[] => {
	const tilPath = path.join(contentDirectory, "til");

	if (!fs.existsSync(tilPath)) {
		console.warn(`Directory ${tilPath} does not exist`);
		return [];
	}

	const fileNames = fs.readdirSync(tilPath);

	const allTils = fileNames
		.filter(
			(fileName: string) =>
				fileName.endsWith("mdx") || fileName.endsWith(".md"),
		)
		.map((fileName: string) => {
			const slug = fileName.replace(/\.(mdx|md)$/, "");

			const fullFilePath = path.join(tilPath, fileName);
			const fileContents = fs.readFileSync(fullFilePath, "utf-8");

			//   console.log("fileContents", fileContents);
			const { data, content } = matter(fileContents);

			return {
				slug,
				content,
				...data,
			} as Til;
		});

	return allTils.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
};

export const getAllUpdates = (): Update[] => {
	const updatesPath = path.join(contentDirectory, "projects/updates");

	if (!fs.existsSync(updatesPath)) {
		return [];
	}

	const projectFolders = fs
		.readdirSync(updatesPath, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name);

	const allUpdates: Update[] = [];

	for (const projectSlug of projectFolders) {
		const projectUpdatesPath = path.join(updatesPath, projectSlug);
		const fileNames = fs
			.readdirSync(projectUpdatesPath)
			.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

		for (const fileName of fileNames) {
			const slug = fileName.replace(/\.(mdx|md)$/, "");
			const fileContents = fs.readFileSync(
				path.join(projectUpdatesPath, fileName),
				"utf-8",
			);
			const { data, content } = matter(fileContents);

			allUpdates.push({
				slug,
				projectSlug,
				content,
				...data,
			} as Update);
		}
	}

	return allUpdates.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getUpdateBySlug = (
	projectSlug: string,
	slug: string,
): Update | null => {
	const updatesPath: string = path.join(
		contentDirectory,
		`projects/updates/${projectSlug}`,
	);

	//checking to see if direcetory exists.
	if (!fs.existsSync(updatesPath)) {
		console.warn(`Directory ${updatesPath} does not exist`);
		return null;
	}

	//list of possible file extensions
	const possibleFiles = [`${slug}.mdx`, `${slug}.md`];

	for (const fileName of possibleFiles) {
		const fullFilePath = path.join(updatesPath, fileName);

		if (fs.existsSync(fullFilePath)) {
			const fileContents = fs.readFileSync(fullFilePath, "utf-8");
			const { data, content } = matter(fileContents);

			return {
				slug,
				projectSlug,
				content,
				...data,
			} as Update;
		}
	}
	return null;
};

export const getMostRecentUpdate = (projectSlug: string) => {
	const updatesPath: string = path.join(
		contentDirectory,
		`projects/updates/${projectSlug}`,
	);

	//checking to see if direcetory exists.
	if (!fs.existsSync(updatesPath)) {
		console.warn(`Directory ${updatesPath} does not exist`);
		return null;
	}

	const fileNames = fs.readdirSync(updatesPath);

	const allUpdates = fileNames
		.filter(
			(fileName: string) =>
				fileName.endsWith("mdx") || fileName.endsWith(".md"),
		)
		.map((fileName: string) => {
			const slug = fileName.replace(/\.(mdx|md)$/, "");

			const fullFilePath = path.join(updatesPath, fileName);
			const fileContents = fs.readFileSync(fullFilePath, "utf-8");

			//   console.log("fileContents", fileContents);
			const { data, content } = matter(fileContents);

			return {
				slug,
				content,
				...data,
			} as Update;
		});

	allUpdates.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
	return allUpdates[0];
};
