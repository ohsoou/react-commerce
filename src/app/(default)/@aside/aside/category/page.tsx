"use client"

import {useQuery} from "@tanstack/react-query";
import {getDisplayCategoryList} from "@/apis/category/getDisplayCategoryList";
import CategoryMenu from "@/components/aside/CategoryMenu";
import styled from '../aside.module.css';
import {DisplayCategory} from "@/models/DisplayCategory";

export default function Category() {

    const {data} = useQuery<DisplayCategory[]>({
        queryKey: ['aside', 'displayCategory'],
        queryFn: getDisplayCategoryList,
        staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
        gcTime: 300 * 1000,
    });
    return (
        <div className={styled.sideCon}>
            <div className={styled.sideMenu}>
                <ul className={styled.sideTopMenu}>
                    {
                        data?.map(c => <CategoryMenu key={c.dispCtgNo} data={c}/>)
                    }
                </ul>
            </div>
        </div>
    )
}