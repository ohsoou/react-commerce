import {useMediaQuery} from "react-responsive";


const useDesktop = () => useMediaQuery({ query: "(min-width: 1280px)" })

const useTablet = () => useMediaQuery({ query: "(max-width: 1279px)" })


