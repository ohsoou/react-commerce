import {DisplayGoods} from "@/models/DisplayCategory";
import {type DefaultError, InfiniteData, QueryFunctionContext, type QueryKey} from "@tanstack/query-core";
import {useMemo} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import getCategoryGoods from "@/apis/category/getCategoryGoods";

type DisplayGoodsQueryProps = {
    queryFn?: (context?: QueryFunctionContext) => Promise<any>,
    query: {
        dispCtgNo: string,
        pageNo?: number,
        pageSize: number,
    },
};
const useDisplayGoodsQuery = ({queryFn, query,}: DisplayGoodsQueryProps) => {
    // console.log("useDisplayGoodsQuery")
    const {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isFetching, // 쿼리를 가져오고 있는지
    } = useInfiniteQuery({
        queryKey: ['display', 'goods', query.dispCtgNo],
        queryFn: ({pageParam = 1}) => getCategoryGoods({params: { dispCtgNo: query.dispCtgNo, pageNo: pageParam, pageSize: query.pageSize }}),
        initialPageParam: 1,
        // getNextPageParam: (lastPage, allPages) => lastPage.length > 0 ? allPages.length + 1 : undefined,
        getNextPageParam: (lastPage, allPages, pageParam) => {
            const nextPage = pageParam + 1;

            return lastPage?.listData.length === 0 || lastPage?.totalCount % query.pageSize <= 0  ? undefined : nextPage;
        },
        staleTime: 60 * 1000, // 캐시 유지 타임 / 기본값 0 이며 fresh -> stale / 60 * 1000 = 1분
        // staleTime: Infinity // 항상 fresh 상태 값을 가져오지 않는다
        // gcTime: 300 * 1000 // 삭제 타임 / 기본값 5분 inactve 에서 5분이 지나면 삭제 / staleTime 이 gcTime 보다 무조건 작아야 한다.
        // initialData: () => [], // 초기 데이터
        // retry: 0 // 조회 실패 시 몇번 진행 할지 카운트
        // enabled: // 실행되는 조건
    })

    // const pages= useMemo(() => {
    //     return data?.pages
    // }, [data]);

    return { data: data?.pages , isLoading, isError, fetchNextPage, isFetching, hasNextPage, isFetchingNextPage };
}

export default useDisplayGoodsQuery;