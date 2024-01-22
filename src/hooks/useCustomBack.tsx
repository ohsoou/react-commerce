import {usePathname, useRouter} from "next/navigation";
import {useEffect} from "react";

const useCustomBack = ({ url, handleEvnet } : {url: string, handleEvnet: () => void}) => {
    const path = usePathname();

    useEffect(() => {
        history.pushState(null, '', url ?? path);

        addEventListener('popstate', (event) => handleEvnet);
        return removeEventListener('popstate', handleEvnet);
    }, []);
}

export default useCustomBack;