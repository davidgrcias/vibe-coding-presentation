import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Eye, ShieldCheck, Zap, Layers, Cpu } from 'lucide-react';

const SpotifyCaseSlide = () => {
    const insights = [
        {
            icon: <Zap className="text-green-400" />,
            label: "AI Orchestration",
            text: "Spotify devs focus on review and refinement."
        },
        {
            icon: <Eye className="text-blue-400" />,
            label: "Nerd Eyes",
            text: "Intuition to evaluate and improve AI output."
        },
        {
            icon: <ShieldCheck className="text-red-400" />,
            label: "Anti-AI Slop",
            text: "Fundamentals prevent security & logic issues."
        },
        {
            icon: <Layers className="text-purple-400" />,
            label: "Orchestration",
            text: "Senior roles are expanding, not dying."
        }
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center mb-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter"
                    >
                        Spotify: The <span className="text-green-500">Orchestration</span> Era
                    </motion.h1>
                    <p className="text-slate-400 text-lg">Top developers have shifted from "writing" to "supervising".</p>
                </div>

                {/* Massive Bright Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full mb-8 relative"
                >
                    <div className="bg-slate-900 rounded-3xl border-2 border-green-500/20 shadow-[0_0_80px_-20px_rgba(34,197,94,0.4)] overflow-hidden">
                        <img
                            src="/spotify.png"
                            alt="Spotify Top Developers"
                            className="w-full h-auto block"
                        />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 bg-green-500 text-black px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">
                        2026 Shift
                    </div>
                </motion.div>

                {/* Insight Cards - Compact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                    {insights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                            className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-white/5">
                                    {item.icon}
                                </div>
                                <h3 className="text-sm font-bold text-white uppercase tracking-tight">{item.label}</h3>
                            </div>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-6 text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em]"
                >
                    "Master the basics to guide the AI" — Stefan Mischook
                </motion.p>
            </div>
        </Slide>
    );
};

export default SpotifyCaseSlide;
