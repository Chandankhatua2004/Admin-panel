import React from 'react';
import { BarChart3, DollarSign, CheckCircle2, Files } from 'lucide-react';
import HorizonStatCard from '../ui/HorizonStatCard';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../locales/translations';

const DashRow1 = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <HorizonStatCard
                title={t.earnings}
                value="$350.4"
                icon={BarChart3}
                iconBgClass="bg-background-body text-primary"
            />
            <HorizonStatCard
                title={t.spend}
                value="$642.39"
                icon={DollarSign}
                iconBgClass="bg-background-body text-primary"
            />
            <HorizonStatCard
                title={t.sales}
                value="$574.34"
                extra="+23% since last month"
                icon={BarChart3}
                iconBgClass="bg-transparent text-emerald-500"
            />
            <HorizonStatCard
                title={t.balance}
                value="$1,000"
                flag="https://flagcdn.com/w40/us.png"
                isBalance
            />
            <HorizonStatCard
                title={t.newTasks}
                value="154"
                icon={CheckCircle2}
                iconBgClass="bg-[#00A3FF] text-white"
            />
            <HorizonStatCard
                title={t.projects}
                value="2935"
                icon={Files}
                iconBgClass="bg-background-body text-primary"
            />
        </div>
    );
};

export default DashRow1;
