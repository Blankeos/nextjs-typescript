import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const allPosts = fs.readdirSync(postsDirectory);

  return allPosts.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const fileContents = fs.readFileSync(
      path.join(postsDirectory, fileName),
      "utf-8"
    );

    const { data, content } = matter(fileContents);

    return {
      data,
      content,
      slug,
    };
  });
}
