import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Zap, BookOpen, Scaling, UserCheck, Terminal } from 'lucide-react';

const RoadmapSlide = () => {
    const points = [
        {
            icon: <BookOpen className="text-blue-400" />,
            title: "Speedrun Basics",
            desc: "AI as personal mentor (analogies, error breakdowns). 1-2 months deep dive."
        },
        {
            icon: <Terminal className="text-green-400" />,
            title: "Expert Prompting",
            desc: "Chain of Thought & Context Injection. Standardized senior-level workflows."
        },
        {
            icon: <Scaling className="text-purple-400" />,
            title: "V-Shaped Growth",
            desc: "Deep specialty + AI-bridged breadth. Full-stack problem solvers."
        },
        {
            icon: <Zap className="text-amber-400" />,
            title: "10x Multiplier",
            desc: "Vibe coding is the new normal. Ship early, ship often, ship live."
        }
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-2 uppercase tracking-widest"
                    >
                        Sandhika Galih • WPU • 2026
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter"
                    >
                        Roadmap <span className="text-primary italic">2026</span>
                    </motion.h1>
                    <p className="text-slate-400 text-lg">Survival Guide for the "Dar Der Dor" AI Era.</p>
                </div>

                {/* Massive Bright Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full mb-8 relative"
                >
                    <div className="bg-slate-900 rounded-3xl border-2 border-primary/20 shadow-[0_0_80px_-20px_rgba(var(--primary-rgb),0.2)] overflow-hidden">
                        <img
                            src="/wpu.png"
                            alt="Roadmap 2026"
                            className="w-full h-auto block"
                        />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 bg-primary text-black px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">
                        AI Jet Engine
                    </div>
                </motion.div>

                {/* Point Grid - Very Compact */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                            className="p-5 rounded-xl border border-white/10 bg-primary/5 backdrop-blur-sm group hover:bg-primary/10 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-black/40 group-hover:bg-primary/20 transition-colors">
                                    {point.icon}
                                </div>
                                <h3 className="text-xs font-bold text-white uppercase tracking-tight">{point.title}</h3>
                            </div>
                            <p className="text-slate-400 text-[11px] leading-snug">
                                {point.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 flex flex-col items-center gap-2"
                >
                    <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.4em] mb-2">
                        "Jangan Jadi Tukang Ketik — Jadi Arsitek"
                    </p>
                    <div className="px-6 py-2 rounded-full bg-primary/20 border border-primary/30">
                        <p className="text-xs text-primary font-black uppercase tracking-widest">
                            AI Multiplier + Human Reasoning
                        </p>
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
};

export default RoadmapSlide;
