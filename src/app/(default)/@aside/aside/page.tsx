import styled from "@/app/(default)/@aside/aside/aside.module.css";
import {SlArrowRight} from "react-icons/sl";
import Link from "next/link";

export default function AsideMenu() {
    return (
        <div className={styled.sideCon}>
            <h2>쇼핑</h2>
            <div className={styled.sideMenu}>
                <ul className={styled.sideTopMenu}>
                    <li>
                        <div><Link href="/aside/category" replace={true}>카테고리<SlArrowRight className={styled.arrow}/></Link></div>
                    </li>
                    <li>
                        <div><Link href="#" replace={true}>브랜드<SlArrowRight className={styled.arrow}/></Link></div>
                    </li>
                    <li>
                        <div><Link href="#" replace={true}>카테고리<SlArrowRight className={styled.arrow}/></Link></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}