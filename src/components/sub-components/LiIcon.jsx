/* eslint-disable react/prop-types */
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["start end", "center center"],
    });
    return (
        <figure className="absolute left-0 stroke-dark dark:stroke-light sm:-left-6">
            <svg
                className="-rotate-90"
                width="75"
                height="75"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-primary stroke-1 fill-none dark:stroke-secondary"
                />
                <motion.circle
                    style={{
                        pathLength: scrollYProgress,
                    }}
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-[5px] fill-white dark:fill-black"
                />
                <circle
                    cx="75"
                    cy="50"
                    r="10"
                    className="stroke-1 fill-primary animate-pulse dark:fill-secondary"
                />
            </svg>
        </figure>
    );
};

export default LiIcon;
