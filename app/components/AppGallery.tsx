"use client";

import React, { useState, useMemo } from 'react';
import { APPS_CATALOG } from '@/app/data/apps';
import { AppCategory } from '@/app/types';
import AppCard from '@/app/components/AppCard';

const AppGallery: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<AppCategory | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', ...Object.values(AppCategory)];

    const filteredApps = useMemo(() => {
        return APPS_CATALOG.filter(app => {
            const matchesCategory = activeCategory === 'All' || app.category === activeCategory;
            const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                app.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Explore the <span className="gradient-text">Deepchill Ecosystem</span>
                </h1>

                {/* Premium Search Bar */}
                <div className="max-w-2xl mx-auto relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search apps, features, or categories..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-5 pl-14 text-white focus:outline-none focus:border-indigo-500/50 transition-all text-lg backdrop-blur-md"
                        />
                        <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat as any)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === cat
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                                : 'bg-slate-900 text-slate-400 hover:text-white border border-white/5'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="text-sm text-slate-500 font-medium">
                    Showing {filteredApps.length} applications
                </div>
            </div>

            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredApps.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 glass rounded-3xl border-dashed border-2 border-white/5">
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-white mb-2">No applications found</h3>
                    <p className="text-slate-400">Try adjusting your search or category filters.</p>
                </div>
            )}
        </section>
    );
};

export default AppGallery;
