// src/cloudinary/upload.js
import { CLOUD_NAME, UPLOAD_PRESET } from './config';

// Hàm upload 1 ảnh lên Cloudinary
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: 'POST', body: formData }
  );

  const data = await response.json();

  // Trả về URL ảnh để lưu vào Firestore
  return {
    url:       data.secure_url,   // Link ảnh đầy đủ
    publicId:  data.public_id,    // ID để xóa ảnh sau này
  };
};

// Hàm xóa ảnh khỏi Cloudinary
export const deleteImage = async (publicId) => {
  // Lưu ý: xóa ảnh cần backend hoặc Cloudinary Admin API
  // Với free tier có thể xóa thủ công trên Cloudinary Dashboard
  console.log('Deleting image:', publicId);
};