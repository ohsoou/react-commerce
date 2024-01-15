"use client"

import useDisplayGoodsQuery from "@/hooks/useDisplayGoodsQuery";
import styled from "./goods.module.css"
import classNames from "classnames";
import GoodsItem from "@/components/shop/GoodsItem";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

type Props = {
    params: {
        dispCtgNo : string,
        dispCtgNm? : string
    }
}
const cx = classNames.bind(styled);

export default function GoodsList({params} : Props) {
    const {ref, inView} = useInView();

    const { goodsList, isLoading, isError, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =  useDisplayGoodsQuery({
        page: 1,
        query: params,
    });

    useEffect(() => {
        if ( inView ) !isFetching && hasNextPage && fetchNextPage()
    }, [ isFetching, hasNextPage, fetchNextPage, inView ])

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
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
                            goodsList.map((goods, idx) => <GoodsItem key={idx} goods={goods}/>)
                        }
                    </div>
                    <div ref={ref}/>
                </div>
            </div>
        </div>
    )
}