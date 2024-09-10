const ChatBubble = ({ role, content }) => {
    return (
        <div
            className={`chat ${
                role === 'assistant' ? 'chat-start' : 'chat-end'
            }`}
        >
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full py-1 text-center'>
                    {role === 'assistant' ? 'Bot' : 'You'}
                </div>
            </div>
            <div
                className={`chat-bubble ${
                    role === 'assistant'
                        ? 'chat-bubble-primary'
                        : 'chat-bubble-secondary'
                }`}
            >
                {content}
            </div>
        </div>
    );
};

export default ChatBubble;
