import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Quote, AlertTriangle, CheckCircle2 } from 'lucide-react';

const IdentityCrisisSlide = () => {
    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col h-full gap-6">

                {/* Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-4"
                    >
                        <AlertTriangle size={14} /> The Elephant in the Room
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        "Am I <span className="text-red-500 line-through decoration-4 decoration-white/20">Obsolete?</span>"
                    </motion.h1>
                    <p className="text-slate-400 text-lg mt-2">The anxiety is real. But the conclusion is wrong.</p>
                </div>

                {/* The Conflict Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-4 flex-1">

                    {/* Left: The Crisis */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="absolute -top-4 -left-4 bg-red-500 text-white px-4 py-1 rounded-lg font-bold text-xs uppercase tracking-widest rotate-[-5deg] z-10 shadow-lg">
                            The Fear
                        </div>
                        <div className="bg-black/40 p-2 rounded-2xl border border-red-500/20 shadow-[0_0_50px_-10px_rgba(239,68,68,0.2)]">
                            <img
                                src="afiq.jpg"
                                alt="Afiq Sazlan Tweet: Rethinking career as software engineer"
                                className="w-full rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <p className="text-red-400/80 text-xs mt-3 italic text-center">
                            "Should I pivot? Is coding dead?"
                        </p>
                    </motion.div>

                    {/* Right: The Reality Check */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="relative group"
                    >
                        <div className="absolute -top-4 -right-4 bg-green-500 text-black px-4 py-1 rounded-lg font-bold text-xs uppercase tracking-widest rotate-[5deg] z-10 shadow-lg">
                            The Truth
                        </div>
                        <div className="bg-black/40 p-2 rounded-2xl border border-green-500/20 shadow-[0_0_50px_-10px_rgba(34,197,94,0.2)]">
                            <img
                                src="gerard.png"
                                alt="Gerard Sans Tweet: Software engineering was never about coding"
                                className="w-full rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <p className="text-green-400/80 text-xs mt-3 italic text-center">
                            "Code is just the concrete. You are the Architect."
                        </p>
                    </motion.div>

                </div>

                {/* Bottom Synthesis */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 text-center max-w-3xl mx-auto"
                >
                    <div className="flex justify-center mb-3">
                        <CheckCircle2 className="text-blue-400" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Stop identifying as a <span className="text-slate-500 line-through">Coder</span>. Start identifying as a <span className="text-blue-400">Problem Solver</span>.
                    </h3>
                    <p className="text-slate-400 text-sm">
                        Better materials (AI) don't change structural physics (Engineering Judgment).
                    </p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default IdentityCrisisSlide;
