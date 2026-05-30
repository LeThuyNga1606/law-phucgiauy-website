// src/services/newsService.js
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

const COL = "posts"; // tên collection trong Firestore

// ─── HELPER ──────────────────────────────────────────────────────────────────
const toPost = (snap) => ({ id: snap.id, ...snap.data() });

// ─── PUBLIC: ĐỌC DỮ LIỆU ─────────────────────────────────────────────────────

/**
 * Lấy danh sách bài viết đã đăng (dùng cho NewsPage)
 * @param {object} options
 * @param {string}   options.category  - lọc theo danh mục (bỏ qua nếu "all")
 * @param {string}   options.search    - tìm kiếm (lọc phía client)
 * @param {number}   options.pageSize  - số bài mỗi trang (mặc định 9)
 * @param {object}   options.lastDoc   - document cuối của trang trước (để phân trang)
 * @returns {{ posts, lastDoc, hasMore }}
 */
export async function getPublishedPosts({
  category = "all",
  pageSize = 9,
  lastDoc = null,
} = {}) {
  try {
    let q = query(
      collection(db, COL),
      where("status", "==", "published"),
      orderBy("createdAt", "desc"),
      limit(pageSize + 1), // lấy thêm 1 để biết còn trang tiếp không
    );

    if (category !== "all") {
      q = query(
        collection(db, COL),
        where("status", "==", "published"),
        where("category", "==", category),
        orderBy("createdAt", "desc"),
        limit(pageSize + 1),
      );
    }

    if (lastDoc) {
      q = query(q, startAfter(lastDoc));
    }

    const snap = await getDocs(q);
    const docs = snap.docs;
    const hasMore = docs.length > pageSize;
    const posts = docs.slice(0, pageSize).map(toPost);

    return {
      posts,
      lastDoc: hasMore ? docs[pageSize - 1] : null,
      hasMore,
    };
  } catch (err) {
    console.error("getPublishedPosts error:", err);
    return { posts: [], lastDoc: null, hasMore: false };
  }
}

/**
 * Lấy chi tiết 1 bài viết theo slug (dùng cho NewsDetailPage)
 */
export async function getPostBySlug(slug) {
  try {
    const q = query(collection(db, COL), where("slug", "==", slug), limit(1));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    return toPost(snap.docs[0]);
  } catch (err) {
    console.error("getPostBySlug error:", err);
    return null;
  }
}

/**
 * Lấy chi tiết 1 bài viết theo ID
 */
export async function getPostById(id) {
  try {
    const snap = await getDoc(doc(db, COL, id));
    if (!snap.exists()) return null;
    return toPost(snap);
  } catch (err) {
    console.error("getPostById error:", err);
    return null;
  }
}

/**
 * Lấy TẤT CẢ bài viết đã đăng để tìm kiếm toàn văn (không phân trang)
 * @param {string} category - lọc theo danh mục (bỏ qua nếu "all")
 */
export async function getAllPublishedPostsForSearch(category = "all") {
  try {
    let q;
    if (category !== "all") {
      q = query(
        collection(db, COL),
        where("status", "==", "published"),
        where("category", "==", category),
        orderBy("createdAt", "desc"),
      );
    } else {
      q = query(
        collection(db, COL),
        where("status", "==", "published"),
        orderBy("createdAt", "desc"),
      );
    }
    const snap = await getDocs(q);
    return snap.docs.map(toPost);
  } catch (err) {
    console.error("getAllPublishedPostsForSearch error:", err);
    return [];
  }
}

/**
 * Lấy bài viết liên quan (cùng danh mục, trừ bài hiện tại)
 */
export async function getRelatedPosts(category, excludeId, count = 3) {
  try {
    const q = query(
      collection(db, COL),
      where("status", "==", "published"),
      where("category", "==", category),
      orderBy("createdAt", "desc"),
      limit(count + 1),
    );
    const snap = await getDocs(q);
    return snap.docs
      .map(toPost)
      .filter((p) => p.id !== excludeId)
      .slice(0, count);
  } catch (err) {
    console.error("getRelatedPosts error:", err);
    return [];
  }
}

/**
 * Lấy bài viết nổi bật
 */
export async function getFeaturedPosts(count = 5) {
  try {
    const q = query(
      collection(db, COL),
      where("status", "==", "published"),
      where("featured", "==", true),
      orderBy("createdAt", "desc"),
      limit(count),
    );
    const snap = await getDocs(q);
    return snap.docs.map(toPost);
  } catch (err) {
    console.error("getFeaturedPosts error:", err);
    return [];
  }
}

/**
 * Lấy bài viết đọc nhiều nhất
 */
export async function getMostReadPosts(count = 5) {
  try {
    const q = query(
      collection(db, COL),
      where("status", "==", "published"),
      orderBy("views", "desc"),
      limit(count),
    );
    const snap = await getDocs(q);
    return snap.docs.map(toPost);
  } catch (err) {
    console.error("getMostReadPosts error:", err);
    return [];
  }
}

/**
 * Tăng lượt xem bài viết (gọi khi user mở NewsDetailPage)
 */
export async function incrementViews(postId) {
  try {
    await updateDoc(doc(db, COL, postId), {
      views: increment(1),
    });
  } catch (err) {
    console.error("incrementViews error:", err);
  }
}

// ─── ADMIN: CRUD ──────────────────────────────────────────────────────────────

/**
 * Lấy TẤT CẢ bài viết cho trang Admin (kể cả nháp)
 */
export async function getAllPostsAdmin() {
  try {
    const q = query(collection(db, COL), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map(toPost);
  } catch (err) {
    console.error("getAllPostsAdmin error:", err);
    return [];
  }
}

/**
 * Tạo bài viết mới
 * @param {object} data - dữ liệu bài viết từ AdminPostEditor
 * @returns {string} id của document vừa tạo
 */
export async function createPost(data) {
  const payload = {
    ...data,
    views: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  const ref = await addDoc(collection(db, COL), payload);
  return ref.id;
}

/**
 * Cập nhật bài viết
 * @param {string} id  - document ID
 * @param {object} data - các field cần cập nhật
 */
export async function updatePost(id, data) {
  await updateDoc(doc(db, COL, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Xóa bài viết
 * @param {string} id - document ID
 */
export async function deletePost(id) {
  await deleteDoc(doc(db, COL, id));
}

/**
 * Đổi trạng thái published/draft nhanh
 */
export async function togglePostStatus(id, currentStatus) {
  const newStatus = currentStatus === "published" ? "draft" : "published";
  await updateDoc(doc(db, COL, id), {
    status: newStatus,
    updatedAt: serverTimestamp(),
  });
  return newStatus;
}

// ─── HELPER: tạo slug từ tiêu đề tiếng Việt ─────────────────────────────────
export function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
