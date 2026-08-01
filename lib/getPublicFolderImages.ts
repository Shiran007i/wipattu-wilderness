import fs from "fs";
import path from "path";

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

/**
 * Returns public URL paths for every image inside a folder under /public.
 * e.g. getPublicFolderImages("images", "hero") reads /public/images/hero
 *
 * This is the ONLY place that knows images live in local folders right now.
 * To move to a CMS or Supabase Storage later, change this function only —
 * everywhere else just calls it and renders whatever comes back.
 */
export function getPublicFolderImages(...segments: string[]): string[] {
  const dir = path.join(process.cwd(), "public", ...segments);

  try {
    const files = fs.readdirSync(dir);
    return files
      .filter((file) => ALLOWED_EXTENSIONS.includes(path.extname(file).toLowerCase()))
      .sort()
      .map((file) => `/${segments.join("/")}/${file}`);
  } catch {
    // Folder doesn't exist yet or is unreadable — treat as empty.
    return [];
  }
}
