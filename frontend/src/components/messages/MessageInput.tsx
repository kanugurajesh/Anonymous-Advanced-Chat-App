import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  // const { loading, sendMessage } = useSendMessage();
  const { sendMessage } = useSendMessage();
  const loading = false;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg w-full p-2.5 bg-black border-black text-white placeholder-white font-medium "
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-white"
        >
          <div>
            {loading ? (
              <img
                src="/spinner.svg"
                width={35}
                height={35}
                className="rounded-full"
              />
            ) : (
              <BsSend />
            )}
          </div>
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
