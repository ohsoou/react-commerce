import {DisplayGoods} from "@/models/DisplayCategory";
import styled from "./goods.module.css"
import classNames from "classnames";
import Link from "next/link";

const cx = classNames.bind(styled);

export default function GoodsItem({goods}: { goods : DisplayGoods }) {
    return (
        <div className={styled.dpGoods__item}>
            <Link className={styled.dpGoods__item__link} href="/">
                <figure className={styled.dpGoods__item__pic_wrap} >
                    <img
                        className={styled.dpGoods__item__img}
                        alt='goods Image'
                        src={`${process.env.NEXT_PUBLIC_PRODUCT_IMG}/${goods.goodsRepImgPathNm}`}
                    />
                </figure>
                <div className={styled.dpGoods__item__info}>
                    <div className={styled.dpGoods__item__text}>{goods.goodsNm}</div>
                    <div className={styled.dpGoods__item__price}>
                        <span className={styled.dpGoods__item__price_aply}>{goods.aplyPrc}</span>
                        <span className={styled.dpGoods__item__price_sale}>{goods.rcntSalePrc}</span>
                        <span className={styled.dpGoods__item__price_dcRate}>{goods.dcRate}%</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}