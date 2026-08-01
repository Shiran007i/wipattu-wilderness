import { getPublicFolderImages } from "./getPublicFolderImages";

/**
 * Returns public URL paths for every image currently sitting in
 * /public/images/blog.
 */
export function getBlogGalleryImages(): string[] {
  return getPublicFolderImages("images", "blog");
}
