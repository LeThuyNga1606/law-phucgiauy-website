// src/cloudinary/config.js
import { Cloudinary } from '@cloudinary/url-gen';

// Khởi tạo Cloudinary instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  }
});

// Tên upload preset
export const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

// Cloud name
export const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;