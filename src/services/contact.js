// src/services/contactService.js
// Firestore integration cho yêu cầu tư vấn
// Collection: "contacts"

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
  limit,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

const COL = "contacts";

const toContact = (snap) => ({ id: snap.id, ...snap.data() });

// ─── PUBLIC: gửi form liên hệ ─────────────────────────────────────────────────

/**
 * Lưu yêu cầu tư vấn từ ContactPage vào Firestore
 * @param {object} data - { name, phone, email, address, subject, message }
 * @returns {string} id document vừa tạo
 */
export async function submitContactRequest(data) {
  const payload = {
    ...data,
    status: "new", // "new" | "processing" | "done"
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  const ref = await addDoc(collection(db, COL), payload);
  return ref.id;
}

// ─── ADMIN: quản lý yêu cầu tư vấn ──────────────────────────────────────────

/**
 * Lấy tất cả yêu cầu tư vấn cho trang Admin
 * @param {string} status - "all" | "new" | "processing" | "done"
 * @returns {object[]}
 */
export async function getAllContactsAdmin(status = "all") {
  try {
    let q;
    if (status === "all") {
      q = query(collection(db, COL), orderBy("createdAt", "desc"));
    } else {
      q = query(
        collection(db, COL),
        where("status", "==", status),
        orderBy("createdAt", "desc"),
      );
    }
    const snap = await getDocs(q);
    return snap.docs.map(toContact);
  } catch (err) {
    console.error("getAllContactsAdmin error:", err);
    return [];
  }
}

/**
 * Cập nhật trạng thái xử lý yêu cầu
 * @param {string} id     - document ID
 * @param {string} status - "new" | "processing" | "done"
 */
export async function updateContactStatus(id, status) {
  await updateDoc(doc(db, COL, id), {
    status,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Thêm ghi chú cho yêu cầu
 * @param {string} id   - document ID
 * @param {string} note - nội dung ghi chú
 */
export async function updateContactNote(id, note) {
  await updateDoc(doc(db, COL, id), {
    note,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Xóa yêu cầu tư vấn
 * @param {string} id - document ID
 */
export async function deleteContact(id) {
  await deleteDoc(doc(db, COL, id));
}
