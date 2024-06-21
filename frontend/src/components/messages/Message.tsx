import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation";

const Message = ({ message }:any) => {
  
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500": "bg-gray-600"

  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="bubble component" src={profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  )
}

export default Message