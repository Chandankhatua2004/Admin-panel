import React, { useState, useRef, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const data = [
    { name: 'Your Files', value: 65, color: '#4318FF' },
    { name: 'System', value: 35, color: '#6AD2FF' },
];

const YourPieChart = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState('Weekly');
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const timeOptions = ['Weekly', 'Monthly', 'Yearly'];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="horizon-card h-full flex flex-col"
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-nav-text">Your Pie Chart</h3>

                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-secondary text-sm font-bold flex items-center gap-1 hover:text-primary transition-colors py-1 px-2 rounded-lg hover:bg-background-body cursor-pointer"
                    >
                        {selectedTime} {isMenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 top-full mt-2 w-32 bg-background-card rounded-2xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] z-50 py-2 border border-background-body origin-top-right"
                            >
                                {timeOptions.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            setSelectedTime(option);
                                            setIsMenuOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 text-sm font-bold transition-colors cursor-pointer ${selectedTime === option
                                            ? 'text-primary bg-primary/5'
                                            : 'text-nav-text hover:bg-background-body'
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <motion.div variants={itemVariants} className="flex-1 min-h-[220px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={0}
                            dataKey="value"
                            stroke="none"
                            startAngle={90}
                            endAngle={450}
                            isAnimationActive={true}
                            animationBegin={400}
                            animationDuration={1200}
                            animationEasing="ease-out"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                    style={{ outline: 'none' }}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                borderRadius: '12px',
                                border: 'none',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="horizon-card mt-auto grid grid-cols-2 divide-x dark:divide-white/5 divide-slate-100 p-3 shadow-none border-none"
            >
                <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs font-bold text-secondary tracking-tight">Your Files</span>
                    </div>
                    <span className="text-xl font-extrabold text-nav-text">65%</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2 pl-3">
                        <div className="w-2 h-2 rounded-full bg-[#6AD2FF]" />
                        <span className="text-xs font-bold text-secondary tracking-tight">System</span>
                    </div>
                    <span className="text-xl font-extrabold text-nav-text">35%</span>
                </div>
            </motion.div>
        </motion.div >
    );
};

export default YourPieChart;

