import { HiArrowRightOnRectangle, HiBanknotes, HiBuildingLibrary, HiCurrencyRupee, HiMiniUserCircle, HiMiniWallet, HiRocketLaunch } from "react-icons/hi2";
import Header from "../utils/Common/Header";
import MainSection from "../utils/Common/MainSection";
import { SideBarContentProp } from "../utils/typeScript";

const CommercialBank = () => {
    const sideBarContent: SideBarContentProp[] = [
        {
            title: "Master Agreement",
            icon: <HiRocketLaunch size={24} />,
            link: 'masteragreement'
        },
        {
            title: "Disbursement",
            icon: <HiCurrencyRupee size={24} />,
            link: 'disbursement'
        },
        {
            title: "Reimbursement",
            icon: <HiBanknotes size={24} />,
            link: 'reimbursement'
        },
        // {
        //     title: "Repayment",
        //     icon: <HiCreditCard size={24} />,
        //     link: 'repayment-structure'
        // },
        {
            title: "Repayment From NBFC",
            icon: <HiMiniWallet size={24} />,
            link: "repayment-from-nbfc"
        },
        {
            title: "Management Fees",
            icon: <HiBuildingLibrary size={24} />,
            link: "management-fees"
        },
        {
            title: "Profile",
            icon: <HiMiniUserCircle size={24} />,
            link: 'settings'
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

export default CommercialBank