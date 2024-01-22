import {ReactNode} from "react";
import {useMediaQuery} from "react-responsive";
import {useIsClient} from "@/hooks/useMediaQuery";

const Desktop = ({children}: {children: ReactNode}): ReactNode | null => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    return <>{useIsClient() && isDesktop && children}</>;
};

const Tablet = ({children}: {children: ReactNode}): ReactNode | null => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    return <>{useIsClient() && isTablet && children}</>;
};

const Mobile = ({children}: {children: ReactNode}): ReactNode | null => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return <>{useIsClient() && isMobile && children}</>;
};


const DefaultMedia = ({children}: {children: ReactNode}): ReactNode | null => {
    const isNotMobile = useMediaQuery({ minWidth: 767 });
    return <>{useIsClient() && isNotMobile && children}</>;
};
export {Mobile, DefaultMedia};