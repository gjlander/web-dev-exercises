import { useState } from 'react';
import Form from './components/Form';
import Response from './components/Response';

function App() {
    const [isStream, setIsStream] = useState(false);
    const [prompt, setPrompt] = useState('');
    return (
        <main className='h-screen container mx-auto p-5 flex flex-col justify-between gap-5'>
            <h1 className='text-6xl text-center mb-4'>Chatbot!</h1>
            <Form
                isStream={isStream}
                setIsStream={setIsStream}
                prompt={prompt}
                setPrompt={setPrompt}
            />
            <Response />
        </main>
    );
}

export default App;
