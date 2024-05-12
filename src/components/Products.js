import { IoLogoDesignernews } from "react-icons/io";
import { IoLogoFoursquare } from "react-icons/io";
import { IoLogoIonic } from "react-icons/io";
import { IoLogoAlipay } from "react-icons/io5";
import { IoLogoStencil } from "react-icons/io5";
import { BiLogo500Px } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

export default function Products() {
    return (
        <div>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img
                            src="https://www.nobill.sk/wp-content/uploads/2022/12/undraw_Personal_email_re_4lx7.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl text-neutralDarkGray font-semibold mb-4 md:w-4/5">
                            How to design your site footer like we did
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
                    <div className="md:w-1/3">
                        <img
                            src="https://s.yimg.com/ny/api/res/1.2/bmViAakg8qCXf_MNe6Z1sg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/ap_finance_articles_694/003150f26cad779fd07ec803ccd868a4"
                            alt=""
                        />
                    </div>
                    <div className="md:w-2/3 mx-auto">
                        <div>
                            <p className="md:w-4/5 text-sm text-neutralGray mb-8 leading-7">
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the middle of text. All the
                                Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.{" "}
                            </p>
                            <h5 className="text-brandPrimary text-xl font-semibold mb-2">Tim Smith</h5>
                            <p className="text-base text-neutralGray mb-8">British Dragon Boat Ricing Association</p>
                            <div>
                                <div className="flex items-center gap-8 flex-wrap">
                                    <IoLogoDesignernews size={35} className="cursor-pointer" />
                                    <IoLogoFoursquare size={35} className="cursor-pointer" />
                                    <IoLogoIonic size={35} className="cursor-pointer" />
                                    <IoLogoAlipay size={35} className="cursor-pointer" />
                                    <IoLogoStencil size={35} className="cursor-pointer" />
                                    <BiLogo500Px size={35} className="cursor-pointer" />
                                    <div className="flex items-center gap-8">
                                        <a href="" className="font-bold text-brandPrimary hover:text-neutralDarkGray">
                                            Meet all customers <FaArrowRight className="inline-block ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
