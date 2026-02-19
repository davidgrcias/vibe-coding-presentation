import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Brain, FileText, LayoutTemplate, Bug } from 'lucide-react';

const VibeFundamentalsSlide = () => {
    const fundamentals = [
        {
            icon: <Brain className="text-pink-400" />,
            title: "4 Thinking Levels",
            desc: "Logical (What), Analytical (How), Computational (Logic), Procedural (Execution)."
        },
        {
            icon: <FileText className="text-blue-400" />,
            title: "The PRD",
            desc: "Zero chaos. Define audience, features, and milestones before prompting AI."
        },
        {
            icon: <LayoutTemplate className="text-purple-400" />,
            title: "AI-Friendly Stack",
            desc: "Next.js, Tailwind, Supabase. Choose tools AI writes well for best results."
        },
        {
            icon: <Bug className="text-red-400" />,
            title: "Git Safety Net",
            desc: "Commit frequently. Avoid losing work by versioning every milestone."
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
                        className="inline-block px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono mb-2 uppercase tracking-widest"
                    >
                        Tina Huang • Fundamentals Guide
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter"
                    >
                        Vibe Coding <span className="text-pink-500 italic">Fundamentals</span>
                    </motion.h1>
                </div>

                {/* Massive Bright Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full mb-8 relative"
                >
                    <div className="bg-slate-900 rounded-3xl border-2 border-pink-500/20 shadow-[0_0_80px_-20px_rgba(236,72,153,0.3)] overflow-hidden">
                        <img
                            src="vibe-coding.png"
                            alt="Tina Huang - Vibe Coding Fundamentals"
                            className="w-full h-auto block"
                        />
                    </div>
                </motion.div>

                {/* Point Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {fundamentals.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                            className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-black/40 group-hover:bg-pink-500/20 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xs font-bold text-white uppercase tracking-tight">{item.title}</h3>
                            </div>
                            <p className="text-slate-400 text-[11px] leading-snug">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-center"
                >
                    <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.4em] mb-2">
                        "Iteration & Patience = No Bugs"
                    </p>
                    <p className="text-xs text-slate-400 font-medium max-w-xl mx-auto italic">
                        "Vibe coding isn't lazy — it's about combining logical vision with AI execution and engineering discipline."
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
};

export default VibeFundamentalsSlide;
