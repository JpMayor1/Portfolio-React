import Layout from "./sub-components/Layout";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-black font-medium sm:text-lg dark:text-white dark:border-white text-base">
            <Layout className="py-6 lg:py-8 flex items-center justify-center flex-col lg:flex-row">
                <span className="cursor-default mr-1 text-center">
                    2024 &copy; All Rights Reserved.
                </span>
                <div
                    className="flex
                items-center cursor-default py-2 lg:py-0"
                >
                    Build With
                    <span className="text-primary text-2xl px-1 dark:text-secondary">
                        &#9825;
                    </span>
                    by&nbsp;
                    <a href="/" className="underline underline-offset-2">
                        JP.
                        <span className="text-primary dark:text-secondary">
                            M
                        </span>
                    </a>
                </div>
            </Layout>
        </footer>
    );
};

export default Footer;
