import GoodsList from "@/components/shop/GoodsList";

type Props = {
    dispCtgNo : string,
    siteNo?: string,
}
export default function DefaultTemplate({ dispCtgNo, siteNo } : Props) {

    return (
        <>
            <div>대충 메뉴</div>
            <GoodsList dispCtgNo={dispCtgNo}/>
        </>
    )
}