import { useState, useEffect } from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode === true) {
            return document.body.classList.add('dark-mode');
        } else {
            return document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}
