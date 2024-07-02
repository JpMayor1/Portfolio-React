import Layout from "./sub-components/Layout";
import AnimatedText from "./sub-components/AnimatedText";
import { ContactIcon, LinkArrow } from "./icons/icons";

const Hero = () => {
    return (
        <main className="flex items-center text-dark w-full min-h-screen dark:text-white">
            <Layout className="pt-16">
                <div className="flex items-center justify-center w-full flex-col lg:flex-row lg:mt-3">
                    <div className="w-full mr-0 md:w-1/2">
                        <img
                            src="/programmer.jpg"
                            alt="Programmer"
                            className="w-full h-auto rounded-full lg:inline-block lg:w-[85%]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col items-center self-center text-center lg:text-left mt-5 lg:mt-0">
                        <AnimatedText
                            text="Transforming Ideas into Functional Websites."
                            className=" text-left"
                        />

                        <p className="my-4 text-xs sm:text-sm md:text-base font-medium cursor-default">
                            Full Stack Web Developer with a Passion for Creating
                            Engaging User Experiences
                        </p>
                        <div className="flex items-center self-center lg:self-start">
                            <a
                                href="/JamesPhillipMayor-Resume.pdf"
                                target="_blank"
                                // download={true}
                                className="flex items-center p-2 px-4 md:px-6 text-base md:text-lg rounded-lg font-semibold transition-all  border-2 border-solid border-transparent bg-black text-white hover:bg-white hover:text-black  hover:border-black dark:text-black dark:bg-white hover:dark:bg-black hover:dark:text-white hover:dark:border-white  "
                            >
                                Resume <LinkArrow className={"w-6 ml-1 "} />
                            </a>
                            <a
                                href="mailto:royamsemaj@gmail.com"
                                className="flex items-center gap-1 ml-4 text-lg font-medium capitalize text-dark underline underline-offset-2
                          hover:scale-[1.03] transition-all dark:text-white md:text-base"
                            >
                                Contact <ContactIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    );
};

export default Hero;
