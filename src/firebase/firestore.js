// src/firebase/firestore.js
import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  getDocs, getDoc, query, orderBy, limit, increment, where
} from 'firebase/firestore';
import { db } from './config';


// Lấy danh sách bài viết (mới nhất trước)
export const layDanhSachBaiViet = async () => {
  const q = query(
    collection(db, 'posts'),
    orderBy('createdAt', 'desc')
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};


// Lấy 1 bài viết theo slug
export const layBaiVietTheoSlug = async (slug) => {
  const q = query(collection(db, 'posts'),
    where('slug', '==', slug), limit(1));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
};


// Thêm bài viết mới
export const themBaiViet = async (data) => {
  return await addDoc(collection(db, 'posts'), {
    ...data,
    viewCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};


// Cập nhật bài viết
export const capNhatBaiViet = async (id, data) => {
  await updateDoc(doc(db, 'posts', id), {
    ...data, updatedAt: new Date()
  });
};


// Xóa bài viết
export const xoaBaiViet = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
};


// Tăng view count
export const tangViewCount = async (id) => {
  await updateDoc(doc(db, 'posts', id), {
    viewCount: increment(1)
  });
};

