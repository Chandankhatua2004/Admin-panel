import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DistributionChart = () => {
    const data = {
        labels: ['Organic', 'Paid', 'Referral', 'Social'],
        datasets: [
            {
                label: 'Traffic Sources',
                data: [45, 25, 20, 10],
                backgroundColor: [
                    'rgba(37, 99, 235, 0.8)',
                    'rgba(124, 58, 237, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                ],
                borderColor: [
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true,
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12,
                        weight: '500'
                    }
                }
            },
            tooltip: {
                backgroundColor: '#1e293b',
                padding: 12,
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 13 },
                cornerRadius: 8,
            }
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-6 font-sans">Traffic Source Distribution</h3>
            <div className="flex-1 min-h-[300px] relative">
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default DistributionChart;
