import { Outlet } from "react-router-dom"

import SideBar from "./SideBar";
import { SideBarContentProp } from "../typeScript";

interface SideBarContentProps {
    sideBarContent: SideBarContentProp[]
}
const MainSection = ({ sideBarContent }: SideBarContentProps) => {
    return (
        <section className="flex min-h-screen">
            <div className=" max-w-sm">
                <SideBar sideBarContent={sideBarContent} />
            </div>
            <main className="mt-16 flex-1 overflow-x-auto">
                <Outlet />
            </main>
        </section>
    )
}

export default MainSection