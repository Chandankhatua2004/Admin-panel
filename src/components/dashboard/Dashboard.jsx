import React from 'react';
import DashRow1 from './DashRow1';
import TotalSpentChart from '../charts/TotalSpentChart';
import WeeklyRevenueChart from '../charts/WeeklyRevenueChart';
import SecurityCard from '../ui/SecurityCard';
import TasksChecklist from '../ui/TasksChecklist';
import DailyTrafficChart from '../charts/DailyTrafficChart';
import YourPieChart from '../charts/YourPieChart';
import TrendingNFTs from './TrendingNFTs';
import HistoryList from './HistoryList';
import TeamMembers from '../ui/TeamMembers';
import MiniCalendar from '../ui/MiniCalendar';
import LessonCard from '../ui/LessonCard';
import ComplexTable from '../ui/ComplexTable';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-5 w-full max-w-full overflow-hidden">
            {/* Row 1: Stat Cards */}
            <DashRow1 />

            {/* Row 2: Main Area Line Chart & Stacked Bar Chart */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="h-[400px] lg:h-[450px]">
                    <TotalSpentChart />
                </div>
                <div className="h-[400px] lg:h-[450px]">
                    <WeeklyRevenueChart />
                </div>
            </div>

            {/* Row 3: Security, Tasks, and Traffic */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="h-[380px] lg:h-[400px]">
                    <SecurityCard />
                </div>
                <div className="h-[380px] lg:h-[400px]">
                    <TasksChecklist />
                </div>
                <div className="h-[380px] lg:h-[400px] md:col-span-2 lg:col-span-1">
                    <DailyTrafficChart />
                </div>
            </div>

            {/* Row 4: Pie Chart & Trending NFTs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="h-full min-h-[400px] md:col-span-1">
                    <YourPieChart />
                </div>
                <div className="md:col-span-2">
                    <TrendingNFTs />
                </div>
            </div>

            {/* Row 5: History, Calendar, and Lesson Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="min-h-[450px]">
                    <HistoryList />
                </div>
                <div className="min-h-[450px]">
                    <MiniCalendar />
                </div>
                <div className="min-h-[450px] md:col-span-2 lg:col-span-1">
                    <LessonCard />
                </div>
            </div>

            {/* Row 6: Team Members & Complex Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-10">
                <div className="md:col-span-1 h-full">
                    <TeamMembers />
                </div>
                <div className="md:col-span-2 h-full overflow-hidden">
                    <ComplexTable />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
