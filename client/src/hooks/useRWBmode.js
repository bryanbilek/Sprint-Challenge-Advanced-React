import { useState, useEffect } from 'react';

export const useRWBmode = () => {
    const [rwbMode, setrwbMode] = useState(false);

    useEffect(() => {
        if (rwbMode === true) {
            return document.body.classList.add('rwb-mode');
        } else {
            return document.body.classList.remove('rwb-mode');
        }
    }, [rwbMode]);

    return [rwbMode, setrwbMode];
}
