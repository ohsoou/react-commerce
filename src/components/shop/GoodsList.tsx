"use client"

import useDisplayGoodsQuery from "@/hooks/useDisplayGoodsQuery";
import styled from "./goods.module.css"
import classNames from "classnames";
import GoodsItem from "@/components/shop/GoodsItem";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {DisplayGoods} from "@/models/DisplayCategory";
import getCategoryGoods from "@/apis/category/getCategoryGoods";

type Props = {
    params: {
        dispCtgNo : string,
    }
}
const cx = classNames.bind(styled);
const ROWS_PER_PAGE = 10;

export default function GoodsList({params} : Props) {
    const {ref, inView} = useInView();

    const { data, isLoading, isError, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =  useDisplayGoodsQuery({
        page: ROWS_PER_PAGE,
        query: {
            ...params,
            pageSize: ROWS_PER_PAGE,
            pageNo: 1,
        }
    });

    useEffect(() => {
        if ( inView ) {
            !isFetching && hasNextPage && fetchNextPage()
        }
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
    // console.log(JSON.stringify(data));

    return (
        <div className={styled.dpGoodsList}>
            <div className={styled.dpGoods__container}>
                <div className={styled.dpGoods__wrapper}>
                    <div className={styled.dpGoods__items}>
                        {/*{*/}
                        {/*    data?.pages?.map((page) => {*/}
                        {/*        return page?.map((goods:DisplayGoods, idx:number) => <GoodsItem key={idx} goods={goods}/>)*/}
                        {/*    })*/}
                        {/*}*/}
                        {
                            data?.map((page) => page.listData.map((goods:DisplayGoods, idx:number) => <GoodsItem goods={goods} key={idx}/>))
                        }
                    </div>
                    <div ref={ref}/>
                </div>
            </div>
        </div>
    )
}