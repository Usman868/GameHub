import { useState, useEffect } from "react";

export const useDebounce = (value, deklay = 400) => {
    const [dedounced, setDebounced] = useState()
    useEffect(() => {
        const time = setTimeout(() => setDebounced(value), deklay);
        return () => clearTimeout(time);
    }, [value, deklay]);
    return dedounced;
}