"use client"


import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactNode, useState} from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export default function QueryProvider({children, }: { children: ReactNode }) {
    const  [client] = useState(new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retryOnMount: true,
                refetchOnReconnect: false,
                retry: false,
            }
        }
    }));

    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}