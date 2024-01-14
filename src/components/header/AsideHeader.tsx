"use client"

import styled from "@/components/header/header.module.css";
import cx from "classnames";
import {useRouter} from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function AsideHeader() {
    const router = useRouter();
    const onClickMenuButton = () => {
        router.back();
    };

    const onClickBackButton = () => {
        router.back();
    }

    return (
        <header className={styled.header}>
            <div className={cx([styled.nav, styled.left])}>
                <div className={styled.backButton} onClickCapture={onClickBackButton}>
                    <IconContext.Provider value={{ size: '28px', color: 'rgb(124,124,125)' }}>
                        <IoChevronBackOutline/>
                    </IconContext.Provider>
                </div>
            </div>

            <div className={cx([styled.nav, styled.center])}>
                <span>카테고리</span>
            </div>

            <div className={cx([styled.nav, styled.right])}>
                <ul onClickCapture={onClickMenuButton}>
                    <li>
                        <div className={cx([styled.menuTrigger, styled.active])}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}