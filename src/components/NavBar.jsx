/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo } from "react";
import {
    FacebookIcon,
    GithubIcon,
    LinkedInIcon,
    MoonIcon,
    SunIcon,
    TiktokIcon,
} from "./icons/icons";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "", isActive }) => {
    return (
        <a href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block dark:bg-white  bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    isActive ? "w-full" : "w-0"
                }`}
            >
                &nbsp;
            </span>
        </a>
    );
};

const CustomMobileLink = ({
    href,
    title,
    className = "",
    isActive,
    toggle,
}) => {
    const handleClick = () => {
        toggle();
    };

    return (
        <a
            href={href}
            className={`${className} relative group text-white dark:text-black my-2`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[1px] inline-block dark:bg-black bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    isActive ? "w-full" : "w-0"
                }`}
            >
                &nbsp;
            </span>
        </a>
    );
};

const NavBar = () => {
    const [hidden, setHidden] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [mode, setMode] = useThemeSwitcher();
    const [activeSection, setActiveSection] = useState("");

    const sections = useMemo(
        () => [
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
        ],
        []
    );

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map((section) =>
                document.getElementById(section.id)
            );
            const currentSection = sectionElements.find(
                (section) =>
                    section.getBoundingClientRect().top <=
                        window.innerHeight / 2 &&
                    section.getBoundingClientRect().bottom >=
                        window.innerHeight / 2
            );
            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.header
            variants={{ visible: { y: 0 }, hidden: { y: -100 } }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 w-full lg:px-32 px-8 py-8 font-medium flex items-center justify-center dark:text-white z-10 bg-white dark:bg-black shadow-md transition-all duration-300 ease-out"
        >
            {/* Laptop/Desktop Menu */}
            <div className="relative w-full justify-between items-center hidden lg:flex">
                {/* Social Media */}
                <nav className="flex items-center justify-center flex-wrap z-30">
                    <button
                        onClick={() =>
                            setMode(mode === "light" ? "dark" : "light")
                        }
                        className={`mr-3 flex items-center justify-center rounded-full p-1 ${
                            mode === "light"
                                ? "bg-black text-white"
                                : "bg-white text-black"
                        }`}
                    >
                        {mode === "dark" ? (
                            <MoonIcon className={"fill-black"} />
                        ) : (
                            <SunIcon className={"fill-black"} />
                        )}
                    </button>
                    <motion.a
                        href="https://github.com/JpMayor1"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/james-phillip-mayor"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href="https://web.facebook.com/jamesphillip.mayor.7"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <FacebookIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.tiktok.com/@james.m010"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <TiktokIcon />
                    </motion.a>
                </nav>

                <motion.div className="text-center pointer-events-none absolute inset-0">
                    <a
                        href={"/"}
                        className="text-xl font-bold dark:text-white pointer-events-auto"
                    >
                        JP.
                        <span className="text-primary dark:text-secondary">
                            M
                        </span>
                    </a>
                </motion.div>

                <nav>
                    {sections.map((section) => (
                        <CustomLink
                            key={section.id}
                            href={`/#${section.id}`}
                            title={section.label}
                            className="mx-4"
                            isActive={activeSection === section.id}
                        />
                    ))}
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className="relative w-full lg:hidden">
                <button
                    className="flex flex-col justify-center items-center lg:hidden mt-2"
                    onClick={handleClick}
                >
                    <span
                        className={`bg-black dark:bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                            isOpen
                                ? "rotate-45 translate-y-1"
                                : "-translate-y-0.5"
                        }`}
                    ></span>
                    <span
                        className={`bg-black dark:bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm m-0.5 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    ></span>
                    <span
                        className={`bg-black dark:bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
                            isOpen
                                ? "-rotate-45 -translate-y-1"
                                : "translate-y-0.5"
                        }`}
                    ></span>
                </button>
                <motion.div className="text-center pointer-events-none absolute inset-0">
                    <a
                        href={"/"}
                        className="text-xl font-bold dark:text-white pointer-events-auto"
                    >
                        JP.
                        <span className="text-primary dark:text-secondary">
                            M
                        </span>
                    </a>
                </motion.div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-black/90 dark:bg-white/75 rounded-lg backdrop-blur-md py-32"
                >
                    <nav
                        className="flex items-center justify-center flex-wrap mt-2 z-30
          "
                    >
                        <button
                            onClick={() =>
                                setMode(mode === "light" ? "dark" : "light")
                            }
                            className={`mr-3 flex items-center justify-center rounded-full p-1 z-50 ${
                                mode === "light"
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                            }`}
                        >
                            {mode === "dark" ? (
                                <MoonIcon className={"fill-dark"} />
                            ) : (
                                <SunIcon className={"fill-dark"} />
                            )}
                        </button>
                        <motion.a
                            href="https://github.com/JpMayor1"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 sm:mr-2 bg-white rounded-full dark:bg-black"
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/james-phillip-mayor"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 sm:mr-2"
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a
                            href="https://web.facebook.com/jamesphillip.mayor.7"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 sm:mr-2"
                        >
                            <FacebookIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.tiktok.com/@james.m010"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 sm:mr-2"
                        >
                            <TiktokIcon />
                        </motion.a>
                    </nav>
                    <nav className="flex items-center flex-col justify-center ">
                        {sections.map((section) => (
                            <CustomMobileLink
                                key={section.id}
                                href={`/#${section.id}`}
                                title={section.label}
                                className="mx-4"
                                isActive={activeSection === section.id}
                                toggle={handleClick}
                            />
                        ))}
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
};
export default NavBar;
