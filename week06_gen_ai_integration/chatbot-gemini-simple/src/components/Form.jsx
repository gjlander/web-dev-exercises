import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ setMessages, messages }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChange = e => setPrompt(e.target.value);
  const handleSubmit = async e => {
    try {
      // Prevent the form from submitting
      e.preventDefault();
      // If the prompt value is empty, alert the user
      if (!prompt) throw new Error('Please enter a prompt');
      console.log('messages count: ', messages.length);
      if (messages.length > 9) throw new Error('Message limit reached');

      // Disable the submit button
      setLoading(true);
      const userMsg = {
        id: crypto.randomUUID(),
        role: 'user',
        parts: [{ text: prompt }]
      };
      setMessages(prev => [...prev, userMsg]);

      const response = await fetch('http://localhost:5050/chat/simple', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: prompt })
      });
      if (!response.ok) {
        // If the response is not ok, throw an error by parsing the JSON response
        const { error } = await response.json();
        throw new Error(error);
      }

      const { aiResponse } = await response.json();
      const asstMsg = {
        id: crypto.randomUUID(),
        parts: [{ text: prompt }],
        role: 'model'
      };
      setPrompt('');
      setMessages(prev => [...prev, asstMsg]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-1/3 w-full p-8 bg-slate-600 rounded-lg shadow-md'>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={handleChange}
          id='prompt'
          rows='5'
          placeholder='Ask me anything...'
          className='block w-full px-4 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        ></textarea>
        <button id='submit' type='submit' className='mt-4 w-full btn btn-primary' disabled={loading}>
          Submit✨
        </button>
      </form>
    </div>
  );
};

export default Form;
