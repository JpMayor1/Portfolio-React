/* eslint-disable react/prop-types */
import AnimatedText from "./sub-components/AnimatedText";
import Layout from "./sub-components/Layout";
import { GithubIcon } from "./icons/icons";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between  border border-solid border-black bg-white shadow-2xl dark:bg-black dark:border-white flex-col lg:flex-row sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl sm:rounded-br-3xl p-4">
            <a
                href={link}
                target="_blank"
                className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg border border-solid border-black"
            >
                <img src={img} alt="title" className="w-full h-auto" />
            </a>
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-between pl-0 lg:pl-6">
                <span className="text-primary dark:text-secondary font-medium text-xl cursor-default sm:text-base md:text-lg mt-4 md:mt-0">
                    {type}
                </span>
                <a
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left font-bold dark:text-white text-base sm:text-3xl">
                        {title}
                    </h2>
                </a>
                <p className="my-1 font-medium text-black dark:text-white text-xs cursor-default sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <a href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </a>
                    <a
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-black text-white p-2 font-semibold dark:bg-white dark:text-black px-4 sm:px-6 text-base sm:text-lg"
                    >
                        Visit project
                    </a>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-white">
            <Layout className="pt-16">
                <AnimatedText
                    text="My latest and greatest creations"
                    className="mb-8"
                />
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <FeaturedProject
                            title={"Veterinary Clinic Web & Mobile App"}
                            img="/Thumbnail.png"
                            summary={
                                "At Kho Veterinary Clinic, I developed a web app for admin tasks like managing inventory, products, appointments, clients, and records. It includes authentication, a dashboard for analytics, inventory management with invoice features, appointment tracking, and client/pet record management. I also created a mobile app for clients with clinic details, service listings, emergency call functionality, appointment scheduling, client account management, and pet record keeping."
                            }
                            link={"https://khoveterinaryclinic.netlify.app/"}
                            github="https://github.com/JpMayor1/khoveterinaryclinic"
                            type="Featured Project"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    );
};

export default Projects;
