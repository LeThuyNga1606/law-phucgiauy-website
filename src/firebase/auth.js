// src/firebase/auth.js
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './config';


// Đăng nhập admin
export const dangNhap = async (email, matKhau) => {
  const result = await signInWithEmailAndPassword(auth, email, matKhau);
  return result.user;
};


// Đăng xuất
export const dangXuat = async () => {
  await signOut(auth);
};

