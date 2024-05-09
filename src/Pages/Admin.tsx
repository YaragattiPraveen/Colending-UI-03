
import { HiArrowRightOnRectangle, HiKey } from "react-icons/hi2";
import { SideBarContentProp } from "../utils/typeScript";
import Header from "../utils/Common/Header";
import MainSection from "../utils/Common/MainSection";

const AdminWrapper = () => {
    const sideBarContent: SideBarContentProp[] = [
        {
            title: "Licence Key",
            icon: <HiKey size={24} />,
            link: 'license-key'
        },
        {
            title: "Sign Out",
            icon: <HiArrowRightOnRectangle size={24} />,
            link: '/'
        },
    ];
    return (
        <>
            <Header />
            <MainSection sideBarContent={sideBarContent} />
        </>
    )
}

export default AdminWrapper