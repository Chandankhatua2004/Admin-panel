import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    React.useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isSidebarOpen]);

    return (
        <div className="flex min-h-screen bg-background-body relative">
            {/* Mobile Backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-[#000000]/30 backdrop-blur-sm z-30 lg:hidden animate-in fade-in duration-300"
                    onClick={toggleSidebar}
                />
            )}

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex-1 lg:ml-72 flex flex-col min-w-0 w-full max-w-full">
                <Header toggleSidebar={toggleSidebar} />
                <main className="px-4 lg:px-8 pb-8 w-full max-w-full overflow-hidden flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
