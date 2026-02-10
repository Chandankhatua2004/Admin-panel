import React from 'react';
import { ChevronDown } from 'lucide-react';

const HorizonStatCard = ({ title, value, icon: Icon, extra, isBalance, flag: initialFlag, iconBgClass }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentFlag, setCurrentFlag] = React.useState(initialFlag);
    const dropdownRef = React.useRef(null);

    const countries = [
        { name: 'United States', flag: 'https://flagcdn.com/w40/us.png' },
        { name: 'England', flag: 'https://flagcdn.com/w40/gb-eng.png' },
        { name: 'Sweden', flag: 'https://flagcdn.com/w40/se.png' },
        { name: 'Turkey', flag: 'https://flagcdn.com/w40/tr.png' },
        { name: 'India', flag: 'https://flagcdn.com/w40/in.png' },
    ];

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="horizon-card flex items-center justify-between p-6 relative">
            <div className="flex items-center gap-4">
                {currentFlag ? (
                    <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center p-0.5 bg-background-body shrink-0 shadow-sm border border-background-body">
                        <img src={currentFlag} alt="flag" className="w-full h-full object-cover rounded-full" />
                    </div>
                ) : (
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${iconBgClass || 'bg-background-body text-primary'}`}>
                        {Icon && <Icon size={24} />}
                    </div>
                )}

                <div className="flex flex-col">
                    <p className="text-sm font-bold text-secondary mb-1">{title}</p>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-2xl font-bold text-nav-text">{value}</h3>
                        {extra && <span className="text-[12px] font-bold text-emerald-500 whitespace-nowrap">{extra}</span>}
                    </div>
                </div>
            </div>

            {isBalance && (
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-secondary opacity-40 hover:opacity-100 transition-opacity cursor-pointer p-2"
                >
                    <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            )}

            {isBalance && isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute right-6 top-full mt-2 w-48 bg-background-card rounded-2xl shadow-2xl z-50 py-3 border border-background-body overflow-hidden animate-in fade-in zoom-in duration-200"
                >
                    {countries.map((country) => (
                        <button
                            key={country.name}
                            onClick={() => {
                                setCurrentFlag(country.flag);
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-2 text-sm font-bold text-nav-text hover:bg-background-body transition-colors ${currentFlag === country.flag ? 'bg-background-body/50' : ''}`}
                        >
                            <img src={country.flag} alt={country.name} className="w-6 h-6 rounded-full object-cover shadow-sm" />
                            {country.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HorizonStatCard;
