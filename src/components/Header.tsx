import {cn} from "@/utils/utils.ts";
import {motion, useAnimate, useMotionValueEvent, useScroll,} from "framer-motion";
import {BadgeInfo, CircleUserRound, HomeIcon, MessageCircle, MoonIcon, Settings2} from "lucide-react";
import {useEffect, useState} from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";

const iconStyle = "text-zinc-800 dark:text-zinc-200";

export const Header = () => {
    const darkMode = () => {
        const body = document.querySelector("body");
        if (body?.classList.contains("dark")) {
            body.classList.remove("dark");
        } else {
            body?.classList.toggle("dark");
        }
    };
    const {scrollYProgress} = useScroll();
    const [isScrollUp, setIsScrollUp] = useState<boolean>(true);
    useMotionValueEvent(scrollYProgress, "change", (current) => {
        const direction = current! - scrollYProgress.getPrevious()!;
        if (direction < 0) {
            setIsScrollUp(true);
        } else {
            setIsScrollUp(false);
        }
    });
    const [headerRef, headerAnimate] = useAnimate();
    useEffect(() => {
        if (!isScrollUp) {
            headerAnimate(headerRef.current, {
                y: -50
            }, {
                duration: 0.3, ease: 'anticipate'
            })
        } else {
            headerAnimate(headerRef.current, {
                y: 0
            }, {
                duration: 0.3, ease: 'anticipate'
            })
        }
    }, [headerAnimate, headerRef, isScrollUp]);
    return (
        <motion.header
            ref={headerRef}
            className={cn(
                "fixed top-[4px] mx-auto inset-x-0 h-[45px] max-w-[750px] w-[80%] z-10  flex items-center justify-center"
            )}
        >
            <motion.ul
                animate={{width: "96%"}}
                transition={{delay: 0.7, duration: 0.7, ease: "anticipate"}}
                className={cn(
                    "w-[20%] h-[96%] backdrop-blur-xl rounded-3xl border-2 border-zinc-700 dark:border-slate-300 flex items-center justify-around"
                )}
            >

                <motion.li
                    initial={{display: "none"}}
                    animate={{display: "block"}}
                    transition={{delay: 0.9}}
                    className={cn(iconStyle)}
                >
                    <a href={"/"}><HomeIcon/></a>
                </motion.li>
                <motion.li
                    initial={{display: "none"}}
                    animate={{display: "block"}}
                    transition={{delay: 0.9}}
                    className={cn(iconStyle)}
                >
                    <a href={"/about"}><BadgeInfo/></a>
                </motion.li>
                <motion.li
                    animate={{rotate: "360deg"}}
                    transition={{duration: 0.7, ease: "anticipate", delay: 0.2}}
                    className={cn(iconStyle + "z-3")}
                >
                    logo
                </motion.li>
                <motion.li
                    onClick={darkMode}
                    initial={{display: "none"}}
                    animate={{display: "block"}}
                    transition={{delay: 0.9}}
                    className={cn(iconStyle)}
                >
                    <MoonIcon/>
                </motion.li>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <motion.li
                            initial={{display: "none"}}
                            animate={{display: "block"}}
                            transition={{delay: 0.9}}
                            className={cn(iconStyle)}
                        >
                            <Settings2/>
                        </motion.li>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel><span className={cn("flex gap-3 items-center ")}>
                          <CircleUserRound/>
                           <p>Help</p>
                       </span></DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>
                            <span className={cn("flex gap-3 items-center")}>
                                <MessageCircle />
                                <p>Chat</p>
                            </span>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </motion.ul>
        </motion.header>
    );
};
