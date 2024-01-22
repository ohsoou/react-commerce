import {useEffect} from "react";
import {usePathname, useSearchParams} from "next/navigation";

function useKeepScroll({pageNo, sessionKey} :  {pageNo: number, sessionKey: string}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        sessionStorage.removeItem(sessionKey);
    }, []);

    useEffect(() => {
        sessionStorage.setItem(sessionKey, JSON.stringify({
            scrollAnchor: scrollY,
            pageNo
        }));
    }, [pageNo, pathname, searchParams]);
}

export default useKeepScroll;