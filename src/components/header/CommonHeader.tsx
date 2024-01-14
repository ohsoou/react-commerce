"use client"

import {useEffect, useState} from "react";
import Link from "next/link";
import styled from "./header.module.css";
import cx from 'classnames';
import {usePathname, useRouter} from "next/navigation";
import { BsBasket, BsPerson, BsHouseDoor } from "react-icons/bs";
import {IconContext} from "react-icons";
import {IoChevronBackOutline} from "react-icons/io5";


export default function CommonHeader() {
    const router = useRouter();
    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(path.includes("/aside")? true: false);
    const onClickMenuButton = () => {
        isMenuOpen? router.back() : router.push('/aside');
    };
    const onClickBackButton = () => {
        router.back();
    };
    const title = "타이틀";


    useEffect(() => {
        path.includes("/aside")? setIsMenuOpen(true):setIsMenuOpen(false);
    }, [path]);

    return (
        <header className={styled.header}>
            <div className={cx([styled.nav, styled.left])}>
                <div className={cx([styled.logoContainer, styled.hide])}>
                    <Link href="/">
                        <img src="/static_images_logo-main.svg" alt="플래티어 로고"  className={cx([styled.logo])}/>
                    </Link>
                </div>
                <div className={styled.iconContainer}>
                    <IconContext.Provider value={{ size: '28px', color: 'rgb(124,124,125)' }}>
                        <div onClickCapture={onClickBackButton}><IoChevronBackOutline/></div>
                        <Link href="/"><BsHouseDoor/></Link>
                    </IconContext.Provider>
                </div>
            </div>

            <div className={cx([styled.nav, styled.center])}>
                <span className={styled.title}>{title}</span>
            </div>

            <div className={cx([styled.nav, styled.right])}>
                <div className={styled.iconContainer}>
                    <IconContext.Provider value={{ size: '28px', color: 'rgb(124,124,125)' }}>
                        <Link href="/"><BsPerson/></Link>
                        <Link href="/"><BsBasket/></Link>
                    </IconContext.Provider>

                    <ul onClickCapture={onClickMenuButton}>
                        <li>
                            <div className={cx([styled.menuTrigger, isMenuOpen && styled.active])}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}