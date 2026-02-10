import React, { useState } from 'react';
import { MoreVertical, Plus, User, Edit2, Trash2 } from 'lucide-react';

const membersArr = [
    { id: 1, name: 'Jason Statham', role: 'Web Developer', avatar: 'https://i.pravatar.cc/100?u=jason' },
    { id: 2, name: 'Christian Mad', role: 'Product Designer', avatar: 'https://i.pravatar.cc/100?u=christian' },
    { id: 3, name: 'Tom Holland', role: 'Content Creator', avatar: 'https://i.pravatar.cc/100?u=tom' },
    { id: 4, name: 'Alexa Smith', role: 'Marketing Manager', avatar: 'https://i.pravatar.cc/100?u=alexa' },
];

const TeamMembers = () => {
    const [openDropdownId, setOpenDropdownId] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdownId(openDropdownId === id ? null : id);
    };

    return (
        <div className="horizon-card relative h-full">
            <div className="flex items-center justify-between mb-8 px-2">
                <h3 className="text-2xl font-bold text-nav-text">Team members</h3>
                <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 hover:scale-105 transition-transform cursor-pointer">
                    <Plus size={18} strokeWidth={3} />
                </button>
            </div>
            <div className="space-y-3">
                {membersArr.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 bg-background-card rounded-[22px] shadow-[0px_18px_40px_rgba(112,144,174,0.06)] transition-all cursor-pointer border border-transparent hover:border-primary/20 relative group">
                        <div className="flex items-center gap-4">
                            <img src={member.avatar} alt={member.name} className="w-14 h-14 rounded-full border-2 border-background-card shadow-sm object-cover" />
                            <div>
                                <h4 className="text-base font-bold text-nav-text leading-none mb-1">{member.name}</h4>
                                <p className="text-xs text-secondary font-medium">{member.role}</p>
                            </div>
                        </div>
                        <div className="relative">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDropdown(member.id);
                                }}
                                className="text-secondary/30 hover:text-primary transition-colors p-1 cursor-pointer"
                            >
                                <MoreVertical size={20} />
                            </button>
                            {openDropdownId === member.id && (
                                <div className="absolute right-0 mt-2 w-40 bg-background-card rounded-2xl shadow-2xl shadow-secondary/20 border border-background-body z-50 py-2 animate-in fade-in zoom-in duration-200">
                                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-bold text-nav-text hover:bg-background-body transition-colors group cursor-pointer">
                                        <User size={16} className="text-secondary group-hover:text-primary transition-colors" />
                                        <span>Profile</span>
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-bold text-nav-text hover:bg-background-body transition-colors group cursor-pointer">
                                        <Edit2 size={16} className="text-secondary group-hover:text-primary transition-colors" />
                                        <span>Edit</span>
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-bold text-rose-500 hover:bg-background-body transition-colors group border-t border-background-body mt-1 pt-2 cursor-pointer">
                                        <Trash2 size={16} />
                                        <span>Remove</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;
