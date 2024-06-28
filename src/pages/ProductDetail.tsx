import {DefaultLayout} from "@/layouts/Default.tsx";
import {useParams} from "react-router-dom";
import {cn} from "@/utils/utils.ts";
import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {ParameterProduct} from "@/model.ts";
import {WalletIcon} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Label} from "@/components/ui/Label.tsx";
import {Input} from "@/components/ui/Input.tsx";
import {ButtonShimmer} from "@/components/ui/ButtonShimmer.tsx";
import {ButtonBorderMagic} from "@/components/ui/ButtonBorderMagic.tsx";

const pp: ParameterProduct = {
    monitor: "4.7-inch (diagonal) widescreen LCD Multi-Touch display with IPS technology",
    camera: "12-megapixel camera",
    cpu: "A9 chip with 64-bit architecture",
    os: "ios15",
    ram: "14GB",
    ssd: "234GB",
    pin: "143Mph",
}
export const ProductDetail = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <DefaultLayout>
            <section className={cn("block h-max mx-auto lg:grid grid-cols-3 w-[85svw]")}>
                <div className={cn("col-start-1 col-end-3 ")}>
                    <Carousel className={cn("h-full w-full")}>
                        <CarouselContent className={cn("h-full w-full flex justify-center items-center")}>
                            <img className={cn("h-64 aspect-auto w-64 lg:h-96 lg:w-96")}
                                 src={"data:image/jpeg;base64,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"}/>
                        </CarouselContent>
                        <CarouselNext/>
                        <CarouselPrevious/>
                    </Carousel>
                </div>

                <div className={cn("block col-start-3 col-end-4 ")}>
                    <h1 className={cn("text-4xl text-center m-5")}>iPhone15Prm</h1>
                    <div className={cn("flex items-center justify-between")}>
                        <p className={cn("text-xs font-light text-zinc-900 dark:text-zinc-50")}>Từ 28.999.000đhoặc
                            1.181.000đ/thángmỗi tháng trong 24 tháng*</p>
                        <Dialog>
                            <DialogTrigger>
                                <ButtonBorderMagic content={"Mua Ngay"} />
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Iphone 15 Promax</DialogTitle>
                                    <DialogDescription>
                                        <form className={cn("my-8 flex flex-col gap-5")}>
                                            <div>
                                                <Label htmlFor={"email"}>Email Address</Label>
                                                <Input type={"email"} placeholder={"enter email here..."}/>
                                            </div>
                                            <div>
                                                <Label htmlFor={"number"}>So Dien Thoai</Label>
                                                <Input type={"number"} placeholder={"so dien thoai..."}/>

                                            </div>
                                            <ButtonShimmer content={"Dat Hang"}/>
                                        </form>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <ul className={cn("mt-5")}>
                        {
                            Object.entries(pp).map(([key, value]) =>
                                <li className={cn("h-max w-full p-2  border-t border-zinc-400 dark:border-zinc-500")}>
                                    <p className={cn("text-sm mx-auto text-start font-semibold")}>{key}: {value}</p>
                                </li>)

                        }

                    </ul>
                </div>

                <div className={cn("block p-5 col-start-1 col-end-4 bg-gray-100 dark:bg-gray-900 h-max")}>
                    <h1 className={cn("text-center mb-5 font-semibold")}>Tuan Nguyen Store Different</h1>
                    <div className={cn("block lg:flex justify-center items-center")}>
                        <div className={cn("flex justify-center m-2 items-center")}>
                            <WalletIcon className={cn("mr-3 text-green-600")}/>
                            <div className={cn(" block")}><p className={cn("text-sm font-medium")}>Flexible ways to
                                pay</p>
                                <p className={cn("text-xs font-light")}>Plus No Cost EMI available</p></div>
                        </div>
                        <div className={cn("flex justify-center m-2  items-center")}>
                            <WalletIcon className={cn("mr-3 text-violet-600")}/>
                            <div className={cn(" block")}><p className={cn("text-sm font-medium")}>Flexible ways to
                                pay</p>
                                <p className={cn("text-xs font-light")}>Plus No Cost EMI available</p></div>
                        </div>
                        <div className={cn("flex justify-center m-2 items-center")}>
                            <WalletIcon className={cn("mr-3 text-red-600")}/>
                            <div className={cn(" block")}><p className={cn("text-sm font-medium")}>Flexible ways to
                                pay</p>
                                <p className={cn("text-xs font-light")}>Plus No Cost EMI available</p></div>
                        </div>
                    </div>
                </div>

                <div className={cn("block col-start-1 col-end-4 ")}>
                    <div className={cn("h-52")}></div>
                </div>
            </section>
        </DefaultLayout>
    )
}