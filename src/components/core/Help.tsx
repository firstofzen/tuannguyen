import {cn} from "@/utils/utils.ts";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {HelpContent} from "@/model.ts";


export const Help = (content: HelpContent) => {
    return (
        <div className={cn("flex items-center justify-start gap-2")}>
            <Avatar>
                <AvatarImage src={content.avatar}/>
                <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <div className={cn("flex flex-col")}>
                <p className={cn("text-[0.75em] font-semibold")}>{content.name}</p>
                <a className={cn("text-[0.65em] text-blue-500")} href={content.link.path}>{content.link.name}</a>
            </div>
        </div>
    )
}