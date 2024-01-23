import {useEffect} from "react";
import SessionStorage from "@/utils/SessionStorage";
import {useRouteChangeEvents, useRouter} from "nextjs-router-events";

function useKeepScroll({pageNo, sessionKey} :  {pageNo: number, sessionKey: string}) {
    // useEffect(() => {
    //     if (history.scrollRestoration) {
    //         window.history.scrollRestoration = 'manual';
    //     }
    // }, []);


    function saveScrollAnchor() {
        const scrollPos = { scrollAnchor: window.scrollY, pageNo };
        SessionStorage.setItem(sessionKey, JSON.stringify(scrollPos));
    }
    function setScroll() {
        const scrollPos = JSON.parse(SessionStorage.getItem(sessionKey) ?? '{}');
        console.log(scrollPos)
        if (scrollPos) {
            window.scrollTo({left: 0, top: scrollPos.scrollAnchor})
        }
    }
    useRouteChangeEvents({onRouteChangeStart : saveScrollAnchor});
    useRouteChangeEvents({onRouteChangeComplete : setScroll});

}


export default useKeepScroll;