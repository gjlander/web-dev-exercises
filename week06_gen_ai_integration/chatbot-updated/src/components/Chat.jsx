import ChatBubble from './ChatBubble';
const Chat = ({ messages }) => {
    return (
        <div
            id='results'
            className='h-2/3 w-full p-8 bg-slate-600 rounded-lg shadow-md overflow-scroll'
        >
            {messages?.map((msg) => {
                if (msg.role === 'system') return null;
                return <ChatBubble key={msg.id} {...msg} />;
            })}
        </div>
    );
};

export default Chat;
