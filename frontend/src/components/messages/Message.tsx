const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://ucarecdn.com/a0e8647c-d1ee-4a00-a3d0-e9ea9462b7ea/examplelukeoslizlo.jpg" alt="Tailwind Css" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi | what is upp?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  )
}

export default Message