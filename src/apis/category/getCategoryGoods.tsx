import axios from "axios";


export default async function getCategoryGoods({ params }: { params: { dispCtgNo: string, pageNo: number, pageSize: number } }) {
    try {
        const queryObject = {
            sort: "10",
            pageNo: params.pageNo + "",
            pageSize: params.pageSize + "",
            dispCtgNo: params.dispCtgNo
        }

        const queryParams = new URLSearchParams(queryObject).toString();

        const rep = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/display/v1/goods?${queryParams}`);

        // return rep.data?.listData || [];
        return rep.data;
    } catch (err) {
        console.error(err);
        return;
    }
}