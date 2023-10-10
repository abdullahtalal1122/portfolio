import { useState } from "react";
import "../../index.css"
import logoImage from "../../images/Subtract.png"
import Atag from "../utlis/Atag";
const NavBar = () => {
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-background dark:bg-gray-800 p-3">
            <div className=" container w-full ">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                        <img
                            src={logoImage}
                            alt="Logo"
                            className="w-16 h-16"
                        />
                        <div className="text-xl font-semibold text-gray-900 dark:text-white">
                            Mumair
                        </div>
                    </div>
                    <div className="hidden md:flex lg:block md:hidden  items-center md:space-x-1 text-12 ">
                        {/* please add spaces between additional classes  */}
                        <Atag content="Home"  additionalClasses="bg-white px-3 py-1" link="#" />
                        <Atag content="About Me" additionalClasses="bg-white px-3 py-1" link="#" />
                        <Atag content="Services" additionalClasses="bg-white px-3 py-1" link="#" />
                        <Atag content="Projects" additionalClasses="bg-white px-3 py-1" link="#" />
                        <Atag content="Testimonials" additionalClasses="bg-white px-3 py-1" link="#" />
                        <Atag content="Contact" additionalClasses="bg-white px-3 py-1" link="#" />
                        <Atag content="Download CV" additionalClasses=" bg-main px-3 py-1 text-white" link="#" />
                       
                    </div>
                    <div className="lg:hidden flex items-center" onClick={toggleMobileMenu}>
                        <button className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition duration-300">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        {isMobileMenuOpen ? 
        <div className="flex flex-col lg:hidden  items-center text-12 ">
            <Atag content="Home"  additionalClasses="bg-white px-3 py-1 w-full text-center" link="#" />
            <Atag content="About Me" additionalClasses="bg-white px-3 py-1 w-full text-center" link="#" />
            <Atag content="Services" additionalClasses="bg-white px-3 py-1 w-full text-center" link="#" />
            <Atag content="Projects" additionalClasses="bg-white px-3 py-1 w-full text-center" link="#" />
            <Atag content="Testimonials" additionalClasses="bg-white px-3 py-1 w-full text-center" link="#" />
            <Atag content="Contact" additionalClasses="bg-white px-3 py-1 w-full text-center" link="#" />
            <Atag content="Download CV" additionalClasses=" bg-main px-3 py-1 text-white w-full text-center" link="#" />
        </div> : null}
        </nav>
    );
};

export default NavBar;
