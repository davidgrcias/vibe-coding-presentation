import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Layers, Server, Database, Box, Shield, Zap, AlertCircle } from 'lucide-react';

const ProblemSlide = () => {
    const expectations = [
        { icon: <Layers size={18} />, category: "Frontend", text: "React/Next.js + TS + Tailwind/shadcn", color: "text-blue-400" },
        { icon: <Server size={18} />, category: "Backend", text: "Node/Express or Python/FastAPI", color: "text-green-400" },
        { icon: <Database size={18} />, category: "Database", text: "PostgreSQL, Redis, maybe MongoDB", color: "text-yellow-400" },
        { icon: <Box size={18} />, category: "DevOps", text: "Docker, CI/CD, AWS/Vercel", color: "text-orange-400" },
        { icon: <Shield size={18} />, category: "Auth & Sec", text: "JWT, OAuth, Supabase/Auth0", color: "text-red-400" },
        { icon: <Zap size={18} />, category: "Extras", text: "AI Integration, Testing, Analytics", color: "text-purple-400" },
    ];

    return (
        <Slide className="!p-6 md:!p-12">
            <div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-between">

                {/* Header */}
                <div className="text-center mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight"
                    >
                        The Developer <span className="text-red-500">Cognitive Overload</span> in 2026
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto"
                    >
                        One person expected to handle an ever-growing stack → <span className="text-slate-200 font-semibold">more context switching, slower delivery, higher burnout risk.</span>
                    </motion.p>
                </div>

                {/* Main Content Split */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 flex-grow">

                    {/* Left: Job Expectations */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex-1 bg-slate-900/50 p-6 rounded-2xl border border-slate-800"
                    >
                        <h3 className="text-xl font-bold text-slate-300 mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                            Real 2026 Job Expectations
                        </h3>
                        <div className="space-y-4">
                            {expectations.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors">
                                    <div className={`mt-1 ${item.color}`}>{item.icon}</div>
                                    <div>
                                        <span className={`text-xs font-bold uppercase tracking-wider ${item.color} opacity-80`}>{item.category}</span>
                                        <p className="text-slate-300 font-mono text-sm md:text-base">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Why It's Overwhelming */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-8 rounded-2xl border border-cyan-500/30 relative overflow-hidden flex-grow">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <AlertCircle size={100} className="text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Why It Feels Overwhelming</h3>
                            <ul className="space-y-4 text-lg text-slate-200">
                                <li className="flex gap-3">
                                    <span className="text-cyan-500 font-bold">•</span>
                                    Tech updates every 6–12 months
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-500 font-bold">•</span>
                                    Constant boilerplate & config
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-500 font-bold">•</span>
                                    Stuck on "HOW" → less time for "WHY"
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-500 font-bold">•</span>
                                    Growing friction despite new tools
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
                            <p className="text-slate-400 text-sm italic">
                                "React + TS + Node/Python/Postgres is the most frequent combo. <br />
                                No exaggeration, just real pain points."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Takeaway */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        AI agents shift the focus:
                    </h2>
                    <p className="text-xl text-primary font-medium">
                        Handle repetitive "how" → let developers own the "what" & "why"
                    </p>
                    <p className="text-slate-500 text-sm mt-4 font-mono">
                        From syntax & config hunters → system thinkers & product builders
                    </p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default ProblemSlide;
