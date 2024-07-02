/* eslint-disable react/prop-types */

const Layout = ({ children, className = "" }) => {
    return (
        <div
            className={`w-full h-full inline-block z-0 bg-white dark:bg-black lg:p-28 md:p-16 sm:p-12 p-8 ${className}`}
        >
            {children}
        </div>
    );
};

export default Layout;
