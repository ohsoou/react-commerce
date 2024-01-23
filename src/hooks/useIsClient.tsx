
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
export {useIsClient}