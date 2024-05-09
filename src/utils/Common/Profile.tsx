import { UserDetailsProps } from "../typeScript";

const Profile = ({ details }: UserDetailsProps) => {
    return (
        <div className="bg-box__bg__color rounded-lg">
            <div className="max-w-[520px] mx-auto my-10">
                <div className="max-w-[520px] mx-auto my-10">
                    {details?.map((item) => {
                        return (
                            <div
                                key={item.label}
                                className="flex items-center  justify-between my-5 text-primary font-Roboto"
                            >
                                <label className="md:text-base font-medium text-sm">{item.label}</label>
                                <p>-</p>
                                <p className="md:text-lg text-sm">{item.value}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile