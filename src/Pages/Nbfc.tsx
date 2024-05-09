import Header from "../utils/Common/Header";
import MainSection from "../utils/Common/MainSection";
import { HiArrowRightOnRectangle, HiBanknotes, HiBuildingLibrary, HiCheckBadge, HiCurrencyRupee, HiMiniInformationCircle, HiMiniUserCircle, HiMiniWallet, HiRocketLaunch, HiSquares2X2 } from "react-icons/hi2";
import { SideBarContentProp } from "../utils/typeScript";


const NBFCWrapper = () => {
    const sideBarContent: SideBarContentProp[] = [
        {
            title: "Parameter Management",
            icon: <HiSquares2X2 size={24} />,
            link: 'parameterbuilder'
        },
        {
            title: "Information Management",
            icon: <HiMiniInformationCircle size={24} />,
            link: 'infomanagement'
        },
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
            title: "Repayment to Bank",
            icon: <HiMiniWallet size={24} />,
            link: "repayment-to-bank"
        },
        {
            title: "Management Fees",
            icon: <HiBuildingLibrary size={24} />,
            link: "management-fees"
        }
        ,
        {
            title: "Product Management",
            icon: <HiCheckBadge size={24} />,
            link: "product-management"
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

export default NBFCWrapper