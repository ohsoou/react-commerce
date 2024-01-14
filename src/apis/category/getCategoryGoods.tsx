import axios from "axios";

export default async function getCategoryGoods({ params }: { params: { dispCtgNo: string, page: number } }) {
    try {
        const queryObject = {
            sort: "10",
            pageNo: "1",
            pageSize: "20",
            dispCtgNo: params.dispCtgNo
        }

        const queryParams = new URLSearchParams(queryObject).toString();

        const rep = await axios.get(`${process.env.API_URL}/api/display/v1/goods?${queryParams}`);

        console.log("getCategoryGoods " + await rep.data);
        return await rep.data;
    } catch (err) {
        console.error(err);
        return;
    }
}