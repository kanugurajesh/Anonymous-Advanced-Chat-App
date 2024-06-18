import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

// Create the AuthContext with a default value of null
export const AuthContext = createContext("");

// Custom hook to use the AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// AuthContextProvider component to provide the AuthContext to its children
export const AuthContextProvider = ({ children }: any) => {
  const [authUser, setAuthUser] = useState(null);

  // Retrieve the user from localStorage and set it in state
  useEffect(() => {
    const storedUser = localStorage.getItem("chat-user");
    if (storedUser) {
      try {
        setAuthUser(JSON.parse(storedUser));
      } catch (error: any) {
        toast.error(error.message);
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("chat-user");
      }
    }
  }, []);

  // Save the user to localStorage whenever authUser changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("chat-user", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("chat-user");
    }
  }, [authUser]);

  return (
    // @ts-ignore
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
