import { useEffect, useState } from "react";

const useOrientation = () => {
    const [isLandscape, setIsLandscape] = useState(window.innerHeight < window.innerWidth);
    const checkOrientation = () => {
        setIsLandscape(window.innerHeight < window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', checkOrientation);
        window.addEventListener('orientationchange', checkOrientation);

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener('resize', checkOrientation);
            window.removeEventListener('orientationchange', checkOrientation);
        };
    }, []);

    return isLandscape;
};

export default useOrientation;