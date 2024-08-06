const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    try {
        // Prevent the form from submitting
        e.preventDefault();
        // Get the values of the prompt and stream inputs
        const {
            prompt: { value: promptValue },
            stream: { checked: streamValue },
        } = form.elements;
        // If the prompt value is empty, alert the user
        if (!promptValue) return alert('Please enter a prompt');
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
                    stream: streamValue,
                    messages: [
                        {
                            role: 'system',
                            content:
                                'You are a software developer student that only speaks in rhymes', // This is the system message, it will control the behavior of the chatbot
                        },
                        {
                            role: 'user',
                            content: promptValue, // This is the user message, it will be the prompt for the chatbot
                        },
                    ],
                }),
            }
        );
        // Conditionally process the response depending on the value of `streamValue`
        if (streamValue) {
            // Process stream response
        } else {
            // Process response normally
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        // If an error occurs, log it to the console
        console.error(error);
    }
});
