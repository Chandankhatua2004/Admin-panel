import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar as CalendarIcon, BarChart3 } from 'lucide-react';


const data = [
    { name: 'SEP', spent: 20, track: 35 },
    { name: 'OCT', spent: 30, track: 25 },
    { name: 'NOV', spent: 25, track: 45 },
    { name: 'DEC', spent: 45, track: 30 },
    { name: 'JAN', spent: 35, track: 55 },
    { name: 'FEB', spent: 50, track: 40 },
];

const TotalSpentChart = () => {
    const isDark = false;


    return (
        <div className="horizon-card h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 px-3 py-1.5 bg-background-body rounded-lg text-secondary font-bold text-sm">
                    <CalendarIcon size={16} />
                    <span>Jan 2024</span>
                </div>
                <div className="w-10 h-10 bg-background-body rounded-lg flex items-center justify-center text-primary">
                    <BarChart3 size={20} />
                </div>
            </div>

            <div className="flex items-baseline gap-4 mb-4">
                <h2 className="text-[34px] font-bold text-nav-text">$37.5K</h2>
                <div className="flex flex-col">
                    <p className="text-sm font-bold text-secondary">Total Spent <span className="text-emerald-500 ml-1">▲ +2.45%</span></p>
                    <div className="flex items-center gap-1.5 text-emerald-500 text-sm font-bold mt-1">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 fill-white flex items-center justify-center">
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M4 0L7.4641 6H0.535898L4 0Z" fill="white" /></svg>
                        </div>
                        On track
                    </div>
                </div>
            </div>

            <div className="flex-1 w-full min-h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorSpent" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4318FF" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#4318FF" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorTrack" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2BB2FE" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#2BB2FE" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="0" vertical={false} stroke="transparent" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: isDark ? '#A3AED0' : '#707EAE', fontSize: 12, fontWeight: 500 }}
                            dy={15}
                        />
                        <YAxis hide />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: isDark ? '#111C44' : '#fff',
                                borderRadius: '12px',
                                border: 'none',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                color: isDark ? '#fff' : '#1B254B'
                            }}
                            itemStyle={{ color: isDark ? '#fff' : '#1B254B' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="spent"
                            stroke="#4318FF"
                            strokeWidth={4}
                            fillOpacity={1}
                            fill="url(#colorSpent)"
                        />
                        <Area
                            type="monotone"
                            dataKey="track"
                            stroke="#2BB2FE"
                            strokeWidth={4}
                            fillOpacity={1}
                            fill="url(#colorTrack)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TotalSpentChart;
