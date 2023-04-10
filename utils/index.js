import fs from "fs";
import path from "path";


export const postsPath = path.join(process.cwd(), 'posts');
export const jsonPath = path.join(process.cwd(), 'json');
export const postFileNames = fs.readdirSync(postsPath).filter((postPath) => /\.mdx?$/.test(postPath));

export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
}