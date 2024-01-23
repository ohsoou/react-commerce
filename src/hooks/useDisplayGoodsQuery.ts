import {DisplayGoods} from "@/types/DisplayCategory";
import {QueryFunctionContext} from "@tanstack/query-core";
import {useEffect, useMemo} from "react";
import {useInfiniteQuery, useQueryClient} from "@tanstack/react-query";
import getCategoryGoods from "@/apis/category/getCategoryGoods";
import {object} from "prop-types";

type DisplayGoodsQueryProps = {
    queryFn?: (context?: QueryFunctionContext) => Promise<any>,
    query: {
        dispCtgNo: string,
        pageNo: number,
        pageSize: number,
    },
};

type SearchDisplayGoods = {
    listData: DisplayGoods[],
    totalCount: number,
    pageSize: number,
    offset: number
}
const useDisplayGoodsQuery = ({query,}: DisplayGoodsQueryProps) => {
    // 기존 불러온 페이지 전부 리로드하는 문제: https://velog.io/@hoonnn/tanstack-query-%EA%B5%AC-react-query%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B0-%EB%A7%8C%EB%82%9C-%EC%9D%B4%EC%8A%88-feat.-useInfiniteQuery
    // infinite qauery 스크롤 자동 유지: https://tanstack.com/query/v5/docs/react/guides/scroll-restoration
    // const queryClient = useQueryClient();
    // useEffect(() => {
    //     queryClient.resetQueries({queryKey: ['display', 'goods', query.dispCtgNo]});
    // }, []);

    const {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
    } = useInfiniteQuery({
        queryKey: ['display', 'goods', query.dispCtgNo],
        queryFn: ({pageParam}) => getCategoryGoods({params: {dispCtgNo: query.dispCtgNo, pageNo: pageParam, pageSize: query.pageSize}}),
        initialPageParam: query.pageNo,
        // getNextPageParam: (lastPage, allPages) => lastPage.length > 0 ? allPages.length + 1 : undefined,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            return lastPage?.listData.length === 0 || lastPage?.totalCount % query.pageSize <= 0  ? undefined : lastPageParam + 1;
        },
        // maxPages: 3,
        staleTime: 1000 * 60 // 항상 fresh 상태 값을 가져오지 않는다
        // gcTime: 300 * 1000 // 삭제 타임 / 기본값 5분 inactve 에서 5분이 지나면 삭제 / staleTime 이 gcTime 보다 무조건 작아야 한다.
        // retry: 0 // 조회 실패 시 몇번 진행 할지 카운트
    })


    const goodsList= useMemo(() => {
        return data?.pages.flatMap((page:SearchDisplayGoods) => page.listData);
    }, [data]);

    const currentPageNo = Number(data?.pageParams.at(-1)) ?? 1;

    return { goodsList, isLoading, isError, fetchNextPage, isFetching, hasNextPage, currentPageNo };
}

export default useDisplayGoodsQuery;