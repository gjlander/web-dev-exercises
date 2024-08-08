import Markdown from 'marked-react';
import { Refractor, registerLanguage } from 'react-refractor';

import bash from 'refractor/lang/bash';
import js from 'refractor/lang/javascript.js';
import php from 'refractor/lang/php.js';
import python from 'refractor/lang/python.js';

registerLanguage(bash);
registerLanguage(js);
registerLanguage(php);
registerLanguage(python);

const renderer = {
    code(snippet, lang) {
        if (!lang) lang = 'bash';
        const allowedLangs = ['js', 'php', 'python'];
        if (!allowedLangs.includes(lang)) lang = 'bash';
        return (
            <Refractor key={this.elementId} language={lang} value={snippet} />
        );
    },
};
const Response = ({ messages }) => {
    return (
        <div
            id='results'
            className='h-2/3 w-full p-8 bg-slate-800 rounded-lg shadow-md overflow-scroll'
        >
            {messages.map((message) => {
                if (message.role === 'system') return null;
                return (
                    <div
                        key={message.id}
                        className={`chat ${
                            message.role === 'assistant'
                                ? 'chat-start'
                                : 'chat-end'
                        }`}
                    >
                        <div
                            className={`chat-bubble ${
                                message.role === 'assistant'
                                    ? 'chat-bubble-secondary'
                                    : 'chat-bubble-primary'
                            }`}
                        >
                            <Markdown renderer={renderer}>
                                {message.content}
                            </Markdown>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Response;
