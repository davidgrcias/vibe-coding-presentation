/**
 * StatsSlide — large-number metrics grid template
 *
 * Best for: research findings, product impact numbers, before/after metrics
 * Layout: badge + title → 4-stat grid with big numbers → source attribution
 *
 * To use:
 *   1. Copy this file to src/slides/MyStatsSlide.jsx
 *   2. Replace the content variables below
 *   3. Import and add to the slides array in src/App.jsx
 */
import React from 'react';
import Slide from '../../components/Slide';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react'; // swap to any lucide icon

const StatsSlide = () => {
    // ─── Replace everything below with your own content ──────────────────────

    const badge = 'Research · Year';
    const title = 'The Numbers';
    const titleHighlight = 'Speak';    // shown in primary colour

    const stats = [
        {
            value: '80%',
            label: 'Stat Label One',
            desc: 'One sentence of context for this number.',
        },
        {
            value: '2×',
            label: 'Stat Label Two',
            desc: 'One sentence of context for this number.',
        },
        {
            value: '< 10 min',
            label: 'Stat Label Three',
            desc: 'One sentence of context for this number.',
        },
        {
            value: '$1 M+',
            label: 'Stat Label Four',
            desc: 'One sentence of context for this number.',
        },
    ];

    const source = 'Source: Your Source Name, Year';

    // ─────────────────────────────────────────────────────────────────────────

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-8">

                {/* Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-3"
                    >
                        <TrendingUp size={12} /> {badge}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        {title} <span className="text-primary italic">{titleHighlight}</span>
                    </motion.h1>
                </div>

                {/* Stats grid — 2 columns on mobile, 4 on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                            className="p-6 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col items-center text-center gap-2"
                        >
                            <p className="text-4xl md:text-5xl font-black text-primary">{stat.value}</p>
                            <p className="text-white font-bold text-sm uppercase tracking-tight">{stat.label}</p>
                            <p className="text-slate-500 text-xs leading-tight">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Source attribution — remove if not needed */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-slate-600 text-xs font-mono"
                >
                    {source}
                </motion.p>
            </div>
        </Slide>
    );
};

export default StatsSlide;
