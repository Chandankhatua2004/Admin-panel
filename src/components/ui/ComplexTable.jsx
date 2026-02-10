import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, CheckCircle, XCircle, AlertCircle, Check, MoreHorizontal, RefreshCw, Edit2, Trash2 } from 'lucide-react';

const tableData = [
    { id: '#1001', name: 'Horizon UI PRO', status: 'Approved', date: '18 Apr 2024', progress: 70, quantity: 220, balance: '1200$' },
    { id: '#1002', name: 'Horizon UI Free', status: 'Disable', date: '26 Apr 2024', progress: 40, quantity: 390, balance: '750$' },
    { id: '#1003', name: 'Marketplace', status: 'Error', date: '20 May 2024', progress: 90, quantity: 170, balance: '1490$' },
    { id: '#1004', name: 'Weekly Updates', status: 'Approved', date: '25 May 2024', progress: 60, quantity: 270, balance: '810$' },
    { id: '#1005', name: 'Project Alpha', status: 'Approved', date: '12 Jun 2024', progress: 85, quantity: 150, balance: '2000$' },
    { id: '#1006', name: 'Beta Testing', status: 'Error', date: '15 Jun 2024', progress: 30, quantity: 410, balance: '450$' },
    { id: '#1007', name: 'User Research', status: 'Approved', date: '22 Jun 2024', progress: 100, quantity: 100, balance: '5000$' },
    { id: '#1008', name: 'Design Sprint', status: 'Disable', date: '01 Jul 2024', progress: 15, quantity: 320, balance: '300$' },
    { id: '#1009', name: 'Backend Setup', status: 'Approved', date: '05 Jul 2024', progress: 50, quantity: 280, balance: '1100$' },
    { id: '#1010', name: 'API Integration', status: 'Approved', date: '10 Jul 2024', progress: 75, quantity: 190, balance: '1600$' },
    { id: '#1011', name: 'Frontend Fixes', status: 'Error', date: '14 Jul 2024', progress: 20, quantity: 450, balance: '200$' },
    { id: '#1012', name: 'Final Build', status: 'Pending', date: '20 Jul 2024', progress: 0, quantity: 50, balance: '0$' },
];

