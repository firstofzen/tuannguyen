import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {cn} from "@/utils/utils.ts";
import Autoplay from "embla-carousel-autoplay";

const imageUrl = ["https://img.lazcdn.com/us/domino/e5289b4532fb752f74f6280ad6824aee.jpg_2200x2200q80.jpg_.webp", "https://img.lazcdn.com/us/domino/e5289b4532fb752f74f6280ad6824aee.jpg_2200x2200q80.jpg_.webp", "https://img.lazcdn.com/us/domino/e5289b4532fb752f74f6280ad6824aee.jpg_2200x2200q80.jpg_.webp"]
export const Advertisement = () => {
    return (
        <Carousel plugins={[
            Autoplay({
                delay: 2700,
            })
        ]} opts={{align: "start", loop: true}} className={cn("m-5")}>
            <CarouselContent>
                {
                    imageUrl.map((url, index) =>
                        <CarouselItem key={index} className={cn("pl-4 ")}>
                            <Card className={cn("mx-auto h-max w-max")}>
                                <CardContent className={cn("flex justify-center items-center")}>
                                    <img src={url} className={cn("h-64 w-full mt-5")}/>
                                </CardContent>
                            </Card>
                        </CarouselItem>)
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext/>
        </Carousel>
    )
}