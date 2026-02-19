import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Layers, Server, Database, Box, Shield, Zap, AlertCircle } from 'lucide-react';

const ProblemSlide = () => {
    const expectations = [
        { icon: <Layers size={18} />, category: "Frontend", text: "React/Next.js + TS + Tailwind", color: "text-blue-400" },
        { icon: <Server size={18} />, category: "Backend", text: "Node/Express or Python", color: "text-green-400" },
        { icon: <Database size={18} />, category: "Database", text: "Postgres + Redis", color: "text-yellow-400" },
        { icon: <Box size={18} />, category: "DevOps", text: "Docker + Vercel/AWS", color: "text-orange-400" },
        { icon: <Shield size={18} />, category: "Auth", text: "JWT, OAuth, Supabase", color: "text-red-400" },
        { icon: <Zap size={18} />, category: "AI", text: "Integration & Orchestration", color: "text-purple-400" },
    ];

    return (
        <Slide className="!p-6 md:!p-12">
            <div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-between">

                {/* Header */}
                <div className="text-center mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter"
                    >
                        Cognitive <span className="text-red-500">Overload</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-slate-400 max-w-3xl mx-auto"
                    >
                        One dev, infinite stack. <span className="text-slate-200">More context-switching, less Shipping.</span>
                    </motion.p>
                </div>

                {/* Main Content Split */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">

                    {/* Left: The Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex-1 bg-slate-900/50 p-6 rounded-2xl border border-slate-800"
                    >
                        <h3 className="text-lg font-bold text-slate-400 mb-6 uppercase tracking-widest">Job Expectations (2026)</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {expectations.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all">
                                    <div className={`${item.color}`}>{item.icon}</div>
                                    <div className="flex flex-col">
                                        <span className={`text-[10px] font-black uppercase tracking-tighter ${item.color} opacity-70`}>{item.category}</span>
                                        <span className="text-slate-300 text-xs font-mono">{item.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: The Pain */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex-1 flex flex-col gap-4"
                    >
                        <div className="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 flex-grow">
                            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                                <AlertCircle size={20} /> Why it hurts
                            </h3>
                            <ul className="space-y-3 text-lg text-slate-200 list-inside">
                                <li className="flex gap-2"><span>-</span> Tech updates too fast.</li>
                                <li className="flex gap-2"><span>-</span> Infinite boilerplate & config.</li>
                                <li className="flex gap-2"><span>-</span> Stuck on "HOW" → No time for "WHY".</li>
                            </ul>
                        </div>
                        <p className="text-slate-500 text-xs italic px-4">
                            Boilerplate kills the vibe.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Takeaway */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-center"
                >
                    <p className="text-2xl text-primary font-black uppercase tracking-tighter">
                        AI handles the "how" → you own the "what".
                    </p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default ProblemSlide;
