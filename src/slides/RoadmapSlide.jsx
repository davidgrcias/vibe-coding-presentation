import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Zap, BookOpen, Scaling, UserCheck, Terminal } from 'lucide-react';

const RoadmapSlide = () => {
    const points = [
        {
            icon: <BookOpen className="text-blue-400" />,
            title: "Fundamentals",
            desc: "Speedrun the basics to debug AI code."
        },
        {
            icon: <Scaling className="text-purple-400" />,
            title: "V-Shaped",
            desc: "Deep skills + broad AI integration."
        },
        {
            icon: <Terminal className="text-green-400" />,
            title: "Prompting",
            desc: "Senior techniques for multiplier effects."
        },
        {
            icon: <UserCheck className="text-amber-400" />,
            title: "Mindset",
            desc: "Don't be a typist, be an architect."
        }
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-6">
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
                    <div className="bg-slate-900 rounded-3xl border-2 border-primary/20 shadow-[0_0_80px_-20px_rgba(var(--primary-rgb),0.4)] overflow-hidden">
                        <img
                            src="/wpu.png"
                            alt="Roadmap 2026"
                            className="w-full h-auto block"
                        />
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
                            className="p-4 rounded-xl border border-white/10 bg-primary/5"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-black/20">
                                    {point.icon}
                                </div>
                                <h3 className="text-xs font-bold text-white uppercase tracking-tight">{point.title}</h3>
                            </div>
                            <p className="text-slate-400 text-[10px] leading-tight">
                                {point.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 px-6 py-2 rounded-full bg-primary/20 border border-primary/30"
                >
                    <p className="text-xs text-primary font-black uppercase tracking-widest">
                        Maximize AI — Master Fundamentals
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
};

export default RoadmapSlide;
