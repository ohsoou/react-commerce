import GoodsList from "@/components/shop/GoodsList";

type Props = {
    params: {
        dispCtgNo : string
    }
}
export default function DefaultTemplate({ params } : Props) {

    return (
        <>
            <GoodsList params={params}/>
        </>
    )
}