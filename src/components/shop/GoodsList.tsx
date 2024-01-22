"use client"

import useDisplayGoodsQuery from "@/hooks/useDisplayGoodsQuery";
import styled from "./goods.module.css"
import GoodsItem from "@/components/shop/GoodsItem";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import GoodsListSkeleton from "@/components/skeleton/GoodsListSkeleton";

type Props = {
    dispCtgNo : string,
}
const ROWS_PER_PAGE = 10;
const SCROLL_SESSION_ID = 'SESSION_KEEP_SCROLL';

export default function GoodsList({dispCtgNo} : Props) {
    const {ref, inView} = useInView({
        threshold: 0.7,
    });

    // const pageNo = Number(sessionStorage.getItem(SCROLL_SESSION_ID)) ?? 1;
    const { goodsList, isLoading, isError, isFetching, hasNextPage, fetchNextPage, currentPageNo } =  useDisplayGoodsQuery({
        query: {
            dispCtgNo,
            pageSize: ROWS_PER_PAGE,
            pageNo: 1,
        },
    });

    useEffect(() => {
        if ( inView ) {
            !isFetching && hasNextPage && fetchNextPage()
        }
    }, [ isFetching, hasNextPage, fetchNextPage, inView ])

    // useKeepScroll({pageNo: currentPageNo, sessionKey: SCROLL_SESSION_ID});

    if (isLoading) {
        return (
            <GoodsListSkeleton count={6}/>
        );

    }
    if(isError) {
        return  (<></>);
    }

    return (
        <div className={styled.dpGoodsList}>
            <div className={styled.dpGoods__container}>
                <div className={styled.dpGoods__wrapper}>
                    <div className={styled.dpGoods__items}>
                        {
                            goodsList?.map((goods, idx:number) => <GoodsItem key={idx} goods={goods}/>)
                        }
                    </div>
                    <div ref={ref}/>
                </div>
            </div>
        </div>
    )
}