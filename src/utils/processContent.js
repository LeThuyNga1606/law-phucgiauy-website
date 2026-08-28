// src/utils/processContent.js

function normalizeListStructure(root) {
  const lists = Array.from(root.querySelectorAll("ul, ol"));

  lists.forEach((list) => {
    const items = Array.from(list.children);

    items.forEach((li) => {
      if (li.tagName !== "LI") return;

      // Chỉ xử lý heading là con trực tiếp của LI
      const heading = Array.from(li.children).find((child) =>
        /^H[1-6]$/.test(child.tagName),
      );

      if (!heading) return;

      /*
       * HTML lỗi:
       *
       * <ul>
       *   <li>
       *     Th4...
       *     <h2>Trường hợp 1...</h2>
       *     <p>Theo Điều 51...</p>
       *   </li>
       * </ul>
       *
       * Sửa thành:
       *
       * <ul>
       *   <li>Th4...</li>
       * </ul>
       * <h2>Trường hợp 1...</h2>
       * <p>Theo Điều 51...</p>
       */

      const parent = list.parentNode;

      const nodesToMove = [];

      let current = heading;

      while (current) {
        const next = current.nextSibling;
        nodesToMove.push(current);
        current = next;
      }

      // Xóa khỏi LI
      nodesToMove.forEach((node) => {
        li.removeChild(node);
      });

      // Xóa paragraph rỗng còn lại trong LI
      Array.from(li.children).forEach((child) => {
        if (
          child.tagName === "P" &&
          !child.textContent.trim() &&
          !child.querySelector("img")
        ) {
          child.remove();
        }
      });

      // Chèn các node sau UL/OL
      let insertBefore = list.nextSibling;

      nodesToMove.forEach((node) => {
        parent.insertBefore(node, insertBefore);
      });
    });
  });
}

function normalizeListTypes(root) {
  root.querySelectorAll("ul").forEach((ul) => {
    const style = ul.getAttribute("style") || "";

    /*
     * UL có list-style-type:disc
     * => giữ dạng bullet bình thường.
     */
    if (/list-style-type\s*:\s*disc/i.test(style)) {
      ul.classList.remove("checklist");
      return;
    }

    /*
     * UL không có chỉ định list-style
     * => coi là checklist.
     *
     * Điều này phù hợp với dữ liệu hiện tại của bạn:
     *
     * <ul>
     *   Th1
     *   Th2
     *   Th3
     *   Th4
     * </ul>
     */
    ul.classList.add("checklist");
  });
}

function optimizeImages(root) {
  root.querySelectorAll("img").forEach((img) => {
    // Lazy loading
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }

    // Cloudinary
    const src = img.getAttribute("src");

    if (
      src &&
      src.startsWith("https://res.cloudinary.com") &&
      src.includes("/image/upload/") &&
      !src.includes("/f_auto,q_auto")
    ) {
      const optimized = src.replace(
        "/image/upload/",
        "/image/upload/f_auto,q_auto,w_900/",
      );

      img.setAttribute("src", optimized);
    }
  });
}

function removeEmptyParagraphs(root) {
  root.querySelectorAll("p").forEach((p) => {
    const hasText = p.textContent.trim();
    const hasImage = p.querySelector("img");

    if (!hasText && !hasImage) {
      p.remove();
    }
  });
}

function normalizeNbsp(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

  const textNodes = [];

  let node;

  while ((node = walker.nextNode())) {
    textNodes.push(node);
  }

  textNodes.forEach((textNode) => {
    textNode.nodeValue = textNode.nodeValue.replace(/\u00a0/g, " ");
  });
}

export function processContent(html) {
  if (!html) return "";

  // SSR / môi trường không có DOMParser
  if (typeof window === "undefined" || typeof DOMParser === "undefined") {
    return html;
  }

  const parser = new DOMParser();

  const doc = parser.parseFromString(html, "text/html");

  const root = doc.body;

  // 1. Sửa cấu trúc UL / OL
  normalizeListStructure(root);

  // 2. Phân biệt checklist / bullet
  normalizeListTypes(root);

  // 3. Xử lý ảnh
  optimizeImages(root);

  // 4. Xóa paragraph rỗng
  removeEmptyParagraphs(root);

  // 5. Xử lý &nbsp;
  normalizeNbsp(root);

  return root.innerHTML;
}
