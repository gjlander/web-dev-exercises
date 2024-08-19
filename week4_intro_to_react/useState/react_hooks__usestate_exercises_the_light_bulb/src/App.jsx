import { useState } from 'react';
import LightBulb from './components/LightBulb';

const App = () => {
    const [lightOn, setLightOn] = useState(false);
    const lightSwitch = () => {
        setLightOn((prev) => !prev);
    };
    return (
        <>
            <button onClick={lightSwitch}>Switch</button>
            <LightBulb lightOn={lightOn} />
        </>
    );
};

export default App;
