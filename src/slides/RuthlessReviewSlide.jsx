import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Search, ListChecks, AlertTriangle, ShieldAlert } from 'lucide-react';

const RuthlessReviewSlide = () => {
    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col h-full gap-5">

                {/* Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-3"
                    >
                        <ShieldAlert size={14} /> The "Ruthless" Reviewer
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tighter"
                    >
                        Automated <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Compliance Audit</span>
                    </motion.h1>
                    <p className="text-slate-400 text-sm md:text-base mt-2 max-w-2xl mx-auto">
                        Antigravity + MCP connects your code directly to Jira requirements. <br />
                        It checks every Acceptance Criteria point—automatically.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start flex-1">

                    {/* Left: The Prompt (Input) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-4 flex flex-col gap-4"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">1</div>
                            <h3 className="text-sm font-bold text-slate-300">The "Ruthless" Prompt</h3>
                        </div>
                        <div className="bg-[#1e1e1e] rounded-xl border border-white/10 shadow-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors" />
                            <img
                                src="prompt-check-jira.png"
                                alt="Prompt: Verify implementation against Jira tickets"
                                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="p-3 bg-red-900/10 border border-red-500/20 rounded-lg">
                            <AlertTriangle size={16} className="text-red-400 mb-1" />
                            <p className="text-[10px] text-red-300 leading-relaxed font-mono">
                                "Verify strict alignment. Check every AC point. Given-When-Then."
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: The Output (Reports) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-8 flex flex-col gap-4"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-xs font-bold">2</div>
                            <h3 className="text-sm font-bold text-slate-300">The Audit Result</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Report 1 */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#1e1e1e] rounded-xl border border-white/10 shadow-lg overflow-hidden"
                            >
                                <img
                                    src="review-1.png"
                                    alt="Review Report Page 1"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Report 2 */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#1e1e1e] rounded-xl border border-white/10 shadow-lg overflow-hidden"
                            >
                                <img
                                    src="review-2.png"
                                    alt="Review Report Page 2"
                                    className="w-full h-auto"
                                />
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-slate-800/50 p-2 rounded border border-slate-700 text-center">
                                <Search size={14} className="mx-auto text-blue-400 mb-1" />
                                <p className="text-[9px] text-slate-400">Reads Jira Tickets</p>
                            </div>
                            <div className="bg-slate-800/50 p-2 rounded border border-slate-700 text-center">
                                <ListChecks size={14} className="mx-auto text-green-400 mb-1" />
                                <p className="text-[9px] text-slate-400">Verifies AC Points</p>
                            </div>
                            <div className="bg-slate-800/50 p-2 rounded border border-slate-700 text-center">
                                <AlertTriangle size={14} className="mx-auto text-yellow-400 mb-1" />
                                <p className="text-[9px] text-slate-400">Flags Tech Debt</p>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </Slide>
    );
};

export default RuthlessReviewSlide;
