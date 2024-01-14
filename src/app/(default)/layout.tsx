import QueryProvider from "@/app/(default)/_provider/QueryProvider";
import {ReactNode} from "react";
import Header from "@/components/header/CommonHeader";
import {getDisplayCategoryList} from "@/apis/category/getDisplayCategoryList";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import ErrorPage from "@/components/ErrorPage";


type Props = {children : ReactNode, aside : ReactNode}

export default async function layout({children, aside}: Props) {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({queryKey: ['aside', 'displayCategory'], queryFn: getDisplayCategoryList});

    const dehydrateState = dehydrate(queryClient);

    return (
        <main id="app-container">
            <ErrorBoundary errorComponent={ErrorPage}>
                <QueryProvider>
                    <HydrationBoundary state={dehydrateState}>
                        <Header/>
                        { children }
                        { aside }
                    </HydrationBoundary>
                </QueryProvider>
            </ErrorBoundary>
        </main>
    )
}
