import { useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
    const chatRef = useRef(null);

    const [messages, setMessages] = useState([
        {
            role: 'system',
            content: 'You are a web developer.',
        },
    ]);
    return (
        <div>
            <Navbar />
            <Outlet context={{ chatRef, messages, setMessages }} />
        </div>
    );
};

export default RootLayout;
