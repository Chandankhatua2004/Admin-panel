import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';


const data = [
    { name: '00', value: 300 },
    { name: '04', value: 200 },
    { name: '08', value: 450 },
    { name: '12', value: 300 },
    { name: '14', value: 400 },
    { name: '16', value: 480 },
    { name: '18', value: 250 },
];

const DailyTrafficChart = () => {
    const isDark = false;


    return (
        <div className="horizon-card h-full flex flex-col">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <p className="text-sm font-bold text-secondary">Daily Traffic</p>
                    <div className="flex items-baseline gap-2 mt-1">
                        <h3 className="text-[34px] font-bold text-nav-text">2.579</h3>
                        <span className="text-sm font-medium text-secondary">Visitors</span>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-500 font-bold text-sm">
                    <span>▲ +2.45%</span>
                </div>
            </div>

            <div className="flex-1 min-h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
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
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: isDark ? '#A3AED0' : '#707EAE', fontSize: 12, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis hide />
                        <Bar
                            dataKey="value"
                            fill="#4318FF"
                            radius={[10, 10, 10, 10]}
                            barSize={12}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DailyTrafficChart;
