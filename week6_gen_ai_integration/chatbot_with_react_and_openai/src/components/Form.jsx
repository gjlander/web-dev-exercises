const Form = ({
    isStream,
    setIsStream,
    prompt,
    setPrompt,
    submitPrompt,
    isDisabled,
}) => {
    // const [isDisabled, setIsDisabled] = useState(false);

    return (
        <form
            onSubmit={submitPrompt}
            className='h-1/3 w-full p-8 bg-slate-800 rounded-lg shadow-md'
        >
            <div className='form-control'>
                <label className='label cursor-pointer justify-start gap-2'>
                    <input
                        type='checkbox'
                        className='checkbox checkbox-primary'
                        checked={isStream}
                        onChange={() => setIsStream((prev) => !prev)}
                        disabled={isDisabled}
                    />
                    <span className='label-text'>Stream response?</span>
                </label>
            </div>
            <textarea
                className='textarea textarea-primary textarea-lg w-full'
                placeholder='Ask me anything...'
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <button disabled={isDisabled} className='btn btn-primary w-full'>
                Submit ✨
            </button>
        </form>
    );
};
export default Form;
