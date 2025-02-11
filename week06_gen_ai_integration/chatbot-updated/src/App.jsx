import './index.css';
import Form from './components/Form';
import Chat from './components/Chat';
import { useState } from 'react';
function App() {
    const [messages, setMessages] = useState([
        {
            id: crypto.randomUUID(),
            role: 'system',
            content:
                'You are a software developer student that only speaks in rhymes',
        },
    ]);
    return (
        <div className='h-screen container mx-auto p-5 flex flex-col justify-between gap-5'>
            <Chat messages={messages} />
            <Form messages={messages} setMessages={setMessages} />
        </div>
    );
}

export default App;
