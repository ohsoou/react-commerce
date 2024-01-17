"use client"

import Link from "next/link";
import styled from "./header.module.css";
import cx from 'classnames';
import { BsBasket, BsPerson, BsHouseDoor } from "react-icons/bs";
import {IoEyeOutline} from "react-icons/io5";
import GNB from "@/components/header/GNB";
import SearchBar from "@/components/header/SearchBar";
import Icon from "@/components/common/Icon";
import BackButton from "@/components/common/BackButton";


export default function CommonHeader() {

    const title = "타이틀";

    return (
        <header>
            <div className="bg-transparent h-16 flex p-7">
                <div className={cx([styled.nav, styled.left])}>
                    <div className={cx([styled.logoContainer, styled.hide])}>
                        <Link href="/">
                            <img src="/static_images_logo-main.svg" alt="플래티어 로고" className={cx([styled.logo])}/>
                        </Link>
                    </div>
                    <div className={styled.iconContainer}>
                        <BackButton/>
                        <Icon Icon={BsHouseDoor} linkAddress="/"/>
                    </div>
                </div>

                <div className={cx([styled.nav, styled.center])}>
                    {/*<span className={styled.title}>{title}</span>*/}
                    <SearchBar/>
                </div>

                <div className={cx([styled.nav, styled.right])}>
                    <div className="hidden lg:flex justify-between items-center gap-3">
                            <Icon Icon={BsPerson} nameOfIcon="마이페이지" linkAddress="/"/>
                            <Icon Icon={BsBasket} nameOfIcon="장바구니" linkAddress="/"/>
                            <Icon Icon={IoEyeOutline} nameOfIcon="최근본상품" linkAddress="/"/>
                    </div>
                    <div className="lg:hidden flex justify-between items-center gap-3">
                            <Icon Icon={BsBasket} linkAddress="/"/>
                    </div>
                </div>
            </div>

            <GNB/>
        </header>
    );
}