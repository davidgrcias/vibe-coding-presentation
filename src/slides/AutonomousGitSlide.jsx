import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { GitBranch, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

const AutonomousGitSlide = () => {
    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col h-full gap-5">

                {/* Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3"
                    >
                        <ShieldCheck size={14} /> The Autonomous Audit Trail
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        AI Doesn't Just Code. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            It Documents Its Own Work.
                        </span>
                    </motion.h1>
                    <p className="text-slate-400 text-lg mt-2">Perfect traceability, zero effort. Every move is recorded.</p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-1">

                    {/* Left: Commit History */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -top-3 -left-3 bg-blue-500 text-white px-3 py-1 rounded-lg font-bold text-[10px] uppercase tracking-widest z-10 shadow-lg">
                            Bitbucket / Jira History
                        </div>
                        <div className="bg-[#1e1e1e] rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
                            <img
                                src="my-jira.png"
                                alt="Commit History with Jira integration"
                                className="w-full opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                <GitBranch size={16} className="text-blue-400 mb-2" />
                                <h4 className="text-xs font-bold text-white mb-1">Conventional Commits</h4>
                                <p className="text-[10px] text-slate-400 leading-relaxed">Agent analyzes diffs to write clear `feat:`, `refactor:`, or `fix:` messages.</p>
                            </div>
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                <MessageSquare size={16} className="text-cyan-400 mb-2" />
                                <h4 className="text-xs font-bold text-white mb-1">Jira Integration</h4>
                                <p className="text-[10px] text-slate-400 leading-relaxed">Automatically links every code change to a specific task (e.g., AHI-241).</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The Prompt & Result */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
                                <h3 className="text-white font-bold">The "Power Command"</h3>
                            </div>
                            <div className="bg-[#0f172a] p-4 rounded-xl border border-blue-500/30 relative">
                                <img
                                    src="prompt-commit.png"
                                    alt="Prompt for autonomous commit"
                                    className="w-full rounded-lg"
                                />
                                <div className="absolute top-2 right-2">
                                    <Zap size={16} className="text-yellow-400 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</div>
                                <h3 className="text-white font-bold">The Vibe Workflow</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    { text: "Analyze total diff of the session.", color: "text-blue-400" },
                                    { text: "Summarize changes contextually.", color: "text-cyan-400" },
                                    { text: "Commit & Push without manual typing.", color: "text-blue-400" },
                                    { text: "Detailed Audit Trail for legal & QA.", color: "text-cyan-400" },
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + (i * 0.1) }}
                                        className="flex items-center gap-2 text-slate-300 text-sm"
                                    >
                                        <div className={`w-1 h-4 rounded-full ${item.color}`} />
                                        {item.text}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>

                {/* Footer Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-2 p-4 bg-slate-900/80 border border-slate-800 rounded-xl text-center"
                >
                    <p className="text-slate-400 text-sm">
                        Total Traceability = <span className="text-white font-bold">Confidence.</span>
                        Whether it's a security audit or a simple bug fix, you always know
                        <span className="text-blue-400 font-bold"> exactly</span> what the AI did.
                    </p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default AutonomousGitSlide;
