import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  //   @ts-ignore
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    toast.loading("logging out...");
    
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // removing the jwt token from the localstorage
      localStorage.removeItem("chat-user");
      setAuthUser(null);

      toast.dismiss();
      toast.success("user logged out successfully");
    } catch (error) {
      toast.dismiss();
      // @ts-ignore
      toast.error(error.message);
    } finally {
      setLoading(false);
      toast.dismiss();
    }
  };

  return { loading, logout };
};

export default useLogout;
