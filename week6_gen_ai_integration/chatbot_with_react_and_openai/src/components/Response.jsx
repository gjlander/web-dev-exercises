const Response = ({ answer }) => {
    return (
        <div
            id='results'
            className='h-2/3 w-full p-8 bg-slate-800 rounded-lg shadow-md'
        >
            <p>{answer}</p>
        </div>
    );
};

export default Response;
