import React from 'react';

const SecurityCard = () => {
    return (
        <div className="horizon-card h-full flex flex-col pt-8 pb-6 px-6">


            <div className="flex-1">
                <h3 className="text-3xl font-bold text-nav-text leading-tight mb-4 tracking-tight">
                    Control card security in-app with a tap
                </h3>
                <p className="text-base font-medium text-secondary">
                    Discover our cards benefits, with one tap.
                </p>
            </div>

            <button className="w-full bg-primary text-white font-bold py-4 rounded-[20px] mt-8 shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 text-lg cursor-pointer">
                Cards
            </button>
        </div>
    );
};

export default SecurityCard;
