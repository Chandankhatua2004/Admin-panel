import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, GripVertical, RefreshCw, Edit2, Trash2 } from 'lucide-react';

const initialTasks = [
    { id: 1, label: 'Landing Page Design', completed: false },
    { id: 2, label: 'Dashboard Builder', completed: true },
    { id: 3, label: 'Mobile App Design', completed: true },
    { id: 4, label: 'Illustrations', completed: false },
    { id: 5, label: 'Promotional LP', completed: true },
];

const TasksChecklist = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const menuItems = [
        { icon: RefreshCw, label: 'Sync' },
        { icon: Edit2, label: 'Edit' },
        { icon: Trash2, label: 'Remove', color: 'text-rose-500' },
    ];

    return (
        <div className="horizon-card h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-[22px] h-[22px] bg-primary rounded flex items-center justify-center">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-nav-text">Tasks</h3>
                </div>

                <div className="relative" ref={menuRef}>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-1.5 rounded-xl bg-background-body text-primary hover:bg-[#E0E5F2] transition-colors cursor-pointer"
                    >
                        <MoreHorizontal size={20} />
                    </button>

                    {isMenuOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-background-card rounded-2xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] z-50 py-2 border border-background-body animate-in fade-in zoom-in duration-200 origin-top-right">
                            {menuItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-background-body transition-colors group cursor-pointer ${item.color || 'text-nav-text'}`}
                                >
                                    <item.icon size={18} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                                    <span className="text-sm font-bold tracking-tight">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-4 flex-1">
                {tasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                            <div
                                onClick={() => toggleTask(task.id)}
                                className={`w-[22px] h-[22px] rounded border-2 cursor-pointer flex items-center justify-center transition-all ${task.completed ? 'bg-primary border-primary' : 'bg-transparent border-background-body'
                                    }`}
                            >
                                {task.completed && (
                                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                )}
                            </div>
                            <span className={`text-base font-bold transition-all ${task.completed ? 'text-nav-text' : 'text-secondary'
                                }`}>
                                {task.label}
                            </span>
                        </div>
                        <GripVertical size={18} className="text-secondary opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing transition-opacity" />
                    </div>
                ))}
            </div>
        </div >
    );
};

export default TasksChecklist;
