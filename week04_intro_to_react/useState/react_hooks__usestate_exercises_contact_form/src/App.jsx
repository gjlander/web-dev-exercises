// You can work here or download the template
// Your components go here

import { useState } from 'react';

const App = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        tel: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.tel || !form.message)
            return alert('Please fill out all fields!');
        console.log(form);
        setForm({
            name: '',
            email: '',
            tel: '',
            message: '',
        });
    };
    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    return (
        <div>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '25%',
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor='name'>
                    Name:
                    <input
                        value={form.name}
                        onChange={handleChange}
                        type='text'
                        id='name'
                        name='name'
                    />
                </label>
                <label htmlFor='email'>
                    Email:
                    <input
                        value={form.email}
                        onChange={handleChange}
                        type='email'
                        id='email'
                        name='email'
                    />
                </label>
                <label htmlFor='tel'>
                    Telephone:
                    <input
                        value={form.tel}
                        onChange={handleChange}
                        type='tel'
                        id='tel'
                        name='tel'
                    />
                </label>
                <label htmlFor='message'>
                    Message:
                    <textarea
                        value={form.message}
                        onChange={handleChange}
                        name='message'
                        id='message'
                    ></textarea>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default App;
