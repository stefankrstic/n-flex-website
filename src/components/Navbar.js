import { useEffect, useState } from "react";
import { GiFlexibleStar } from "react-icons/gi";
import { Link } from "react-scroll";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        };
    });

    const navItems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },
    ];

    return (
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
            <nav
                className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}
            >
                <div className="flex justify-between items-center text-base gap-8">
                    <a href="" className="text-2xl font-semibold flex items-center space-x-3 text-brandPrimary">
                        <GiFlexibleStar className="w-10 inline-block itmes-center" /> N-Flex
                    </a>

                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map(({ link, path }) => (
                            <Link
                                to={path}
                                spy={true}
                                smooth={true}
                                key={path}
                                offset={-100}
                                className="block text-base text-gray900 hover:text-brandPrimary  cursor-pointer"
                            >
                                {link}
                            </Link>
                        ))}
                    </ul>

                    <div className="space-x-12 hidden lg:flex items-center">
                        <a href="" className="hidden lg:flex  items-center text-brandPrimary hover:text-gray900">
                            Login
                        </a>
                        <button className="bg-brandPrimary text-[color:white] py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDarkGray">
                            Sign up
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-neutralDarkGray focus:outline-none focus:text-gray-500"
                        >
                            {isMenuOpen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                <div
                    className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}
                >
                    {navItems.map(({ link, path }) => (
                        <Link
                            to={path}
                            spy={true}
                            smooth={true}
                            key={path}
                            offset={-100}
                            className="block text-base text-white hover:text-neutralDarkGray cursor-pointer"
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
