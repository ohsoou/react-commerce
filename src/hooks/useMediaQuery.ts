import {useMediaQuery} from "react-responsive";
import {useEffect, useState} from "react";

// hydration error : https://velog.io/@leehyunho2001/React-responsive
const useIsClient = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
        }
    }, []);
    return isClient;
};

const useDesktop = () => useMediaQuery({ query: "(min-width: 1280px)" })

const useTablet = () => useMediaQuery({ query: "(max-width: 1279px)" })


export {useIsClient}