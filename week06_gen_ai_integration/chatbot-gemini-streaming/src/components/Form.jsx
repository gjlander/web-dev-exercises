import { useState } from 'react';
import { toast } from 'react-toastify';
import { createChat } from '../data/gemini';

const Form = ({ setMessages, chatId, setChatId }) => {
  const [isStream, setIsStream] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChecked = () => setIsStream(prev => !prev);
  const handleChange = e => setPrompt(e.target.value);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      // If the prompt value is empty, alert the user
      if (!prompt) throw new Error('Please enter a prompt');

      // Disable the submit button
      setLoading(true);

      const userMsg = {
        id: crypto.randomUUID(),
        role: 'user',
        parts: [{ text: prompt }]
      };
      setMessages(prev => [...prev, userMsg]);

      if (isStream) {
        const asstMsg = {
          id: crypto.randomUUID(),
          parts: [{ text: '' }],
          role: 'model'
        };

        const res = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
          method: 'POST',
          body: JSON.stringify({ message: prompt, stream: true, chatId }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!res.ok) {
          // If the response is not ok, throw an error by parsing the JSON response
          const { error } = await res.json();
          throw new Error(error);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let responseText = '';

        // const responseId = crypto.randomUUID();
        // setMessages(m => [...m, { id: responseId, role: 'model', text: responseText }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });

          // console.log(chunk);

          const oneLine = chunk.replaceAll('\n', '');
          // console.log('oneLine: ', oneLine);
          // responseText += chunk;
          if (oneLine.startsWith('data: json: ')) {
            const jsonStr = oneLine.replace('data: json: ', '');
            const data = JSON.parse(jsonStr);
            // console.log('chatId:', chatId);
            setChatId(chatId);
            localStorage.setItem('chatId', data.chatId);
          } else {
            const text = oneLine.replace('data: ', '');
            console.log('text: ', text);
            responseText += text;
            setMessages(prev => {
              const msgExists = prev.some(msg => msg.id === asstMsg.id);
              // console.log('prev', prev);

              if (!msgExists) {
                asstMsg.parts[0] = { text: responseText };
                return [...prev, asstMsg];
              } else {
                return prev.map(msg => {
                  if (msg.id === asstMsg.id) {
                    console.log('parts text: ', msg.parts[0].text);
                    msg.parts[0].text = responseText;
                  }
                  return msg;
                });
              }
            });
          }
          // console.log(chunk);

          // setMessages(m => m.map(msg => (msg.id === responseId ? { ...msg, text: responseText } : msg)));
        }
        // console.log(responseText);
      } else {
        const response = await createChat({ message: prompt, chatId, stream: isStream });
        const asstMsg = {
          id: crypto.randomUUID(),
          parts: [{ text: response.aiResponse }],
          role: 'model'
        };
        setMessages(prev => [...prev, asstMsg]);
        localStorage.setItem('chatId', response.chatId);
        setChatId(chatId);
      }
      setPrompt('');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-1/3 w-full p-8 bg-slate-600 rounded-lg shadow-md'>
      <form onSubmit={handleSubmit}>
        <label className='flex gap-2 items-center my-2'>
          <input
            id='stream'
            type='checkbox'
            className='checkbox checkbox-primary'
            checked={isStream}
            onChange={toggleChecked}
            disabled={loading}
          />
          <span>Stream response?</span>
        </label>
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
