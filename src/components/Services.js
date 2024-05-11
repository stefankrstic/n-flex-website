import { IoLogoDesignernews } from "react-icons/io";
import { IoLogoFoursquare } from "react-icons/io";
import { IoLogoIonic } from "react-icons/io";
import { IoLogoAlipay } from "react-icons/io5";
import { IoLogoStencil } from "react-icons/io5";
import { BiLogo500Px } from "react-icons/bi";
import { BiLogoMediumOld } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaRegObjectUngroup } from "react-icons/fa6";

export default function Services() {
    const services = [
        {
            id: 1,
            title: "Membership Organisations",
            description:
                "Our membership management software provides full automation of membership renewals and payments",
            icons: <FaPeopleGroup size={40} className="-ml-5" color="#92d197" />,
        },
        {
            id: 2,
            title: "National Associations",
            description:
                "Our membership management software provides full automation of membership renewals and payments",
            icons: <MdOutlineHomeWork size={40} className="-ml-5" color="#92d197" />,
        },
        {
            id: 3,
            title: "Clubs and Groups",
            description:
                "Our membership management software provides full automation of membership renewals and payments",
            icons: <FaRegObjectUngroup size={40} className="-ml-5" color="#92d197" />,
        },
    ];
    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
            <div className="text-center my-8">
                <h2 className="text-4xl text-neutralDarkGray font-semibold mb-2">Our Clients</h2>
                <p className="text-neutralGray">We have been working with some Fortune 900+ clients</p>
            </div>

            <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                <IoLogoDesignernews size={55} />
                <IoLogoFoursquare size={55} />
                <IoLogoIonic size={55} />
                <IoLogoAlipay size={55} />
                <IoLogoStencil size={55} />
                <BiLogo500Px size={55} />
                <BiLogoMediumOld size={55} />
            </div>

            <div className="mt-20 md:w-1/2 mx-auto text-center">
                <h2 className="text-4xl text-neutralDarkGray font-semibold mb-3">
                    Manage your entire community in a single system
                </h2>
                <p className="text-neutralGray">Who is N-Flex suitable for?</p>
            </div>

            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {services.map((services) => (
                    <div
                        key={services.id}
                        className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
                    >
                        <div>
                            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                                {services.icons}
                            </div>
                            <h4 className="text-2xl font-bold text-neutralDarkGray mb-2 px-2">{services.title}</h4>
                            <p className="text-sm text-neutralGray">{services.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
