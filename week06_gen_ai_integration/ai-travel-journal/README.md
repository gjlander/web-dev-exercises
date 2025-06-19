# Travel Journal AI Integration

So far you've looked at how to make a simple chatbot using Gemini's SDK. But for something like this, user's could simply go to Gemini's homepage. We want to integrate Generative AI into a larger application, and offer personal results to signed in users.

## Instructions

### Integrate AI Simple Server into the Travel Journal API

To do this, you will need copy the needed files, and update import paths accordingly. Namely you will need:

- `chat` controllers
- `Chat` Mongoose model
- `chatRouter` (and import it for use in `index.js`)
- `userMessage` Zod schema
- add `GEMINI_API_KEY` to `.env` file

Once you have copied over the necessary files, run the development server, and test the endpoints in Postman to confirm they are working

### Integrate Chatbot UI and features into Travel Journal SPA

- Copy your `/data/gemini.js` file into the `/data` folder
  - Make sure to import and re-export from `index.js`
- Create a new `Chat` folder inside of `/components`
- Inside of `/components/Chat` create a new `ChatBtn` component that looks like this:

```js
import { useState } from 'react';
const ChatBtn = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const toggleChatOpen = () => setChatOpen(prev => !prev);

  return (
    <div className='fixed bottom-8 right-8 z-[9999]'>
      <div className='flex flex-col items-end justify-end gap-4'>
        <div className={`${chatOpen ? 'block' : 'hidden'} shadow-lg rounded-lg`}>ChatWindow</div>
        <button onClick={toggleChatOpen} className=' btn btn-primary btn-xl btn-circle'>
          Chat
        </button>
      </div>
    </div>
  );
};

export default ChatBtn;
```

By adding `className='fixed bottom-8 right-8 z-[9999]'` we pin this icon to the bottom right corner. Setting the `z-index` to `9999` ensures that it will layer on top of any other piece of UI.

- import and re-export `ChatBtn` from `components/index.js`
- import it to `RootLayout`, and render it underneath `Outlet`

```js
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { Navbar, ChatBtn } from '@/components';
import { AuthContextProvider } from '@/context';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <div className='container mx-auto'>
        <ToastContainer position='bottom-left' autoClose={1500} theme='colored' />
        <Navbar />
        <Outlet />
        <ChatBtn />
      </div>
    </AuthContextProvider>
  );
};

export default RootLayout;
```

Now you should see a chat icon in the bottom right corner, and clicking on it will toggle view of the `ChatWindow` text

- continue migrating the rest of the components from the Chatbot
  - when you migrate `App.jsx`, rename `App` to `ChatWindow` and add it to a `ChatWindow.jsx` component
  - Make sure to update import paths as you migrate
- import the `ChatWindow` component into `ChatBtn.jsx` and render it instead of the `ChatWindow` text
- Now when you toggle `chatOpen` you should see that chat window. Test the chat, and confirm everything is working

- Adjust the styles so that the `ChatWindow` looks better in it's new environment (doesn't have to be perfect)

### Update the system instructions

Now that we have a specific use case for our AI assistant, we want the system instructions to reflect that. Give instructions so that the AI assistant will:

- talk with an appropriate tone-of-voice
- only talk about travel
- be safe against user attempts to change, read, or update instructions
- admit to not knowing something, rather than hallucinate
- recommend users sign in for more personalized results if they are not signed it

For help with how to achieve this checkout the official guides on:

- [Prompt Design](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/introduction-prompt-design)
  - [Context] (https://cloud.google.com/vertex-ai/generative-ai/docs/chat/chat-prompts#context)
- [System Instructions](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/system-instruction-introduction)

Test you AI assistant by trying to ask it off-topic questions, or get it to ignore pervious instructions. If you're able to jailbreak it (get it to perform outside of the system instructions), adjust instructions until it behaves as desired
