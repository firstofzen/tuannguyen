import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {cn, formatNumber} from "@/utils/utils.ts";
import {BadgeSale} from "@/components/core/BadgeSale.tsx";
import {Link} from "react-router-dom";
import {Product} from "@/model.ts";
import React from "react"

type Props = {
    product: Product
}

export const ProductCard: React.FC<Props>= ({product}) => {

    return (
        <Link to={`/product/${product.id}`}><Card className={cn("h-96 w-72 inline-block mt-5  drop-shadow-2xl")}>
            <CardHeader className={cn("flex justify-center items-center")}>
                <img src={product.avatar} className={cn("h-64 aspect-auto w-52")}/>
            </CardHeader>
            <CardContent className={cn("text-center")}>
                <p>{
                    product.name.length <= 25 ? product.name : product.name.slice(0, 26).concat("...")
                }</p>
                <span className={cn("mt-2")}>
                    <p className={cn("number h-max w-max mx-auto text-red-600 text-lg font-semibold")}>
                        {
                            formatNumber(product.price - (product.price * 10 / 100))
                        }</p>
                    <div className={cn("flex justify-center items-center mx-auto w-[60%]")}>
                        <p className={cn("number h-max w-max mx-auto text-sm line-through")}>{formatNumber(product.price)}</p>
                        <BadgeSale content={"-20%"}/>
                    </div>
                </span>
            </CardContent>
        </Card>
        </Link>
    )
}