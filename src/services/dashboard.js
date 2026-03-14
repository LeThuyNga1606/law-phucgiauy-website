// src/services/dashboard.js
import {
  collection,
  query,
  getDocs,
  orderBy,
  where,
  limit,
} from "firebase/firestore";
import { db } from "../firebase/config";

// ─── HELPER ───────────────────────────────────────────────────────────────────
const toDoc = (snap) => ({ id: snap.id, ...snap.data() });

// ─── STATS ────────────────────────────────────────────────────────────────────
/**
 * Đếm số docs trong 1 collection (có filter tùy chọn)
 * Dùng getDocs thay getCountFromServer để tương thích Spark plan
 */
async function countDocs(col, ...filters) {
  try {
    const ref = collection(db, col);
    const q = filters.length ? query(ref, ...filters) : ref;
    const snap = await getDocs(q);
    return snap.size;
  } catch {
    return 0;
  }
}

/**
 * Lấy 4 số liệu chính cho Dashboard
 * @returns {{ posts, totalViews, contacts, lawyers, newContacts }}
 */
export async function getDashboardStats() {
  try {
    const [posts, contacts, lawyers, newContacts] = await Promise.all([
      countDocs("posts", where("status", "==", "published")),
      countDocs("contacts"),
      countDocs("lawyers", where("active", "==", true)),
      countDocs("contacts", where("status", "==", "new")),
    ]);

    // Tổng lượt xem: cộng field views của tất cả bài đã đăng
    let totalViews = 0;
    try {
      const snap = await getDocs(
        query(collection(db, "posts"), where("status", "==", "published")),
      );
      totalViews = snap.docs.reduce((sum, d) => sum + (d.data().views || 0), 0);
    } catch {
      /* bỏ qua nếu lỗi */
    }

    return { posts, totalViews, contacts, lawyers, newContacts };
  } catch {
    return { posts: 0, totalViews: 0, contacts: 0, lawyers: 0, newContacts: 0 };
  }
}

// ─── RECENT POSTS ─────────────────────────────────────────────────────────────
/**
 * Lấy N bài viết mới nhất cho bảng Dashboard
 * @param {number} count
 * @returns {object[]}
 */
export async function getRecentPostsDashboard(count = 5) {
  try {
    const q = query(
      collection(db, "posts"),
      orderBy("createdAt", "desc"),
      limit(count),
    );
    const snap = await getDocs(q);
    return snap.docs.map(toDoc);
  } catch (err) {
    console.error("getRecentPostsDashboard:", err);
    return [];
  }
}

// ─── RECENT CONTACTS ──────────────────────────────────────────────────────────
/**
 * Lấy N yêu cầu tư vấn mới nhất cho Dashboard
 * @param {number} count
 * @returns {object[]}
 */
export async function getRecentContactsDashboard(count = 5) {
  try {
    const q = query(
      collection(db, "contacts"),
      orderBy("createdAt", "desc"),
      limit(count),
    );
    const snap = await getDocs(q);
    return snap.docs.map(toDoc);
  } catch (err) {
    console.error("getRecentContactsDashboard:", err);
    return [];
  }
}

// ─── CHART DATA ───────────────────────────────────────────────────────────────
/**
 * Tính lượt xem theo từng ngày trong 7 ngày gần nhất
 * Firestore Spark không có aggregation theo ngày nên tính phía client
 * @returns {{ day: string, views: number }[]}  7 phần tử
 */
export async function getViewsChartData() {
  try {
    const since = new Date();
    since.setDate(since.getDate() - 7);
    since.setHours(0, 0, 0, 0);

    const q = query(
      collection(db, "posts"),
      where("status", "==", "published"),
      orderBy("updatedAt", "asc"),
    );
    const snap = await getDocs(q);

    // Map: "YYYY-MM-DD" → tổng views của các bài cập nhật hôm đó
    const dayMap = {};
    snap.docs.forEach((d) => {
      const data = d.data();
      const date = data.updatedAt?.toDate?.() || new Date(data.updatedAt || 0);
      if (date < since) return; // bỏ bài cũ hơn 7 ngày
      const key = date.toISOString().slice(0, 10);
      dayMap[key] = (dayMap[key] || 0) + (data.views || 0);
    });

    // Tạo mảng 7 ngày liên tục từ 6 ngày trước đến hôm nay
    const dayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      const key = d.toISOString().slice(0, 10);
      return { day: dayNames[d.getDay()], date: key, views: dayMap[key] || 0 };
    });
  } catch (err) {
    console.error("getViewsChartData:", err);
    // Fallback: 7 ngày với views = 0
    const dayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      return { day: dayNames[d.getDay()], views: 0 };
    });
  }
}
