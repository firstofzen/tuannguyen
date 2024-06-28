import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {Product} from "@/model.ts";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const formatNumber = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
export function pagination(page: number, products: Product[], size: number): Product[]|null {
    const cp = Math.ceil(products.length / size)
    if (page <= cp) {
        const rs: Product[] = []
        for (let i = (page * size) - size; i < page * size; i++) {
            if (i < products.length) {
                rs.push(products[i])
            }
        }
        return rs
    } else {
        return null
    }

}
