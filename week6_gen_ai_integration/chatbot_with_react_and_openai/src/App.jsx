import { useState } from 'react';
import Form from './components/Form';
import Response from './components/Response';

//Struggle points:
// Messages: adding an ID to message still works, adding text to single message instead of making a new one
//Google libraries for markdown?- highlighter doesn't work

function App() {
    const [isStream, setIsStream] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            role: 'system',
            content:
                'You are a software developer student that only speaks in rhymes', // This is the system message, it will control the behavior of the chatbot
        },
    ]);
    const submitPrompt = async (e) => {
        e.preventDefault();
        try {
            const messagesLength = (messages.length - 1) / 2;
            if (messagesLength >= 5) {
                return alert('Maximum messages used!');
            }
            if (!prompt)
                // If the prompt value is empty, alert the user
                return alert('Please enter a prompt');
            // Clear the results container
            setMessages((prev) => [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    role: 'user',
                    content: prompt,
                },
            ]);
            // Disable the submit button
            setIsDisabled(true);
            // Request
            const response = await fetch(
                'http://localhost:5050/api/v1/chat/completions',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        mode: 'development', // Set the mode to development to not send the request to Open AI for now
                        provider: 'open-ai',
                    },
                    body: JSON.stringify({
                        model: 'gpt-4o',
                        stream: isStream,
                        messages,
                    }),
                }
            );

            if (!response.ok) {
                // If the response is not ok, throw an error by parsing the JSON response
                const { error } = await response.json();
                throw new Error(error);
            }
            setPrompt('');
            // Conditionally process the response depending on the value of `isStream`
            const newMessageId = crypto.randomUUID();
            if (isStream) {
                // Process stream response
                // Get the responses stream
                const reader = response.body.getReader();
                // Create a new TextDecoder
                const decoder = new TextDecoder('utf-8');

                // Variable to check if the stream is done
                let isDone = false;
                // While the stream is not closed, i.e. done is false
                while (!isDone) {
                    // Read the next chunk
                    const result = await reader.read();
                    // If the result is done, break out of the loop
                    if (result.done) {
                        isDone = true;
                        break;
                    }
                    // Decode the result
                    const chunk = decoder.decode(result.value, {
                        stream: true,
                    });
                    // Split lines by new line, you can get more than one line per chunk
                    const lines = chunk.split('\n');
                    // Loop through each line
                    lines.forEach((line) => {
                        // Check if the line starts with data:, that's how Open AI sends the data
                        if (line.startsWith('data:')) {
                            // Get the JSON string without the data: prefix
                            const jsonStr = line.replace('data:', '');
                            // Parse the JSON string
                            const data = JSON.parse(jsonStr);
                            // Get the content from the first choice
                            const content = data.choices[0]?.delta?.content;
                            // If there is content
                            if (content) {
                                setMessages((prev) => {
                                    const isMessageAlreadyAdded = prev.find(
                                        (m) => m.id === newMessageId
                                    );

                                    if (isMessageAlreadyAdded) {
                                        return prev.map((m) =>
                                            m.id === newMessageId
                                                ? {
                                                      ...m,
                                                      content: `${m.content}${content}`,
                                                  }
                                                : m
                                        );
                                    } else {
                                        return [
                                            ...prev,
                                            {
                                                id: newMessageId,
                                                role: 'assistant',
                                                content,
                                            },
                                        ];
                                    }
                                });

                                // console.log(content);

                                // const md = marked.parse(dataResult);
                                // // Add the content to the paragraph element;
                                // p.innerHTML = md;
                                // Prism.highlightAll();
                            }
                        }
                    });
                }
            } else {
                // Process response normally
                const dataResult = await response.json();
                // setAnswer(dataResult.message?.content);
                setMessages((prev) => [
                    ...prev,
                    {
                        id: newMessageId,
                        role: 'assistant',
                        content: dataResult.message?.content,
                    },
                ]);
            }
        } catch (error) {
            // If an error occurs, log it to the console
            console.error(error);
        } finally {
            // Enable the submit button
            setIsDisabled(false);
            setPrompt('');
        }
    };

    return (
        <main className='h-screen container mx-auto p-5 flex flex-col justify-between gap-5'>
            <h1 className='text-6xl text-center mb-4'>Chatbot!</h1>
            <Response messages={messages} />
            <Form
                isStream={isStream}
                setIsStream={setIsStream}
                prompt={prompt}
                setPrompt={setPrompt}
                submitPrompt={submitPrompt}
                isDisabled={isDisabled}
            />
        </main>
    );
}

export default App;
