import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

interface Inputs {
  userName: string;
  password: string;
}

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  //   @ts-ignore
  const { setAuthUser } = useAuthContext();

  const login = async ({ userName, password }: Inputs) => {
    const success = handleInputErrors({ userName, password });

    if (!success) return false;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("login successfull");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

const handleInputErrors = ({ userName, password }: Inputs) => {
  if (!userName || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};
