import React from 'react';

const historyData = [
    { id: 1, title: 'Colorful Heaven', author: 'Mark Benjamin', value: '1.30 ETH', time: '30s ago', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=50&h=50&fit=crop' },
    { id: 2, title: 'Abstract Colors', author: 'Esthera Jackson', value: '0.91 ETH', time: '58s ago', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=50&h=50&fit=crop' },
    { id: 3, title: 'ETH AI Brain', author: 'Nick Wilson', value: '2.82 ETH', time: '1m ago', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=50&h=50&fit=crop' },
    { id: 4, title: 'Swipe Art', author: 'Cassie Williams', value: '2.30 ETH', time: '2m ago', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=50&h=50&fit=crop' },
];

const HistoryList = () => {
    return (
        <div className="horizon-card w-full h-full">
            <div className="flex items-center justify-between mb-8 px-1">
                <h3 className="text-xl font-bold text-nav-text">History</h3>
                <button className="text-sm font-bold text-primary px-4 py-2 bg-background-body rounded-full hover:bg-primary/5 transition-all text-center">See all</button>
            </div>
            <div className="space-y-2">
                {historyData.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 -mx-3 rounded-[20px] transition-all cursor-pointer hover:bg-background-card hover:shadow-[0_20px_40px_-15px_rgba(112,144,174,0.15)] border border-transparent hover:border-background-body">
                        <div className="flex items-center gap-3">
                            <img src={item.image} className="w-12 h-12 rounded-[14px] object-cover" />
                            <div>
                                <h4 className="text-base font-bold text-nav-text leading-none mb-1.5">{item.title}</h4>
                                <p className="text-xs text-secondary font-medium">By {item.author}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center justify-end gap-1.5 font-bold text-nav-text">
                                <svg width="10" height="15" viewBox="0 0 10 15" fill="none" className="shrink-0"><path d="M5.00001 0L0.27832 7.5L5.00001 15L9.7217 7.5L5.00001 0Z" fill="currentColor" /></svg>
                                <span>{item.value}</span>
                            </div>
                            <p className="text-[10px] text-secondary font-bold uppercase mt-1">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryList;
