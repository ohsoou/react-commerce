"use client"

import {DisplayCategory} from "@/types/DisplayCategory";
import Link from "next/link";
import styled from "@/app/(default)/@aside/aside/aside.module.css";
import cx from "classnames";
import { SlArrowRight } from "react-icons/sl";
import {useState} from "react";
import { SlArrowDown } from "react-icons/sl";


export default function CategoryMenu({data} : { data: DisplayCategory }) {
    const [isOpen, setIsOpen] = useState(false);

    const existSubCategory = (list: DisplayCategory[]) => {
        return list && list.length > 0
    }

    const onClick = () => setIsOpen(!isOpen);
    return (
        <li key={data.dispCtgNo}>
            {
                existSubCategory(data.subCategoryList || [])? (
                    <>
                        <div onClickCapture={onClick}>{data.dispCtgNm} {isOpen?  <SlArrowDown className={styled.arrow}/> : <SlArrowRight className={styled.arrow}/>} </div>
                        <ul className={cx([!isOpen && styled.hidden, styled[`sub-${data.depth}`]])}>
                            {
                                data.subCategoryList?.map(c => <CategoryMenu key={c.dispCtgNo} data={c}/>)
                            }
                        </ul>
                    </>
                ) : (<div className={styled.sideLeafMenu}><Link replace={true} href={`/shop/category/${data.dispCtgNo}` }>{data.dispCtgNm}</Link></div>)
            }
        </li>
    )

}