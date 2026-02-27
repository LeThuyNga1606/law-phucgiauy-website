// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';


const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Lắng nghe thay đổi trạng thái đăng nhập
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe(); // Cleanup khi unmount
  }, []);


  return (
    <AuthContext.Provider value={{ user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};


// Hook tiện ích để dùng auth ở bất kỳ component nào
export const useAuth = () => useContext(AuthContext);

