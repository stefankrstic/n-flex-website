import { FaUserGroup } from "react-icons/fa6";
import { FaRegObjectUngroup } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";

export default function About() {
    return (
        <div>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img src="https://dataverte.com/wp-content/uploads/2022/10/work-with-the-best.png" alt="" />
                    </div>
                    <div>
                        <h2 className="text-4xl text-neutralDarkGray font-semibold mb-4 md:w-4/5">
                            The unseen of spending three years at Pixelgrade
                        </h2>
                        <p className="md:w-3/4 text-neutralGray mb-8">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.{" "}
                        </p>
                        <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDarkGray transition-all duration-300 hover:-translate-y-2">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl text-neutralDarkGray font-semibold mb-4 md:w-2/3">
                            Helping a local <br /> <span className="text-brandPrimary">business reinvent itself</span>
                        </h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>
                    <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <FaUserGroup size={50} className="text-brandPrimary" />
                                <div>
                                    <h4 className="text-2xl text-neutralDarkGray font-semibold">2,456,789</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaRegObjectUngroup size={50} className="text-brandPrimary" />
                                <div>
                                    <h4 className="text-2xl text-neutralDarkGray font-semibold">58,832</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <MdOutlinePayment size={50} className="text-brandPrimary" />
                                <div>
                                    <h4 className="text-2xl text-neutralDarkGray font-semibold">1,956,789</h4>
                                    <p>Payments</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <TbHandClick size={50} className="text-brandPrimary" />
                                <div>
                                    <h4 className="text-2xl text-neutralDarkGray font-semibold">939,234</h4>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
