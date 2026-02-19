import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Zap, Briefcase } from 'lucide-react';

const ITTransformationSlide = () => {
    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col h-full gap-6">

                {/* Header */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-3"
                    >
                        <Zap size={12} /> Muddu Sudhakar • InfoWorld 2026
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                        Supercharging <span className="text-indigo-400">IT Teams</span>
                    </h1>
                    <p className="text-slate-400 text-lg mt-2 font-medium max-w-2xl">
                        "The solution isn't more hours. It's rethinking WHO gets to build."
                    </p>
                </div>

                {/* Article Image Snapshot */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="w-full relative group"
                >
                    <div className="bg-slate-900 rounded-2xl border border-indigo-500/30 overflow-hidden shadow-[0_0_50px_-10px_rgba(99,102,241,0.2)]">
                        <img
                            src="how-vibe-coding-will-article.png"
                            alt="InfoWorld Article Snapshot"
                            className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {/* Left Col: The Shift */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900/50 border border-indigo-500/20 rounded-2xl p-6 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                                    <Users size={24} />
                                </div>
                                <h2 className="text-xl font-bold text-white">Democratizing Creation</h2>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-indigo-400 font-bold">•</span>
                                    <p className="text-slate-300 text-sm">
                                        <strong className="text-white block">Domain Experts as Builders</strong>
                                        HR, Ops, and IT specialists describe workflows in natural language. AI Agents execute dependencies.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-indigo-400 font-bold">•</span>
                                    <p className="text-slate-300 text-sm">
                                        <strong className="text-white block">Devs Focus on Innovation</strong>
                                        Stop doing repetitive "ticket work". Focus on architecture, safety, and complex problems.
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-indigo-400 font-bold">•</span>
                                    <p className="text-slate-300 text-sm">
                                        <strong className="text-white block">No More "Ticket Hell"</strong>
                                        Incident response? Just tell the Agent the conditions. It reads context, spots patterns, and automates next steps.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Col: The Mindset */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-slate-900/50 border border-green-500/20 rounded-2xl p-6 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-green-500/10 rounded-xl text-green-400">
                                    <ShieldCheck size={24} />
                                </div>
                                <h2 className="text-xl font-bold text-white">The "Vibe-but-Check" Mindset</h2>
                            </div>

                            <div className="space-y-4">
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    AI is like a power plant—raw energy needs a grid. Don't just trust; <span className="text-green-400 font-bold">Orchestrate.</span>
                                </p>

                                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                                    <h3 className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-bold">The New Workflow</h3>
                                    <div className="flex items-center gap-2 text-sm">
                                        <div className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded">Domain Expert Vibe</div>
                                        <div className="text-slate-600">→</div>
                                        <div className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded">AI Agent Execution</div>
                                        <div className="text-slate-600">→</div>
                                        <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded">Human Governance</div>
                                    </div>
                                </div>

                                <p className="text-slate-400 text-sm italic mt-4">
                                    "Organizations that act early will reduce operational friction and protect teams from burnout."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Stat */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-2 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-4 flex items-center justify-between"
                >
                    <div className="flex gap-4 items-center">
                        <Briefcase className="text-orange-400" size={24} />
                        <div>
                            <p className="text-white font-bold text-lg">IT Project Requests <span className="text-orange-400">+18%</span> in 2025</p>
                            <p className="text-slate-500 text-xs">Traditional capacity is broken. Vibe Coding is the only way to scale.</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </Slide>
    );
};

export default ITTransformationSlide;
