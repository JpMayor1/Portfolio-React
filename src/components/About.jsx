import AnimatedText from "./sub-components/AnimatedText";
import Layout from "./sub-components/Layout";

const About = () => {
    return (
        <main
            id="about"
            className="flex w-full flex-col items-center justify-center dark:text-white"
        >
            <Layout className="pt-16">
                <AnimatedText
                    text="Hi there! My name is James Phillip Mayor, Full-stack Developer."
                    className="mb-8 text-center"
                />
                <div className="grid w-full grid-cols-8 gap-8">
                    <div className="col-span-8 md:col-span-4 flex flex-col items-start justify-start">
                        <h2 className="mb-4 text-lg font-bold uppercase text-black/75 dark:text-white cursor-default">
                            About Me
                        </h2>
                        <p className="my-4 font-medium cursor-default">
                            I began programming on September 1, 2022, and
                            I&apos;ve developed a passion for web development. I
                            enjoy creating entire websites, from the front-end
                            interface to the back-end systems. I&apos;ve created
                            CRUD applications like E-Commerce and Appointment
                            mobile apps, and I&apos;m excited to use my skills
                            to build more user-friendly and visually appealing
                            websites.
                        </p>
                        <p className="my-4 font-medium cursor-default">
                            I&apos;m passionate about creating dynamic,
                            user-friendly web applications that help businesses
                            and individuals achieve their goals. As a full-stack
                            developer, I have experience working with both
                            front-end and back-end technologies, and I&apos;m
                            always eager to learn more.
                        </p>
                        <p className="my-4 font-medium cursor-default">
                            I&apos;m a detail-oriented problem solver who enjoys
                            tackling complex challenges, and I&apos;m always
                            looking for opportunities to improve my skills and
                            expand my knowledge. Whether it&apos;s learning a
                            new programming language or exploring the latest web
                            development tools and frameworks, I&apos;m up for
                            the challenge.
                        </p>
                    </div>
                    <div className="col-span-8 md:col-span-4 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-4 dark:bg-black dark:border-white">
                        <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-[1em] bg-black dark:bg-white" />
                        <img
                            src="/Awards.jpg"
                            alt="Developer"
                            className="w-full h-auto rounded-2xl border border-black border-solid dark:border-white"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    );
};

export default About;
