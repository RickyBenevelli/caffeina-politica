import fs from "fs";
import path from "path";


export const postsPath = path.join(process.cwd(), 'posts');
export const postFileNames = fs.readdirSync(postsPath).filter((postPath) => /\.mdx?$/.test(postPath));
