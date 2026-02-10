import React from 'react';

const LessonCard = () => {
    return (
        <div className="horizon-card bg-background-card p-0 overflow-hidden flex flex-col h-full">
            <div className="p-8 pb-6 flex-1">
                <div className="flex items-start gap-4 mb-8">
                    <div className="w-14 h-14 bg-rose-50 dark:bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500 shrink-0">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M11.727 6.744c.101-1.332-.705-2.617-1.933-3.08-2.693-1.018-5.32 1.487-4.263 4.093.076.188.192.359.34.498.995.94 2.21 1.42 2.21 3.511 0 1.25-.325 2.1-1.071 2.548-1.536.921-1.896 2.457-1.464 2.89.432.433 1.968.073 2.89-1.463.447-.745 1.298-1.07 2.547-1.07 2.092 0 2.571 1.215 3.512 2.209.139.148.31.264.498.34 2.606 1.057 5.111-1.57 4.093-4.263-.464-1.229-1.748-2.034-3.08-1.933-2.091.157-3.328-.868-3.328-2.201 0-.616.141-1.127.349-1.554-.15-.091-.322-.132-.49-.13h-.01c-.347.01-.676.16-.913.411-.328.347-.502.812-.487 1.284.053 1.706-1.085 2.534-2.201 2.534-1.25 0-2.1-.325-2.548-1.071-.92-1.536-2.456-1.896-2.89-1.463-.432.432-.072 1.968 1.463 2.89.746.447 1.071 1.297 1.071 2.547 0 1.916-.983 2.511-2.053 3.323-.195.148-.426.23-.665.239-2.067.078-3.328-2.148-2.261-3.921.467-.777 1.267-1.269 2.155-1.325.617-.039 1.15-.357 1.466-.867.243-.393.308-.868.182-1.31-.126-.44-.413-.801-.8-.999-.604-.312-1-.937-1-1.63 0-1.105.895-2 2-2s2 .895 2 2"></path></svg>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1 opacity-70">Business Design</p>
                        <h4 className="text-lg font-bold text-nav-text leading-tight">New lesson is available</h4>
                    </div>
                </div>

                <h2 className="text-[26px] font-bold text-nav-text leading-[1.2] mb-10 pr-4">
                    What do you need to know to create better products?
                </h2>

                <div className="flex items-center gap-8 mb-8">
                    <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>85 mins</span>
                    </div>
                    <div className="flex items-center gap-2 text-rose-500 font-bold text-sm">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        <span>Video format</span>
                    </div>
                </div>
            </div>

            <div className="p-8 pt-0 mt-auto flex items-center justify-between">
                <div className="flex items-center -space-x-2">
                    <img src="https://i.pravatar.cc/36?u=1" className="w-10 h-10 rounded-full border-4 border-background-card shadow-sm" />
                    <img src="https://i.pravatar.cc/36?u=2" className="w-10 h-10 rounded-full border-4 border-background-card shadow-sm" />
                    <img src="https://i.pravatar.cc/36?u=3" className="w-10 h-10 rounded-full border-4 border-background-card shadow-sm" />
                    <div className="w-10 h-10 rounded-full bg-background-body border-4 border-background-card flex items-center justify-center text-xs font-bold text-primary shadow-sm">18+</div>
                </div>
                <button className="bg-primary text-white font-bold py-4 px-10 rounded-[22px] hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 text-base cursor-pointer">Get Started</button>
            </div>
        </div>
    );
};

export default LessonCard;
