
import React from 'react';
import { WebApp } from '@/app/types';

interface AppCardProps {
    app: WebApp;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
    return (
        <div className="group glass rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 border-white/5 hover:border-indigo-500/30">
            <div className="relative h-56 overflow-hidden">
                <img
                    src={app.imageUrl}
                    alt={app.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>

                {app.isNew && (
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                        New Release
                    </div>
                )}

                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-xl shadow-lg border-white/20 overflow-hidden">
                        {app.icon.startsWith('http') || app.icon.startsWith('/') ? (
                            <img src={app.icon} alt="" className="w-full h-full object-cover p-1.5" />
                        ) : (
                            app.icon
                        )}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white leading-tight">{app.name}</h3>
                        <p className="text-xs text-indigo-300 font-medium tracking-wide uppercase">{app.category}</p>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {app.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {app.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-1 rounded-lg bg-slate-800 text-slate-400 font-medium border border-slate-700">
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href={`https://${app.subdomain}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all border border-white/5"
                >
                    Launch App
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default AppCard;
