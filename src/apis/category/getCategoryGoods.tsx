import axios from "axios";

const ROWS_PER_PAGE = '10';
export default async function getCategoryGoods({ params }: { params: { dispCtgNo: string, page: number } }) {
    try {
        const queryObject = {
            sort: "10",
            pageNo: params.page + "",
            pageSize: ROWS_PER_PAGE,
            dispCtgNo: params.dispCtgNo
        }

        const queryParams = new URLSearchParams(queryObject).toString();

        const rep = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/display/v1/goods?${queryParams}`);

        return await rep.data;
    } catch (err) {
        console.error(err);
        return;
    }
}