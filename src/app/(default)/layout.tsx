import QueryProvider from "@/app/(default)/_provider/QueryProvider";
import {ReactNode} from "react";
import Header from "@/components/header/CommonHeader";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import ErrorPage from "@/components/common/ErrorPage";


type Props = {children : ReactNode, aside : ReactNode}

export default async function layout({children, aside}: Props) {
    // const queryClient = new QueryClient();
    //
    // await queryClient.prefetchQuery({queryKey: ['displayCategory'], queryFn: getDisplayCategoryList});
    //
    // const dehydrateState = dehydrate(queryClient);

    return (
        <main id="app-container" className="container m-auto">
            <ErrorBoundary errorComponent={ErrorPage}>
                <QueryProvider>
                    {/*<HydrationBoundary state={dehydrateState}>*/}
                        <Header/>
                        { children }
                        { aside }
                    {/*</HydrationBoundary>*/}
                </QueryProvider>
            </ErrorBoundary>
        </main>
    )
}
