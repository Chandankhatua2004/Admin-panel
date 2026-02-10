import React, { useState, useMemo } from 'react';
import { MoreVertical, Filter, Download, ArrowUpDown, Search } from 'lucide-react';
import { cn } from '../lib/utils';

const initialTableData = [
    { id: 1, name: 'Google Ads', category: 'Marketing', status: 'Active', value: 12400, color: 'bg-blue-500' },
    { id: 2, name: 'Facebook Campaign', category: 'Social Media', status: 'Pending', value: 8200, color: 'bg-emerald-500' },
    { id: 3, name: 'Email Outreach', category: 'Sales', status: 'Paused', value: 3150, color: 'bg-amber-500' },
    { id: 4, name: 'Organic Search', category: 'SEO', status: 'Active', value: 15900, color: 'bg-purple-500' },
    { id: 5, name: 'Affiliate Program', category: 'Partners', status: 'Active', value: 6400, color: 'bg-indigo-500' },
];

const DataTable = () => {
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'value', direction: 'desc' });

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const filteredAndSortedData = useMemo(() => {
        let filtered = initialTableData.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase())
        );

        if (sortConfig.key) {
            filtered.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
                if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return filtered;
    }, [search, sortConfig]);

    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Recent Campaigns</h3>
                    <p className="text-sm text-slate-500 mt-0.5">Manage and track your active marketing sources.</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search source..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>
                    <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg border border-slate-200">
                        <Download size={18} />
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-900" onClick={() => handleSort('name')}>
                                <div className="flex items-center gap-2">Source <ArrowUpDown size={12} /></div>
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-900" onClick={() => handleSort('value')}>
                                <div className="flex items-center gap-2">Revenue <ArrowUpDown size={12} /></div>
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filteredAndSortedData.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-8 rounded-full ${item.color}`} />
                                        <span className="text-sm font-semibold text-slate-900">{item.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">{item.category}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.status === 'Active' ? 'bg-emerald-50 text-emerald-600' :
                                            item.status === 'Pending' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm font-bold text-slate-900">
                                    ${item.value.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-slate-600">
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredAndSortedData.length === 0 && (
                    <div className="p-12 text-center text-slate-500 font-medium">
                        No campaigns found matching "{search}"
                    </div>
                )}
            </div>
        </div>
    );
};

export default DataTable;
