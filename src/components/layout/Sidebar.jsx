import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    ShoppingCart,
    BarChart3,
    User,
    Lock,
    LayoutGrid,
    UserPlus,
    Moon,
    X
} from 'lucide-react';
import { cn } from '../../lib/utils';
import logo from '../../assets/dashboard-logo.png';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
    <div
        onClick={onClick}
        className="relative py-4 flex items-center gap-4 cursor-pointer group transition-all"
    >
        <div className={cn(
            "flex items-center gap-4 px-8 w-full transition-all text-nav-text",
            active ? "font-bold" : "font-medium opacity-70 hover:opacity-100"
        )}>
            <Icon size={22} className={active ? "text-primary" : "text-secondary opacity-70 group-hover:opacity-100 transition-opacity"} />
            <span className="text-[17px] tracking-tight">{label}</span>
        </div>
        {active && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[36px] bg-primary rounded-l-full animate-in fade-in slide-in-from-right-1 duration-300" />
        )}
    </div>
);

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigation = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
        { name: 'NFT Marketplace', icon: ShoppingCart, path: '/marketplace' },
        { name: 'Tables', icon: BarChart3, path: '/tables' },
        { name: 'Kanban', icon: LayoutGrid, path: '/kanban' },
        { name: 'Profile', icon: User, path: '/profile' },
        { name: 'Sign In', icon: Lock, path: '/signin' },
        { name: 'Sign Up', icon: UserPlus, path: '/signup' },
    ];

    return (
        <div className={cn(
            "w-72 h-screen bg-background-card fixed left-0 top-0 border-r border-slate-50 dark:border-white/10 z-40 transition-transform duration-300 lg:translate-x-0 flex flex-col",
            isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        )}>
            {/* Mobile Close Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden absolute right-4 top-6 p-2 text-secondary hover:text-primary transition-colors cursor-pointer z-50"
            >
                <X size={24} />
            </button>

            {/* Logo Section */}
            <div className="pt-10 pb-8 flex flex-col items-center shrink-0">
                <div
                    onClick={() => window.location.reload()}
                    className="w-16 h-16 bg-background-card rounded-xl flex items-center justify-center shadow-[0px_25px_50px_-12px_rgba(67,24,255,0.25)] mb-4 hover:scale-110 transition-transform duration-500 overflow-hidden border border-background-body cursor-pointer"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-full h-full object-contain p-1"
                    />
                </div>
                <div className="w-48 h-px bg-background-body mt-4" />
            </div>

            {/* Navigation - Scrollable */}
            <div className="flex-1 overflow-y-auto pt-2 custom-scrollbar">
                {navigation.map((item) => (
                    <SidebarItem
                        key={item.name}
                        icon={item.icon}
                        label={item.name}
                        active={location.pathname === item.path}
                        onClick={() => {
                            navigate(item.path);
                            if (window.innerWidth < 1024) toggleSidebar();
                        }}
                    />
                ))}

                {/* PRO Card Section - Now inside scroll area */}
                <div className="p-8 mt-auto">
                    <div className="bg-[linear-gradient(135deg,#868CFF_0%,#4318FF_100%)] rounded-[30px] p-6 text-white relative overflow-hidden group cursor-pointer shadow-2xl shadow-primary/30">
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6 border border-white/30">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary">
                                    <Moon size={20} className="fill-current rotate-[-15deg]" />
                                </div>
                            </div>
                            <h4 className="text-lg font-bold mb-1">Upgrade to PRO</h4>
                            <p className="text-xs font-medium opacity-80 leading-relaxed px-2">
                                to get access to all features! Connect with Venus World!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
