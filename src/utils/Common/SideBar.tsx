import { Link, useLocation } from "react-router-dom"
import { SideBarContentProp } from "../typeScript";

interface NBFCWrapperProps {
    sideBarContent: SideBarContentProp[];
}

const SideBar: React.FC<NBFCWrapperProps> = ({ sideBarContent }) => {
    const location = useLocation().pathname.split("/");
    return (
        <aside className="sticky top-16 h-[calc(100vh-theme(spacing.16))] w-60 overflow-y-auto bg-bgColor shadow-md dark:bg-bgColor">
            <ul className="space-y-2 font-medium px-3 mt-6">
                {sideBarContent?.map((content: SideBarContentProp, ind: number) => (
                    <li key={ind}>
                        <Link
                            to={content.link}
                            className={`${location[location.length - 1] === content.link ? "flex items-center p-2 rounded-lg text-whiteColor bg-primary " : "flex items-center p-2 rounded-lg text-primary hover:text-whiteColor dark:group-hover:text-whiteColor hover:bg-primary dark:hover:bg-primary group"}`}
                        >
                            {content.icon}
                            <span className="ms-3">{content.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default SideBar