
export interface DisplayCategory {
    dispCtgNo?: string;
    dispCtgNm?: string;
    dispSeq?: number;
    uprDispCtgNo?: string;
    lrgCtgNo?: string;
    midCtgNo?: string;
    smlCtgNo?: string;
    thnCtgNo?: string;
    leafYn?: string;
    depth?: string;
    subCategoryList?: Array<DisplayCategory>;
}
export interface DisplayGoods {
    goodsNo?: string;
    goodsNm?: string;
    brandNo?: string;
    buyrAgeLmtCd?: string;
    saleStatCd?: string;
    rcntSalePrc?: number;
    salePrc?: number;
    aplyPrc?: number;
    dispCtgNo?: string;
    goodsRevCnt?: string;
    dcRateAmt?: number;
    dcRate?: number;
    wishListCnt?: string;
    goodsRepImgPathNm?: string;
    adlCertiYn?: string;
    iconList?: Array<string>;
}
