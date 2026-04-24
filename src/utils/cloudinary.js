// src/utils/cloudinary.js
export function optimizeCloudinaryUrl(url, options = {}) {
  if (!url || !url.includes("cloudinary.com")) return url;

  const {
    width = 800,
    quality = "auto",
    format = "auto", // tự chọn webp/avif tùy trình duyệt
  } = options;

  // Chèn transformation vào URL
  // Trước: https://res.cloudinary.com/deeqshxoc/image/upload/v123/law-phucgiauy/news/abc.jpg
  // Sau:   https://res.cloudinary.com/deeqshxoc/image/upload/f_auto,q_auto,w_800/v123/...
  return url.replace(
    "/image/upload/",
    `/image/upload/f_${format},q_${quality},w_${width}/`,
  );
}
