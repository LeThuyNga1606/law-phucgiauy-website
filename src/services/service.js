// src/services/serviceService.js
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

const COL = "services";
const toDoc = (snap) => ({ id: snap.id, ...snap.data() });

// ─── PUBLIC ───────────────────────────────────────────────────────────────────

/**
 * Lấy tất cả dịch vụ đang hiển thị theo nhóm (ServiceCategoryPage)
 * @param {string} category - "dan-su" | "hinh-su" | ... | bỏ trống = tất cả
 */
export async function getActiveServices(category = null) {
  try {
    const filters = [where("active", "==", true), orderBy("order", "asc")];
    if (category) filters.unshift(where("category", "==", category));
    const snap = await getDocs(query(collection(db, COL), ...filters));
    return snap.docs.map(toDoc);
  } catch (err) {
    console.error("getActiveServices:", err);
    return [];
  }
}

/**
 * Lấy 1 dịch vụ theo slug (ServiceDetailPage)
 * @param {string} slug
 */
export async function getServiceBySlug(slug) {
  try {
    const snap = await getDocs(
      query(collection(db, COL), where("slug", "==", slug), limit(1)),
    );
    return snap.empty ? null : toDoc(snap.docs[0]);
  } catch (err) {
    console.error("getServiceBySlug:", err);
    return null;
  }
}

/**
 * Lấy tất cả dịch vụ (ServicesPage - trang tổng quan)
 */
export async function getAllServices() {
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
    console.error("getAllServices:", err);
    return [];
  }
}

// ─── ADMIN ────────────────────────────────────────────────────────────────────

/**
 * Lấy tất cả dịch vụ cho Admin (kể cả đang ẩn)
 */
export async function getAllServicesAdmin() {
  try {
    const snap = await getDocs(
      query(collection(db, COL), orderBy("order", "asc")),
    );
    return snap.docs.map(toDoc);
  } catch (err) {
    console.error("getAllServicesAdmin:", err);
    return [];
  }
}

/**
 * Thêm dịch vụ mới
 * @param {object} data - { name, desc, icon, category, categoryLabel, active, order, slug? }
 * @returns {string} id document vừa tạo
 */
export async function createService(data) {
  const ref = await addDoc(collection(db, COL), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

/**
 * Cập nhật dịch vụ
 * @param {string} id
 * @param {object} data
 */
export async function updateService(id, data) {
  await updateDoc(doc(db, COL, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Xóa dịch vụ
 * @param {string} id
 */
export async function deleteService(id) {
  await deleteDoc(doc(db, COL, id));
}

/**
 * Bật / tắt hiển thị dịch vụ
 * @param {string}  id
 * @param {boolean} currentActive
 * @returns {boolean} trạng thái mới
 */
export async function toggleServiceActive(id, currentActive) {
  const newVal = !currentActive;
  await updateDoc(doc(db, COL, id), {
    active: newVal,
    updatedAt: serverTimestamp(),
  });
  return newVal;
}
