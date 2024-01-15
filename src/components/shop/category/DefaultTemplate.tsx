import GoodsList from "@/components/shop/GoodsList";

type Props = {
    params: {
        dispCtgNo : string,
        dispCtgNm?: string,
    }
}
export default function DefaultTemplate({ params } : Props) {

    return (
        <>
            <div>대충 메뉴</div>
            <GoodsList params={params}/>
        </>
    )
}