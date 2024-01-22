import useCustomBack from "@/hooks/useCustomBack";

type Props = {
    params: { goodsNo: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
export default function page({params, searchParams} : Props) {

    return (
        <>
            goods {params.goodsNo}
        </>
    )
}