import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined); // undefined = đang check

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // Đang kiểm tra auth
  if (user === undefined) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAFAF9",
          flexDirection: "column",
          gap: "16px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            border: "3px solid #E5E0D8",
            borderTopColor: "#A8171C",
            borderRadius: "50%",
            animation: "spin .7s linear infinite",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ fontSize: "14px", color: "#888" }}>Đang xác thực...</p>
      </div>
    );
  }

  // Chưa đăng nhập → về trang login
  if (!user) return <Navigate to="/admin/login" replace />;

  // Đã đăng nhập → render children
  return children;
}
