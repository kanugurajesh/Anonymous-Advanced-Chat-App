import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      toast.loading("loading users...");
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
        toast.dismiss();
        toast.success("users loaded succesfully");
      } catch (error: any) {
        toast.dismiss();
        toast.error(error.message);
      } finally {
        setLoading(false);
        toast.dismiss();
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
