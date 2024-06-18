import { useState } from "react";
import toast from "react-hot-toast";

interface InputTypes {
  fullName: string;
  userName: string;
  password: string;
  confirmPassword: string;
  gender: string;
}

const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);

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
        throw new Error(errorData.message || "Failed to sign up");
      }

      const data = await res.json();
      toast.success("Sign up successful!");
      return data;
    } catch (error: any) {
      toast.error(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

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
