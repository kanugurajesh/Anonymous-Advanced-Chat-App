import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    console.log(messages);
    return (
        <div className="px-4 flex-1 overflow-auto">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    )
}

export default Messages;