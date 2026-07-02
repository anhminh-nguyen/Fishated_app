import fs from "fs";
import path from "path";

export function getChapterImages(chapterId) {
  const publicDir = path.join(process.cwd(), "public");
  const chapterFolder = `chapter${chapterId}`;
  const chapterPath = path.join(publicDir, chapterFolder);

  if (!fs.existsSync(chapterPath)) {
    return [];
  }

  return fs
    .readdirSync(chapterPath)
    .filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/${chapterFolder}/${file}`);
}
