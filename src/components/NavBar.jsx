// import { useState } from "react";
import { motion } from "framer-motion";
import {
    FacebookIcon,
    GithubIcon,
    LinkedInIcon,
    MoonIcon,
    SunIcon,
    TiktokIcon,
} from "./icons/icons";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white dark:bg-black h-[80px] w-screen flex items-center justify-between px-20">
            <nav
                className="flex items-center justify-center flex-wrap
            "
            >
                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
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
                    <GithubIcon className={`dark:text-white`} />
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

            <h1 className="text-black text-xl font-bold dark:text-white">
                JP.
                <span className="text-primary dark:text-secondary">M</span>
            </h1>

            <nav className="text-black dark:text-white flex items-center justify-center gap-3">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
};

export default NavBar;