const StatusBadge = ({ status }) => {
    const styles = {
        Approved: { icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-500' },
        Disable: { icon: XCircle, color: 'text-rose-500', bg: 'bg-rose-500' },
        Error: { icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-500' },
        Pending: { icon: AlertCircle, color: 'text-blue-500', bg: 'bg-blue-500' },
    };

    const { icon: Icon, color, bg } = styles[status] || styles.Approved;

    return (
        <div className="flex items-center gap-2 font-bold">
            <div className={`w-5 h-5 rounded-full ${bg} flex items-center justify-center text-white`}>
                <Icon size={14} strokeWidth={4} />
            </div>
            <span className={`text-base ${color}`}>{status}</span>
        </div>
    );
};

const ComplexTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [searchQuery, setSearchQuery] = useState('');
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const dropdownRef = React.useRef(null);
    const itemsPerPage = 4;

    // Handle click outside to close dropdown
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdownId(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Filter data based on search query
    const filteredData = tableData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page when searching
    };

    const toggleRow = (id) => {
        const newSelected = new Set(selectedIds);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedIds(newSelected);
    };

    const toggleAll = () => {
        const allCurrentItemIds = currentItems.map(item => item.id);
        const areAllSelected = allCurrentItemIds.every(id => selectedIds.has(id));

        const newSelected = new Set(selectedIds);
        if (areAllSelected) {
            allCurrentItemIds.forEach(id => newSelected.delete(id));
        } else {
            allCurrentItemIds.forEach(id => newSelected.add(id));
        }
        setSelectedIds(newSelected);
    };

    const isAllSelected = currentItems.length > 0 && currentItems.every(item => selectedIds.has(item.id));

    return (
        <div className="horizon-card h-full flex flex-col pt-8">
            <div className="flex items-center justify-between mb-8 px-4">
                <h3 className="text-2xl font-bold text-nav-text">Complex Table</h3>
                <div className="relative bg-background-body rounded-full flex items-center px-5 py-2.5 w-64 shadow-sm border border-transparent dark:border-white/10">
                    <input
                        type="text"
                        placeholder="Search here"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="bg-transparent border-none outline-none text-sm text-nav-text w-full font-medium placeholder:text-secondary opacity-60"
                    />
                    <Search size={18} className="text-nav-text ml-2 opacity-40" />
                </div>
            </div>

            <div className="flex-1 overflow-x-auto">
                {/* Added: overflow-x-auto wrapper for mobile responsiveness */}
                <div className="w-full overflow-x-auto scrollbar-hide">
                    <table className="w-full min-w-[1000px] text-left border-collapse">
                        <thead>
                            <tr className="border-b border-background-body">
                                <th className="px-6 py-4 w-14">
                                    <div
                                        onClick={toggleAll}
                                        className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center transition-all ${isAllSelected ? 'bg-primary border-primary' : 'bg-background-body border-transparent'
                                            }`}
                                    >
                                        {isAllSelected && <Check size={14} className="text-white" strokeWidth={4} />}
                                    </div>
                                </th>
                                <th className="px-4 py-4 text-sm font-bold text-secondary uppercase tracking-wider opacity-60">ID</th>
                                <th className="px-4 py-4 text-sm font-bold text-secondary uppercase tracking-wider opacity-60">NAME</th>
                                <th className="px-4 py-4 text-sm font-bold text-secondary uppercase tracking-wider opacity-60">STATUS</th>
                                <th className="px-4 py-4 text-sm font-bold text-secondary uppercase tracking-wider opacity-60">DATE</th>
                                <th className="px-4 py-4 text-sm font-bold text-secondary uppercase tracking-wider opacity-60">QUANTITY</th>
                                <th className="px-4 py-4 text-sm font-bold text-secondary uppercase tracking-wider opacity-60">BALANCE</th>
                                <th className="px-4 py-4 text-sm font-bold text-secondary uppercase tracking-wider opacity-60">PROGRESS</th>
                                <th className="px-4 py-4 w-12 text-center"><MoreHorizontal size={20} className="text-secondary opacity-60 mx-auto" /></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-background-body">
                            {currentItems.length > 0 ? (
                                currentItems.map((row) => (
                                    <tr
                                        key={row.id}
                                        className={`transition-colors hover:bg-background-body/20 ${selectedIds.has(row.id) ? 'bg-background-body/40' : ''}`}
                                    >
                                        <td className="px-6 py-6">
                                            <div
                                                onClick={() => toggleRow(row.id)}
                                                className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center transition-all ${selectedIds.has(row.id) ? 'bg-primary border-primary' : 'bg-background-body border-transparent'
                                                    }`}
                                            >
                                                {selectedIds.has(row.id) && <Check size={14} className="text-white" strokeWidth={4} />}
                                            </div>
                                        </td>
                                        <td className="px-4 py-6 text-base font-bold text-nav-text whitespace-nowrap">{row.id}</td>
                                        <td className="px-4 py-6 text-base font-bold text-nav-text whitespace-nowrap">{row.name}</td>
                                        <td className="px-4 py-6 whitespace-nowrap"><StatusBadge status={row.status} /></td>
                                        <td className="px-4 py-6 text-base font-bold text-nav-text whitespace-nowrap">{row.date}</td>
                                        <td className="px-4 py-6 text-base font-bold text-nav-text whitespace-nowrap">{row.quantity}</td>
                                        <td className="px-4 py-6 text-base font-bold text-nav-text whitespace-nowrap">{row.balance}</td>
                                        <td className="px-4 py-6 min-w-[160px]">
                                            <div className="flex items-center gap-4">
                                                <span className="text-base font-bold text-nav-text w-10">{row.progress}%</span>
                                                <div className="flex-1 h-2.5 bg-background-body rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary transition-all duration-1000 rounded-full" style={{ width: `${row.progress}%` }} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-6 text-center relative">

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setOpenDropdownId(openDropdownId === row.id ? null : row.id);
                                                }}
                                                className="text-nav-text opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                                            >
                                                <MoreHorizontal size={20} />
                                            </button>

                                            {openDropdownId === row.id && (
                                                <div
                                                    ref={dropdownRef}
                                                    className="absolute right-4 top-16 w-36 bg-background-card rounded-2xl shadow-2xl z-50 py-2 border border-background-body overflow-hidden"
                                                >
                                                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-bold text-nav-text hover:bg-background-body transition-colors cursor-pointer">
                                                        <RefreshCw size={14} className="opacity-60" />
                                                        Sync
                                                    </button>
                                                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-bold text-nav-text hover:bg-background-body transition-colors cursor-pointer">
                                                        <Edit2 size={14} className="opacity-60" />
                                                        Edit
                                                    </button>
                                                    <div className="px-1 py-1">
                                                        <button className="w-full flex items-center gap-3 px-3 py-1.5 text-sm font-bold text-rose-500 bg-background-body rounded-xl hover:bg-rose-50 transition-colors cursor-pointer">
                                                            <Trash2 size={14} />
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-4 py-16 text-center text-secondary font-medium">
                                        No projects found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-between mt-auto py-6 px-6">
                    <p className="text-base font-bold text-secondary tracking-tight">
                        {filteredData.length > 0 ? `${indexOfFirstItem + 1}-${Math.min(indexOfLastItem, filteredData.length)} of ${filteredData.length}` : '0-0 of 0'}
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1 || filteredData.length === 0}
                            className="p-2 text-secondary hover:text-primary disabled:opacity-20 transition-all cursor-pointer"
                        >
                            <ChevronLeft size={20} strokeWidth={3} />
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all cursor-pointer ${currentPage === i + 1
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'text-secondary hover:bg-background-body'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages || filteredData.length === 0}
                            className="p-2 text-secondary hover:text-primary disabled:opacity-20 transition-all cursor-pointer"
                        >
                            <ChevronRight size={20} strokeWidth={3} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplexTable;
