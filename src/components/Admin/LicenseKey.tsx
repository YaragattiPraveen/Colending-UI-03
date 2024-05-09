import { useState } from "react"
import NBFC_License from "./Licenses/NBFC_License"
import CommercialBank_License from "./Licenses/CommercialBank_License"

const LicenseKey = () => {
    const [currentTab, setCurrentTab] = useState<number>(1)
    return <>
        <main className="flex-col px-4 overflow-y-auto">
            <h3 className="text-primary font-semibold lg:text-2xl">License key Generator</h3>
            <div className="flex items-center justify-end gap-5">
                <span className={`bg-bgColor cursor-pointer shadow-md rounded-md px-10 py-1 ${currentTab === 1 ? " border-b-2 border-primary" : ''}`} onClick={() => setCurrentTab(1)}>
                    <span className={`text-primary font-semibold text-base`}>NBFC</span>
                </span>
                <span className={`bg-bgColor cursor-pointer shadow-md rounded-md px-10 py-1 ${currentTab === 2 ? " border-b-2 border-primary" : ''}`} onClick={() => setCurrentTab(2)}>
                    <span className={`text-primary font-semibold text-base `}>Commercial Bank</span>
                </span>
            </div>
            {
                currentTab === 1 ? <NBFC_License /> : <CommercialBank_License />
            }
        </main>
    </>
}

export default LicenseKey