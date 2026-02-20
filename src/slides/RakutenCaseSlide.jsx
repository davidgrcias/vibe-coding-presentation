import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingDown, Clock, CheckCircle, Lock } from 'lucide-react';

const RakutenCaseSlide = () => {
    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col h-full gap-5">

                {/* Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3"
                    >
                        <ShieldCheck size={14} /> Enterprise Scale Proof
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tighter"
                    >
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Rakuten</span> Reality Review
                    </motion.h1>
                    <p className="text-slate-400 text-sm md:text-base mt-2">
                        Fortune 500. 12.5 Million Lines of Code. <span className="text-white font-bold">Zero Compromise.</span>
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch flex-1">

                    {/* Left: The Concern */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-4 bg-[#1e1e1e] p-6 rounded-2xl border border-white/5 shadow-xl"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-red-400 flex items-center gap-2">
                                <TrendingDown size={20} />
                                The Concern
                            </h3>
                            <span className="text-xs text-slate-500 font-mono">Survey Data</span>
                        </div>

                        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/20 flex-1 min-h-[200px]">
                            <img
                                src="biggest-concern.png"
                                alt="Survey showing accuracy as top concern"
                                className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm text-slate-300">
                                <span className="text-red-400 font-bold">77%</span> of engineers fear "Inaccurate Output".
                            </p>
                            <p className="text-sm text-slate-300">
                                <span className="text-red-400 font-bold">46%</span> worry about "Data Leakage".
                            </p>
                            <div className="h-px bg-white/10 my-2" />
                            <p className="text-xs text-slate-500 italic">
                                "Can we really trust an agent with a massive enterprise codebase?"
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: The Rakuten Proof */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col gap-4 bg-gradient-to-br from-purple-900/20 to-blue-900/10 p-6 rounded-2xl border border-purple-500/20 shadow-xl"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-purple-400 flex items-center gap-2">
                                <CheckCircle size={20} />
                                The Reality
                            </h3>
                            <div className="bg-white px-2 py-1 rounded">
                                <img src="Rakuten-AI-2025.webp" alt="Rakuten AI" className="h-4 object-contain" />
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-2">
                            <div className="bg-black/30 p-3 rounded-lg border border-purple-500/20">
                                <div className="text-2xl font-black text-white">99.9%</div>
                                <div className="text-[10px] text-purple-300 uppercase tracking-wider">Accuracy</div>
                            </div>
                            <div className="bg-black/30 p-3 rounded-lg border border-purple-500/20">
                                <div className="text-2xl font-black text-white">5 <span className="text-sm font-normal text-slate-400">Days</span></div>
                                <div className="text-[10px] text-purple-300 uppercase tracking-wider">vs 24 Days</div>
                            </div>
                        </div>

                        <div className="space-y-4 flex-1">
                            <div className="flex gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-lg h-fit text-purple-300">
                                    <ShieldCheck size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Solved: Accuracy</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        Used <strong>Anthropic Claude Code</strong> on <span className="text-white">12.5M lines</span> of code (3 languages). ran autonomous for <span className="text-white">7 hours</span> with self-critique loops.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="p-2 bg-blue-500/20 rounded-lg h-fit text-blue-300">
                                    <Lock size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Solved: Security</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        Implementation of strict <strong>Guardrails</strong> + Scoped Tool Access. Human remains the "Orchestrator" for final guidance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto bg-purple-500/10 p-3 rounded-lg border border-purple-500/20">
                            <p className="text-xs text-purple-200 italic text-center">
                                "The age of agentic AI has arrived." <br />
                                <span className="font-bold not-italic text-white underline decoration-purple-500">— Mickey Mikitani, CEO Rakuten</span>
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </Slide>
    );
};

export default RakutenCaseSlide;
