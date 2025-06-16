const ChatBubble = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full p-2 bg-slate-800'>You</div>
      </div>
      <div className={'chat-bubble chat-bubble-primary'}>Some sample text</div>
    </div>
  );
};

export default ChatBubble;
