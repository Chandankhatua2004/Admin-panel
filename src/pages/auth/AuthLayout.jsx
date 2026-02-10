import React from 'react';
import { ChevronLeft } from 'lucide-react';
import logo from '../../assets/dashboard-logo.png';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex bg-background-card relative font-sans">
            {/* Left Side: Form */}
            <div className="flex-1 flex flex-col justify-center px-6 lg:px-24 py-12 relative z-10 bg-background-card min-h-screen animate-in fade-in duration-500">
                <Link
                    to="/"
                    className="absolute top-6 left-4 lg:left-10 text-secondary/70 text-sm font-bold flex items-center gap-1 hover:text-primary transition-colors group"
                >
                    <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                    Back to dashboard
                </Link>
                <div className="w-full max-w-[420px] mx-auto scale-95 md:scale-100">
                    {children}
                </div>
            </div>

            {/* Right Side: Branding */}
            <div className="hidden lg:flex flex-1 relative overflow-hidden bg-[linear-gradient(135deg,#868CFF_0%,#4318FF_100%)]">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-white/20 blur-[100px]" />
                    <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-blue-400/20 blur-[150px]" />
                </div>

                <div className="relative z-10 w-full flex flex-col items-center justify-center p-12 text-center text-white">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center mb-12">
                        <div className="w-[180px] h-[180px] bg-white/10 rounded-full flex items-center justify-center mb-10 border border-white/20 shadow-2xl">
                            <div className="w-[120px] h-[120px] rounded-full bg-background-card flex items-center justify-center p-4">
                                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[40px] font-extrabold uppercase tracking-[.25em]">Dashboard</span>
                        </div>
                    </div>


                    {/* Footer */}
                    <div className="absolute bottom-10 left-0 w-full px-12 flex justify-center gap-8 text-sm font-bold opacity-60">
                        <a href="#" className="hover:opacity-100 transition-opacity">Marketplace</a>
                        <a href="#" className="hover:opacity-100 transition-opacity">License</a>
                        <a href="#" className="hover:opacity-100 transition-opacity">Terms of Use</a>
                        <a href="#" className="hover:opacity-100 transition-opacity">Blog</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
