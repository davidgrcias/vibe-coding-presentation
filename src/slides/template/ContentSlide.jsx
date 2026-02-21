/**
 * ContentSlide — header + 4 icon-card grid + closing quote template
 *
 * Best for: key points, lessons, features, principles, pros/cons
 * Layout: badge + title + subtitle → 2×2 icon cards → takeaway quote
 *
 * To use:
 *   1. Copy this file to src/slides/MyContentSlide.jsx
 *   2. Replace the content variables below
 *   3. Import and add to the slides array in src/App.jsx
 */
import React from 'react';
import Slide from '../../components/Slide';
import { motion } from 'framer-motion';
import { Zap, Shield, Rocket, Brain } from 'lucide-react'; // swap to any lucide icons

const ContentSlide = () => {
    // ─── Replace everything below with your own content ──────────────────────

    const badge = 'Section Label';
    const title = 'Your Main';
    const titleHighlight = 'Point';      // shown in primary colour
    const subtitle = 'One sentence that frames why this slide matters.';

    const cards = [
        {
            icon: <Zap className="text-yellow-400" />,
            title: 'Point One',
            desc: 'Explain this point in one or two sentences. Keep it tight and scannable.',
        },
        {
            icon: <Shield className="text-blue-400" />,
            title: 'Point Two',
            desc: 'Explain this point in one or two sentences. Keep it tight and scannable.',
        },
        {
            icon: <Rocket className="text-green-400" />,
            title: 'Point Three',
            desc: 'Explain this point in one or two sentences. Keep it tight and scannable.',
        },
        {
            icon: <Brain className="text-purple-400" />,
            title: 'Point Four',
            desc: 'Explain this point in one or two sentences. Keep it tight and scannable.',
        },
    ];

    const closingQuote = 'Your key takeaway in one memorable sentence.';

    // ─────────────────────────────────────────────────────────────────────────

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6">

                {/* Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-3 uppercase tracking-widest"
                    >
                        {badge}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        {title} <span className="text-primary italic">{titleHighlight}</span>
                    </motion.h1>
                    <p className="text-slate-400 text-lg mt-2">{subtitle}</p>
                </div>

                {/* Icon-card grid — 2 columns on mobile, 4 on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-black/40 group-hover:bg-primary/20 transition-colors">
                                    {card.icon}
                                </div>
                                <h3 className="text-xs font-bold text-white uppercase tracking-tight">{card.title}</h3>
                            </div>
                            <p className="text-slate-400 text-[11px] leading-snug">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing takeaway — remove if not needed */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-slate-500 text-xs font-mono uppercase tracking-[0.4em] text-center"
                >
                    "{closingQuote}"
                </motion.p>
            </div>
        </Slide>
    );
};

export default ContentSlide;
