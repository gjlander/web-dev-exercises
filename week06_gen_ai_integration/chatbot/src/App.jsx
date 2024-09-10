import { useState, useRef } from 'react';
import Chat from './components/Chat';
import Form from './components/Form';

function App() {
    const chatRef = useRef(null);

    const [messages, setMessages] = useState([
        {
            role: 'system',
            content: 'You are a web developer.',
        },
    ]);
    return (
        <div className='p-4 flex flex-col gap-4 h-screen'>
            <h1 className='text-5xl text-center font-bold'>AI Chatbot</h1>
            <Chat chatRef={chatRef} messages={messages} />
            <Form
                chatRef={chatRef}
                messages={messages}
                setMessages={setMessages}
            />
        </div>
    );
}

export default App;
