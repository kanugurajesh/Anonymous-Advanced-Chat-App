import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
  // @ts-ignore
  const { socket } = useSocketContext();
  //   @ts-ignore
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage: any) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
