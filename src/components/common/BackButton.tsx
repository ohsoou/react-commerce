"use client"

import {IoChevronBackOutline} from "react-icons/io5";
import {useRouter} from "next/navigation";
import {IconContext} from "react-icons";

type Props = {
    option?: IconContext
}
export default function BackButton({option} : Props) {
    const iconOption = option ?? { color: 'rgb(124,124,125)', size: '28px' };
    const router = useRouter();

    const onClickBackButton = () => {
        router.back();
    };
    return (
        <button onClickCapture={onClickBackButton}>
            <IconContext.Provider value={iconOption}>
                <IoChevronBackOutline />
            </IconContext.Provider>
        </button>
    );
}

