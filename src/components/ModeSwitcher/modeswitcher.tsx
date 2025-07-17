import './modeswitcher.css';
import { useEffect, useState } from 'react';

function ModeSwitcher() {
    const [mode, setMode] = useState('darkmode');

    // Load the mode from localStorage on component mount
    useEffect(() => {
        const savedMode = localStorage.getItem('mode') || 'darkmode';
        setMode(savedMode);
        document.body.className = savedMode;
    }, []);

    // Function to toggle mode
    const toggleMode = (newMode: string) => {
        setMode(newMode);
        document.body.className = newMode;
        localStorage.setItem('mode', newMode);
    };

    return (
        <div id="mode-container">
            <input
                type="radio"
                id="darkmode-selector"
                checked={mode === 'darkmode'}
                onChange={() => toggleMode('darkmode')}
            />
            <span>Dark Mode</span>
            <input
                type="radio"
                id="lightmode-selector"
                checked={mode === 'lightmode'}
                onChange={() => toggleMode('lightmode')}
            />
            <span>Light Mode</span>
        </div>
    );
}

export default ModeSwitcher;
