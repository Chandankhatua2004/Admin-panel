import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../locales/translations';

const nftData = [
    { id: 1, title: 'Colorful Heaven', author: 'Mark Benjamin', bid: '1.30 ETH', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=250&fit=crop' },
    { id: 2, title: 'Abstract Colors', author: 'Esthera Jackson', bid: '0.91 ETH', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=250&fit=crop' },
    { id: 3, title: 'ETH AI Brain', author: 'Nick Wilson', bid: '2.82 ETH', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=250&fit=crop' },
    { id: 4, title: 'Mesh Gradient', author: 'Will Smith', bid: '0.50 ETH', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&h=250&fit=crop' },
    { id: 5, title: 'Digital Art #1', author: 'Hellen Schmidt', bid: '1.20 ETH', image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=400&h=250&fit=crop' },
    { id: 6, title: 'Cyber World', author: 'Josh Abraham', bid: '4.10 ETH', image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=250&fit=crop' },
    { id: 7, title: 'Liquid Gold', author: 'Sarah Jenkins', bid: '2.45 ETH', image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=400&h=250&fit=crop' },
    { id: 8, title: 'Neon Nights', author: 'David Veen', bid: '0.85 ETH', image: 'https://images.unsplash.com/photo-1635241161466-541f065683ba?w=400&h=250&fit=crop' },
    { id: 9, title: 'Future City', author: 'Elena Rose', bid: '5.20 ETH', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400&h=250&fit=crop' },
    { id: 10, title: 'Abstract Wave', author: 'Kyle Smith', bid: '3.15 ETH', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=250&fit=crop' },
];

const TrendingNFTs = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400; // Adjust based on card width + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="horizon-card h-full flex flex-col">
            <div className="flex items-center justify-between mb-8 px-2">
                <h3 className="text-2xl font-bold text-nav-text">{t.trending}</h3>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => scroll('left')}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-background-body transition-all cursor-pointer"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-background-body transition-all cursor-pointer"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            >
                {nftData.map((nft) => (
                    <div
                        key={nft.id}
                        className="min-w-[320px] md:min-w-[380px] snap-start group bg-background-body p-5 rounded-[30px] transition-all hover:bg-background-card hover:shadow-[0_20px_40px_-15px_rgba(112,144,174,0.15)] border border-transparent flex flex-col"
                    >
                        <div className="relative rounded-[24px] overflow-hidden mb-6 aspect-video">
                            <img src={nft.image} alt={nft.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                            <button className="absolute top-4 right-4 w-11 h-11 rounded-full bg-background-card flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform cursor-pointer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </button>
                        </div>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h4 className="font-bold text-nav-text text-xl mb-1">{nft.title}</h4>
                                <p className="text-sm text-secondary font-medium">By {nft.author}</p>
                            </div>
                            <div className="flex items-center -space-x-3 bg-background-card p-1 rounded-full shadow-sm">
                                <img src="https://i.pravatar.cc/32?u=1" className="w-8 h-8 rounded-full border-2 border-background-card" />
                                <img src="https://i.pravatar.cc/32?u=2" className="w-8 h-8 rounded-full border-2 border-background-card" />
                                <img src="https://i.pravatar.cc/32?u=3" className="w-8 h-8 rounded-full border-2 border-background-card" />
                                <div className="w-8 h-8 rounded-full bg-background-body border-2 border-background-card flex items-center justify-center text-[10px] font-bold text-primary">14+</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                            <p className="text-base font-bold text-primary">Current Bid: {nft.bid}</p>
                            <button className="bg-primary text-white text-sm font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 cursor-pointer">Place Bid</button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default TrendingNFTs;
