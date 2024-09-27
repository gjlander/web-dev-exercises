function App() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8080/file-upload', {
                method: 'POST',
            });
            if (!res.ok) {
                const { error } = await res.json();
                throw new Error(error);
            }
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className='flex items-center justify-center min-h-screen'
        >
            <input
                type='file'
                className='file-input file-input-bordered file-input-primary w-full max-w-xs'
                name='image'
            />
            <button className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default App;
