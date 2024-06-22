import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { useAuthContext } from "./AuthContext";
import { io, Socket } from "socket.io-client";

interface SocketContextProps {
  socket: Socket | null;
  onlineUsers: string[];
}

export const SocketContext = createContext<SocketContextProps | undefined>(
  undefined
);

export const useSocketContext = () => {
  return useContext(SocketContext);
};

interface SocketContextProviderProps {
  children: ReactNode;
}

export const SocketContextProvider: React.FC<SocketContextProviderProps> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  // @ts-ignore
  const { authUser } = useAuthContext();

  //   @ts-ignore
  useEffect(() => {
    if (authUser) {
      const socketInstance = io("https://anonymous-advanced-chat-app.onrender.com/", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socketInstance);

      socketInstance.on("getOnlineUsers", (users: string[]) => {
        setOnlineUsers(users);
      });

      return () => socketInstance.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
