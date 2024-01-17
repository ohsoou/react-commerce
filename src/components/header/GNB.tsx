"use client"

import {FiHeart, FiUser} from "react-icons/fi";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {IoEyeOutline} from "react-icons/io5";
import {CiSearch} from "react-icons/ci";
import {BsHouseDoor} from "react-icons/bs";

export default function GNB() {
    const router = useRouter();
    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(path.includes("/aside")? true: false);
    const onClickMenuButton = () => {
        isMenuOpen? router.back() : router.push('/aside');
    };

    useEffect(() => {
        path.includes("/aside")? setIsMenuOpen(true):setIsMenuOpen(false);
    }, [path]);

    const MenuButton = () => {
        return (
            // <ul onClickCapture={onClickMenuButton}>
            //     <li>
            //         <div className={cx([styled.menuTrigger, isMenuOpen && styled.active])}>
            //             <span></span>
            //             <span></span>
            //             <span></span>
            //         </div>
            //     </li>
            // </ul>
            <div onClickCapture={onClickMenuButton}>
                <button className="relative">
                    <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px]">
                        <div className="flex flex-col justify-between w-[30px] h-[23px] transform rigin-center overflow-hidden">
                            <div className={`bg-slate-700 h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuOpen && 'rotate-45'}`}></div>
                            <div className={`bg-slate-700 h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${isMenuOpen && 'translate-x-10'}`}></div>
                            <div className={`bg-slate-700 h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${isMenuOpen && '-rotate-45 mb-[0.8px]'}`}></div>
                        </div>
                    </div>
                </button>
            </div>
        )
    }

    return (
        <>
            <nav className="m-auto hidden bg-transparent lg:block ">
                <div className="container flex grow items-center justify-between w-1/2">
                    <MenuButton/>
                    <span><Link href="/">홈</Link></span>
                    <span><Link href="/">브랜드</Link></span>
                    <span><Link href="/">기획전</Link></span>
                    <span><Link href="/">이벤트</Link></span>
                    <span><Link href="/">랭킹존</Link></span>
                </div>
            </nav>
            <div className="fixed bottom-0 left-0 z-30 flex w-full items-start justify-around border-t border-primary1 bg-white px-6 py-3 shadow-sm lg:hidden">
                <MenuButton/>
                <Icon
                    Icon={CiSearch}
                    linkAddress={'/'}
                />
                <Icon
                    Icon={BsHouseDoor}
                    linkAddress={'/'}
                />
                <Icon
                    Icon={FiUser}
                    linkAddress={'/'}
                />
                <Icon
                    Icon={IoEyeOutline}
                    linkAddress="/"
                />
            </div>
        </>
    );
}

