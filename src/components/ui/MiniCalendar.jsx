import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const MiniCalendar = () => {
    const today = useMemo(() => new Date(), []);
    const [viewDate, setViewDate] = useState(new Date()); // The month/year currently being viewed
    const [selectedDate, setSelectedDate] = useState(new Date()); // The specific date clicked

    const [showMonthDropdown, setShowMonthDropdown] = useState(false);
    const [showYearDropdown, setShowYearDropdown] = useState(false);

    const monthDropdownRef = useRef(null);
    const yearDropdownRef = useRef(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (monthDropdownRef.current && !monthDropdownRef.current.contains(event.target)) {
                setShowMonthDropdown(false);
            }
            if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target)) {
                setShowYearDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const viewMonth = viewDate.getMonth();
    const viewYear = viewDate.getFullYear();

    const years = useMemo(() => {
        const arr = [];
        for (let y = 1995; y <= 2060; y++) arr.push(y);
        return arr;
    }, []);

    const calendarGrid = useMemo(() => {
        const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
        const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

        const grid = [];
        // Fill empty slots for previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            grid.push({ date: null, currentMonth: false });
        }
        // Fill current month days
        for (let d = 1; d <= daysInMonth; d++) {
            grid.push({ date: d, currentMonth: true });
        }
        return grid;
    }, [viewMonth, viewYear]);

    const handleMonthSelect = (index) => {
        setViewDate(new Date(viewYear, index, 1));
        setShowMonthDropdown(false);
    };

    const handleYearSelect = (year) => {
        setViewDate(new Date(year, viewMonth, 1));
        setShowYearDropdown(false);
    };

    const handleDateClick = (date) => {
        if (!date) return;
        setSelectedDate(new Date(viewYear, viewMonth, date));
    };

    return (
        <div className="horizon-card h-full select-none">
            <div className="flex items-center justify-between mb-8 px-2">
                {/* Month Dropdown */}
                <div className="relative" ref={monthDropdownRef}>
                    <button
                        onClick={() => setShowMonthDropdown(!showMonthDropdown)}
                        className="flex items-center gap-1.5 text-primary text-sm font-bold transition-all px-4 py-2 rounded-full bg-background-body hover:bg-primary/5 min-w-[120px] justify-between cursor-pointer"
                    >
                        {months[viewMonth]} <ChevronDown size={16} className={`transition-transform duration-200 ${showMonthDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {showMonthDropdown && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-background-card rounded-2xl shadow-2xl shadow-secondary/20 border border-background-body z-50 py-3 animate-in fade-in zoom-in duration-200 overflow-hidden">
                            <div className="max-h-60 overflow-y-auto custom-scrollbar">
                                {months.map((m, i) => (
                                    <button
                                        key={m}
                                        onClick={() => handleMonthSelect(i)}
                                        className={`w-full text-left px-5 py-2.5 text-sm font-bold transition-colors cursor-pointer ${i === viewMonth ? 'bg-primary/10 text-primary' : 'text-nav-text hover:bg-background-body'}`}
                                    >
                                        {m}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Year Dropdown */}
                <div className="relative" ref={yearDropdownRef}>
                    <button
                        onClick={() => setShowYearDropdown(!showYearDropdown)}
                        className="flex items-center gap-1.5 text-secondary text-base font-bold px-4 py-2 rounded-full hover:bg-background-body transition-all cursor-pointer"
                    >
                        {viewYear} <ChevronDown size={16} className={`text-secondary/60 transition-transform duration-200 shrink-0 ${showYearDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {showYearDropdown && (
                        <div className="absolute top-full right-0 mt-2 w-32 bg-background-card rounded-2xl shadow-2xl shadow-secondary/20 border border-background-body z-50 py-3 animate-in fade-in zoom-in duration-200 overflow-hidden">
                            <div className="max-h-60 overflow-y-auto custom-scrollbar">
                                {years.map((y) => (
                                    <button
                                        key={y}
                                        onClick={() => handleYearSelect(y)}
                                        className={`w-full text-left px-5 py-2.5 text-sm font-bold transition-colors cursor-pointer ${y === viewYear ? 'bg-primary/10 text-primary' : 'text-nav-text hover:bg-background-body'}`}
                                    >
                                        {y}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-7 gap-y-1 text-center px-1">
                {days.map(day => (
                    <div key={day} className="text-xs font-bold text-secondary uppercase opacity-60 mb-3 h-8 flex items-center justify-center">
                        {day}
                    </div>
                ))}

                {calendarGrid.map((item, index) => {
                    const isToday = item.date === today.getDate() &&
                        viewMonth === today.getMonth() &&
                        viewYear === today.getFullYear();

                    const isSelected = item.date === selectedDate.getDate() &&
                        viewMonth === selectedDate.getMonth() &&
                        viewYear === selectedDate.getFullYear();

                    return (
                        <div
                            key={index}
                            onClick={() => handleDateClick(item.date)}
                            className="relative flex items-center justify-center h-10 w-full cursor-pointer group"
                        >
                            {item.date && (
                                <>
                                    {isSelected ? (
                                        <div className="absolute w-9 h-9 bg-primary rounded-full shadow-lg shadow-primary/30" />
                                    ) : isToday ? (
                                        <div className="absolute w-9 h-9 bg-background-body rounded-full" />
                                    ) : (
                                        <div className="absolute w-9 h-9 rounded-full group-hover:bg-background-body transition-colors" />
                                    )}
                                    <span className={`text-sm font-bold z-10 ${isSelected ? 'text-white' : isToday ? 'text-primary' : 'text-nav-text'}`}>
                                        {item.date}
                                    </span>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Added: Events section to fill space */}
            <div className="mt-8 pt-6 border-t border-background-body px-2">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-nav-text">Next Events</h4>
                    <button className="flex items-center gap-1 text-[10px] font-extrabold text-primary bg-primary/5 px-2.5 py-1 rounded-lg hover:bg-primary/10 transition-colors uppercase tracking-wider cursor-pointer">
                        <Plus size={10} strokeWidth={4} />
                        Add New
                    </button>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <div>
                            <p className="text-sm font-bold text-nav-text line-clamp-1">Design & UX sync</p>
                            <p className="text-[10px] text-secondary font-bold">09:00 AM - 10:30 AM</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-1.5 h-8 bg-[#6AD2FF] rounded-full" />
                        <div>
                            <p className="text-sm font-bold text-nav-text line-clamp-1">Marketing review</p>
                            <p className="text-[10px] text-secondary font-bold">11:00 AM - 12:30 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniCalendar;
