import fs from "fs";
import path from "path";

/**
 * Returns public URL paths for every image currently sitting in
 * /public/images/blog. This is the ONLY place that knows where the
 * images physically live right now.
 *
 * To swap this to a CMS or Supabase Storage later, replace the body
 * of this function only — everywhere else in the app just calls
 * getBlogGalleryImages() and renders whatever comes back, so no other
 * code needs to change.
 */
export function getBlogGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public", "images", "blog");
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

  try {
    const files = fs.readdirSync(dir);
    return files
      .filter((file) => allowedExtensions.includes(path.extname(file).toLowerCase()))
      .sort()
      .map((file) => `/images/blog/${file}`);
  } catch {
    // Folder doesn't exist yet or is unreadable — treat as empty.
    return [];
  }
}
