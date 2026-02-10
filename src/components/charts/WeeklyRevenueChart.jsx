import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart3 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const data = [
    { name: '17', a: 40, b: 30, c: 20 },
    { name: '18', a: 30, b: 40, c: 30 },
    { name: '19', a: 20, b: 20, c: 40 },
    { name: '20', a: 50, b: 35, c: 25 },
    { name: '21', a: 45, b: 40, c: 35 },
    { name: '22', a: 35, b: 30, c: 20 },
    { name: '23', a: 40, b: 45, c: 30 },
    { name: '24', a: 55, b: 30, c: 25 },
    { name: '25', a: 45, b: 35, c: 20 },
];

const WeeklyRevenueChart = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="horizon-card h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-nav-text">Weekly Revenue</h3>
                <div className="w-10 h-10 bg-background-body rounded-lg flex items-center justify-center text-primary">
                    <BarChart3 size={20} />
                </div>
            </div>

            <div className="flex-1 w-full min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} mx={-10}>
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
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{
                                backgroundColor: isDark ? '#111C44' : '#fff',
                                borderRadius: '12px',
                                border: 'none',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                color: isDark ? '#fff' : '#1B254B'
                            }}
                            itemStyle={{ color: isDark ? '#fff' : '#1B254B' }}
                        />
                        <Bar dataKey="a" stackId="v" fill="#4318FF" radius={[0, 0, 0, 0]} barSize={12} />
                        <Bar dataKey="b" stackId="v" fill="#6AD2FF" radius={[0, 0, 0, 0]} barSize={12} />
                        <Bar dataKey="c" stackId="v" fill={isDark ? '#1B254B' : '#EFF4FB'} radius={[10, 10, 0, 0]} barSize={12} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default WeeklyRevenueChart;
