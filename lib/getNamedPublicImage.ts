import fs from "fs";
import path from "path";

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

/**
 * Looks for a file named exactly `baseName.<ext>` inside a folder under
 * /public (any allowed extension), and returns its public URL path.
 * Returns null if no matching file exists — caller should fall back
 * to a default image in that case.
 *
 * Used for sections where each image is tied to a specific label
 * (e.g. the "Accommodation" service card must show a specific photo),
 * unlike a random pool like the hero carousel or blog gallery.
 */
export function getNamedPublicImage(folderSegments: string[], baseName: string): string | null {
  const dir = path.join(process.cwd(), "public", ...folderSegments);

  for (const ext of ALLOWED_EXTENSIONS) {
    const filePath = path.join(dir, `${baseName}${ext}`);
    if (fs.existsSync(filePath)) {
      return `/${folderSegments.join("/")}/${baseName}${ext}`;
    }
  }
  return null;
}
