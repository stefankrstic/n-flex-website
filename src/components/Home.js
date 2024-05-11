import { Carousel } from "flowbite-react";

export default function Home() {
    return (
        <div className="bg-neutralSilver">
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
                <Carousel className="w-full mx-auto">
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src="https://www.nisirtech.com/wp-content/uploads/2023/08/img.png" alt=""></img>
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDarkGray md:w-3/4 leading-snug">
                                Lessons and insights{" "}
                                <span className="text-brandPrimary leading-snug">from 10 years</span>
                            </h1>
                            <p className="text-neutralGray text-base mb-8">
                                Where to grow your business as a photogtapher: site ot social media?
                            </p>
                            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDarkGray transition-all duration-300 hover:-translate-y-2">
                                Register
                            </button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src="https://www.nisirtech.com/wp-content/uploads/2023/08/img.png" alt=""></img>
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDarkGray md:w-3/4 leading-snug">
                                Learn and Earn Money {""}
                                <span className="text-brandPrimary leading-snug">in 3 Months</span>
                            </h1>
                            <p className="text-neutralGray text-base mb-8">
                                Where to grow your business as a photogtapher: site ot social media?
                            </p>
                            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDarkGray transition-all duration-300 hover:-translate-y-2">
                                Register
                            </button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
