 

import noImage from "../assets/no-image.jpg";

const getCroppedImageUrl = (url: string): string => {
  if (!url) return noImage;
  try {
    const urlObject = new URL(url);
    const pathParts = urlObject.pathname.split("/");

    // Insert 'crop/600/400' after 'media'
    const mediaIndex = pathParts.findIndex(part => part === "media");
    if (mediaIndex !== -1) {
      pathParts.splice(mediaIndex + 1, 0, "crop", "600", "400");
    }

    urlObject.pathname = pathParts.join("/");
    return urlObject.toString();
  } catch (e) {
    console.error("Invalid URL:", e);
    return url; // Fallback to original URL if there's an error
  }
};

export default getCroppedImageUrl;