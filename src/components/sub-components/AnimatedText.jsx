/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
};

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

const AnimatedText = ({ text, className = "" }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start("animate");
        } else {
            controls.start("initial");
        }
    }, [controls, inView]);

    return (
        <div
            ref={ref}
            className="w-full mx-auto py-0 sm:py-2 flex items-center justify-center text-center overflow-hidden cursor-default"
        >
            <motion.h1
                variants={quote}
                initial="initial"
                animate={controls}
                className={`inline-block w-full text-black font-bold capitalize text-3xl sm:text-5xl text-center dark:text-white ${className}`}
            >
                {text.split(" ").map((word, index) => (
                    <motion.span
                        variants={singleWord}
                        key={word + "-" + index}
                        className="inline-block"
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default AnimatedText;
