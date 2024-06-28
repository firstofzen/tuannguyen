import {DefaultLayout} from "@/layouts/Default.tsx";
import {cn, pagination} from "@/utils/utils.ts";
import {FlipWords} from "@/components/ui/FlipWord.tsx";
import {motion} from "framer-motion";
import {Category, CategoryButton, Product} from "@/model.ts";
import {PAGE_SIZE, products} from "@/constant.ts";
import {useEffect, useState} from "react";
import {ProductCard} from "@/components/core/ProductCard.tsx";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import {Help} from "@/components/core/Help.tsx";
import {Advertisement} from "@/components/core/Advertisement.tsx";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel.tsx";
import {ComputerIcon, Laptop2Icon, SmartphoneIcon, TabletIcon, WatchIcon} from "lucide-react";

const word1s = ['Uy_Tin', 'Chat_Luong', 'Chinh_Hang']


const categories: CategoryButton[] = [
    {name: Category.Phone, icon: <SmartphoneIcon className={cn("text-xs")}/>},
    {name: Category.Tablet, icon: <TabletIcon className={cn("text-xs")}/>},
    {name: Category.Laptop, icon: <Laptop2Icon className={cn("text-xs")}/>},
    {name: Category.Desktop, icon: <ComputerIcon className={cn("text-xs")}/>},
    {name: Category.SmartWatch, icon: <WatchIcon className={cn("text-xs")}/>}
]

const helps = [{
    name: 'Need Help?',
    avatar: '',
    link: {
        name: 'Contact !',
        path: '/help'
    }
}, {
    name: 'Need Help?',
    avatar: '',
    link: {
        name: 'Contact !',
        path: '/help'
    }
}]


export const Home = () => {
    const totalPage = products.length >= PAGE_SIZE ? Math.ceil(products.length / PAGE_SIZE) : 1
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [category, setCategory] = useState<Category>(Category.Phone)
    console.log(category)
    const [currentProducts, setCurrentProducts] = useState<Product[] | null>(pagination(currentPage, products, PAGE_SIZE))
    useEffect(() => {
        setCurrentProducts(pagination(currentPage, products, PAGE_SIZE))
    }, [currentPage]);
    return (
        <DefaultLayout>
            <section className={cn("block h-max w-[95svw] mx-auto")}>
                <div className={cn("flex-col min-h-[30svh] flex lg:flex-row lg:items-center justify-around")}>
                    <h1 className={cn("text-xl mx-auto font-bold lg:text-4xl text-start m-5 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400 dark:from-zinc-700 dark:to-zinc-200")}>
                        Tuan Nguyen Store
                        <br className={cn("")}/>
                        Cach Tot Nhat De Ban Mua San Pham
                        <FlipWords words={word1s}/>
                    </h1>
                    <div className={cn("flex flex-col gap-2")}>
                        {
                            helps.map((e, i) => <Help key={i} avatar={e.avatar} name={e.name} link={e.link}/>)
                        }
                    </div>
                </div>
                <Advertisement/>
                <motion.div initial={{width: 0}} animate={{width: '90svw'}} transition={{duration: 0.9, ease: "linear"}}
                            className={cn("h-[1px] mt-5 mx-auto  bg-slate-400 dark:bg-gray-600")}></motion.div>
                <div className={cn("mt-5 w-[90svw] h-max lg:[1080px] bg-gray-100 dark:bg-gray-900 mx-auto ")}>
                    <h1 className={cn("text-3xl text-center m-5 font-medium")}>
                        Tat Ca Cac San Pham
                    </h1>
                    <Carousel opts={{loop: true}} className={cn("w-full ml-5 max-w-2xl")}>
                        <CarouselContent className={cn("")}>
                            {categories.map((e, i) =>
                                <CarouselItem key={i} onClick={() => setCategory(e.name)}
                                              className={cn("basis-1/3 md:basis-1/6")}>
                                    <div
                                        className={cn("w-24 flex justify-center items-center  h-7 border-[1px] border-gray-700 rounded-2xl dark:border-gray-200")}>
                                        {e.icon}
                                        <p className={cn("text-sm pl-1")}>{e.name}</p>
                                    </div>
                                </CarouselItem>
                            )}
                        </CarouselContent>
                    </Carousel>
                    <div className={cn(" grid grid-cols-auto_fit gap-1 place-items-center mt-5")}>
                        {
                            currentProducts?.map((e, i) => <ProductCard key={i} product={e}/>)}
                    </div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious/>
                            </PaginationItem>
                            {
                                Array.from({length: Math.ceil(totalPage)}).map((_, i) =>
                                    <PaginationItem key={i}><PaginationLink className={cn("text-xs")}
                                                                            onClick={() => setCurrentPage(i + 1)}>{i + 1}</PaginationLink></PaginationItem>)
                            }
                            <PaginationItem>
                                <PaginationNext/>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
                <div className={cn("")}>

                </div>
            </section>
        </DefaultLayout>
    )
}