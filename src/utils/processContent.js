// src/utils/processContent.js
export function processContent(html) {
  if (!html) return "";

  // 1. Thêm loading="lazy" cho tất cả <img>
  let processed = html.replace(
    /<img(?![^>]*loading=)/gi,
    '<img loading="lazy"',
  );

  // 2. Tối ưu URL Cloudinary trong ảnh bài viết
  processed = processed.replace(
    /src="(https:\/\/res\.cloudinary\.com[^"]+)"/gi,
    (match, url) => {
      const optimized = url.replace(
        "/image/upload/",
        "/image/upload/f_auto,q_auto,w_900/",
      );
      return `src="${optimized}"`;
    },
  );

  // 3. Xóa &nbsp; gây lỗi xuống dòng (đã fix trước đó)
  processed = processed.replace(/&nbsp;/g, " ");

  return processed;
}
