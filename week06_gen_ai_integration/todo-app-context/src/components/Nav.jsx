import { useTodos } from '../context/context';

const Nav = () => {
    const { isDark, setIsDark } = useTodos();

    return (
        <div>
            <label className='flex cursor-pointer gap-2'>
                <input
                    type='checkbox'
                    checked={isDark}
                    onChange={() => setIsDark((prev) => !prev)}
                />
                <span className='dark:text-white'>Dark Mode?</span>
            </label>
        </div>
    );
};

export default Nav;
