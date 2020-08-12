import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/pages/posts");

export type PostContent = {
  readonly date: string;
  readonly title: string;
  readonly slug: string;
};

export function countPosts(): number {
  return fs.readdirSync(postsDirectory).filter((it) => it.endsWith(".mdx"))
    .length;
}

export function getSortedPostsData(page: number, limit: number): PostContent[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        ...(matterResult.data as { date: string; title: string }),
        slug,
      };
    });
  // Sort posts by date
  return allPostsData
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(page * limit, (page + 1) * limit);
}
