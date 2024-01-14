"use client"

import useDisplayGoodsQuery from "@/hooks/useDisplayGoodsQuery";
import {Fragment} from "react";
import {DisplayGoods} from "@/models/DisplayCategory";

type Props = {
    params: {
        dispCtgNo : string
    }
}

const ROWS_PER_PAGE = 10;
export default function GoodsList({params} : Props) {

    const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =  useDisplayGoodsQuery({
        page: ROWS_PER_PAGE,
        query: params,
    });

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
        <>
            {
                data?.pages.map((page, idx) => (
                    <Fragment key={ idx }>
                        { page.map((goods:DisplayGoods, index: number) => <Fragment key={index}>{goods.goodsNm}</Fragment>)}
                    </Fragment>
                    )
                )
            }
        </>
    )
}