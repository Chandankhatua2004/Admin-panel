import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, User, Settings, Users, HelpCircle, LogOut, Menu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../locales/translations';
import logo from '../../assets/dashboard-logo.png';

const Header = ({ toggleSidebar }) => {
    const { language, changeLanguage } = useLanguage();
    const t = translations[language];

    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);


    const langRef = useRef(null);
    const profileRef = useRef(null);

    const languages = [
        { name: 'English', native: 'English', flag: 'https://flagcdn.com/w40/gb.png', code: 'eng' },
        { name: 'Hindi', native: 'हिन्दी', flag: 'https://flagcdn.com/w40/in.png', code: 'hin' },
        { name: 'Chinese', native: '中文', flag: 'https://flagcdn.com/w40/cn.png', code: 'zh' },
        { name: 'Turkish', native: 'Türkçe', flag: 'https://flagcdn.com/w40/tr.png', code: 'tr' },
        { name: 'Dutch', native: 'Dutch', flag: 'https://flagcdn.com/w40/nl.png', code: 'nld' },
    ];

    const currentLang = languages.find(l => l.code === language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const menuItems = [
        { icon: User, label: 'View Profile' },
        { icon: Settings, label: 'Account Settings' },
        { icon: Bell, label: 'Notifications' },
        { icon: Users, label: 'Switch Account' },
        { icon: HelpCircle, label: 'Help Center' },
        { icon: LogOut, label: 'Logout', color: 'text-rose-500' },
    ];

    return (
        <header className="w-full flex items-center justify-between px-4 lg:px-8 py-4 mb-4 mt-2">
            <div className="flex items-center gap-4">
                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden w-10 h-10 rounded-full bg-background-card flex items-center justify-center text-nav-text shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                    <Menu size={20} />
                </button>

                {/* Desktop/Tablet Logo */}
                <div
                    onClick={() => window.location.reload()}
                    className="hidden lg:flex items-center justify-center w-10 h-10 bg-background-card rounded-xl shadow-[0px_10px_20px_-5px_rgba(67,24,255,0.25)] overflow-hidden border border-background-body cursor-pointer mr-2"
                >
                    <img src={logo} alt="Logo" className="w-full h-full object-contain p-1" />
                </div>

                {/* Mobile Search Icon Button */}
                <button className="md:hidden w-10 h-10 rounded-full bg-background-body flex items-center justify-center text-nav-text hover:bg-gray-100 transition-colors cursor-pointer">
                    <Search size={20} className="opacity-70" />
                </button>

                {/* Desktop Search Bar */}
                <div className="hidden md:flex relative bg-background-body rounded-full items-center px-4 md:px-6 py-3 flex-1 max-w-[400px] shadow-sm transition-all border border-transparent dark:border-white/5">
                    <input
                        type="text"
                        placeholder={t.search}
                        className="bg-transparent border-none outline-none text-sm font-medium text-nav-text w-full placeholder:text-secondary opacity-60"
                    />
                    <Search size={18} className="text-nav-text ml-2 opacity-60" />
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-5">
                {/* Language Switcher */}
                <div className="relative" ref={langRef}>
                    <div
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="w-10 h-10 rounded-full overflow-hidden border-2 border-background-body cursor-pointer hover:scale-105 transition-transform flex items-center justify-center p-1 bg-background-body"
                    >
                        <img src={currentLang.flag} alt={currentLang.name} className="w-full h-full object-cover rounded-full" />
                    </div>

                    {isLangOpen && (
                        <div className="absolute right-0 top-full mt-4 w-64 bg-background-card rounded-2xl shadow-2xl z-50 py-2 border border-background-body animate-in fade-in zoom-in duration-200">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        changeLanguage(lang.code);
                                        setIsLangOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between px-4 py-3 hover:bg-background-body transition-colors cursor-pointer ${language === lang.code ? 'bg-background-body/50' : ''}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <img src={lang.flag} alt={lang.name} className="w-6 h-6 rounded-full object-cover shadow-sm" />
                                        <span className="text-sm font-bold text-nav-text">{lang.native}</span>
                                    </div>
                                    <span className="text-xs font-bold text-secondary uppercase px-2 py-0.5 bg-background-body rounded-md">{lang.code === 'hin' ? 'hin' : lang.code}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button className="w-10 h-10 rounded-full bg-background-body flex items-center justify-center text-primary hover:bg-[#E0E5F2] transition-colors relative cursor-pointer">
                        <Bell size={20} />
                        <div className="absolute top-0 right-0 w-3 h-3 bg-rose-500 rounded-full border-2 border-white shadow-sm" />
                    </button>
                </div>

                {/* Profile Dropdown */}
                <div className="relative" ref={profileRef}>
                    <div
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                    >
                        <img src="https://i.pravatar.cc/100?u=alex" alt="user" className="w-full h-full object-cover" />
                    </div>

                    {isProfileOpen && (
                        <div className="absolute right-0 top-full mt-4 w-72 bg-background-card rounded-2xl shadow-[0_50px_100px_-20px_rgba(112,144,174,0.12),0_30px_60px_-30px_rgba(0,0,0,0.15)] z-50 py-3 border border-background-body animate-in fade-in zoom-in duration-200 origin-top-right">
                            {/* User Header */}
                            <div className="px-5 py-4 flex items-center gap-3 border-b border-background-body mb-2">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
                                    <img src="https://i.pravatar.cc/100?u=alex" alt="user" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-nav-text leading-none mb-1">Jason Statham</h4>
                                    <p className="text-xs font-medium text-secondary opacity-60">jason@example.com</p>
                                </div>
                            </div>

                            {/* Menu Items */}
                            <div className="px-2">
                                {menuItems.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setIsProfileOpen(false)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background-body transition-colors group cursor-pointer ${item.color || 'text-nav-text'}`}
                                    >
                                        <item.icon size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                                        <span className="text-sm font-bold tracking-tight">{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
