import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../lib/utils';

const StatCard = ({ title, value, change, trend, icon: Icon, color }) => {
    return (
        <div className="bg-background-card p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <div className={cn("p-2.5 rounded-xl", color)}>
                    <Icon className="w-6 h-6" />
                </div>
                <div className={cn(
                    "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                    trend === 'up'
                        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                        : "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
                )}>
                    {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {change}%
                </div>
            </div>
            <div>
                <p className="text-sm font-medium text-secondary">{title}</p>
                <h3 className="text-2xl font-bold text-nav-text mt-1">{value}</h3>
            </div>
        </div>
    );
};

export default StatCard;
