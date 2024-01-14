import DefaultTemplate from "@/components/shop/category/DefaultTemplate";

type Props = {
    params: { dispCtgNo: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({params, searchParams } : Props)  {

    return (
        <>
            shop/category {params.dispCtgNo}
            <DefaultTemplate params={params}/>
        </>
    )
}