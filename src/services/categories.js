// src/services/categoryService.js
// Collection "categories" — dùng chung cho posts, services, filters
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

const COL = "categories";
const toDoc = (snap) => ({ id: snap.id, ...snap.data() });

// ─── PUBLIC ───────────────────────────────────────────────────────────────────

/**
 * Lấy tất cả category đang active
 * @returns {{ id, key, label, color, order }[]}
 */
export async function getActiveCategories() {
  try {
    const snap = await getDocs(
      query(
        collection(db, COL),
        where("active", "==", true),
        orderBy("order", "asc"),
      ),
    );
    return snap.docs.map(toDoc);
  } catch (err) {
    console.error("getActiveCategories:", err);
    return FALLBACK_CATEGORIES;
  }
}

// ─── ADMIN ────────────────────────────────────────────────────────────────────

/**
 * Lấy tất cả category (kể cả đang ẩn) cho Admin
 */
export async function getAllCategoriesAdmin() {
  try {
    const snap = await getDocs(
      query(collection(db, COL), orderBy("order", "asc")),
    );
    return snap.docs.map(toDoc);
  } catch (err) {
    console.error("getAllCategoriesAdmin:", err);
    return FALLBACK_CATEGORIES;
  }
}

export async function createCategory(data) {
  const ref = await addDoc(collection(db, COL), {
    ...data,
    active: data.active ?? true,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateCategory(id, data) {
  await updateDoc(doc(db, COL, id), { ...data, updatedAt: serverTimestamp() });
}

export async function deleteCategory(id) {
  await deleteDoc(doc(db, COL, id));
}

export async function toggleCategoryActive(id, current) {
  const newVal = !current;
  await updateDoc(doc(db, COL, id), {
    active: newVal,
    updatedAt: serverTimestamp(),
  });
  return newVal;
}

// ─── FALLBACK (khi Firestore chưa có data hoặc lỗi) ─────────────────────────
export const FALLBACK_CATEGORIES = [
  {
    id: "civil",
    key: "civil",
    label: "Dân sự",
    color: "#A8171C",
    order: 1,
    active: true,
  },
  {
    id: "criminal",
    key: "criminal",
    label: "Hình sự",
    color: "#1e3a5f",
    order: 2,
    active: true,
  },
  {
    id: "investment",
    key: "investment",
    label: "Đầu tư - FDI",
    color: "#0f5c3a",
    order: 3,
    active: true,
  },
  {
    id: "enterprise",
    key: "enterprise",
    label: "Doanh nghiệp",
    color: "#5c3a0f",
    order: 4,
    active: true,
  },
  {
    id: "license",
    key: "license",
    label: "Giấy phép",
    color: "#2d5a27",
    order: 5,
    active: true,
  },
  {
    id: "news",
    key: "news",
    label: "Tin pháp luật",
    color: "#6b21a8",
    order: 6,
    active: true,
  },
];
