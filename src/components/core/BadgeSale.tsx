import {cn} from "@/utils/utils.ts";

type Prop = {
    content: string,
}
export const BadgeSale = (prop: Prop) => {
    return (
        <div className={cn(`h-5 w-12 bg-opacity-10 bg-red-600 rounded-2xl flex justify-center items-center`)}>
           <p className={cn(`text-xs font-bold text-red-600`)}>{prop.content}</p>
        </div>
    )
}