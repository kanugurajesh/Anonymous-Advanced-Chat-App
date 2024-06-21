import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

// Adding types for signup details
interface InputTypes {
  fullName: string;
  userName: string;
  password: string;
  confirmPassword: string;
  gender: string;
}

const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // @ts-ignore
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }: InputTypes) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return false;

    setLoading(true);
    toast.loading("signing up...");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.log(errorData);
        throw new Error(errorData.error || "Failed to sign up");
      }

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      toast.dismiss();
      toast.success("Sign up successful!");
      // storing jwt in localstorage
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      return data;
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

// The below code is used to handle the input errors
const handleInputErrors = ({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}: InputTypes) => {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};
