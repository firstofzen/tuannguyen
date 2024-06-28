import React, {ReactNode, Suspense} from "react";
import {Header} from "@/components/Header.tsx";
import {Footer} from "@/components/Footer.tsx";
import {cn} from "@/utils/utils.ts";

interface Props {
    children: ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({children}) => {
    return (
        <Suspense fallback={<p className="text-center text-3xl">loading...</p>}>
            <div className={cn("block min-h-[550px]")}>
                <Header/>
                <main className={cn("block mt-[50px] mx-auto w-full max-w-[1650px]")}>{children}</main>
                <Footer/>
            </div>
        </Suspense>

    )
}
