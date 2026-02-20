import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Zap, GitBranch, Layers, Cpu, CheckCircle2 } from 'lucide-react';

const tools = [
    {
        name: "Cursor",
        role: "Daily coding + autocomplete",
        model: "Composer 1, GPT-5.2, Gemini 3",
        pro: "Fastest tab completion",
        con: "No agent mode yet",
        color: "text-blue-400",
        badge: "bg-blue-500/10 border-blue-500/20",
    },
    {
        name: "Claude Code",
        role: "Main AI agent (90% of tasks)",
        model: "Opus 4.5 · $200/mo unlimited",
        pro: "Most reliable, great plan mode",
        con: "Slow on huge tasks",
        color: "text-orange-400",
        badge: "bg-orange-500/10 border-orange-500/20",
        highlight: true,
    },
    {
        name: "GPT-5.2 CodeX",
        role: "Big refactors + long tasks",
        model: "GPT-5.2",
        pro: "Handles giant context windows",
        con: "Very slow",
        color: "text-green-400",
        badge: "bg-green-500/10 border-green-500/20",
    },
    {
        name: "Gemini 3 Pro",
        role: "UI/UX design only",
        model: "Gemini 3 Pro",
        pro: "Best visual/UI output",
        con: "Design use only",
        color: "text-purple-400",
        badge: "bg-purple-500/10 border-purple-500/20",
    },
    {
        name: "Warp Terminal",
        role: "AI-powered terminal commands",
        model: "Built-in AI",
        pro: "Fast for small changes",
        con: "—",
        color: "text-cyan-400",
        badge: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
        name: "Branchlet",
        role: "Parallel agent workflows",
        model: "—",
        pro: "Run 2–3 agents simultaneously",
        con: "Needs initial setup",
        color: "text-amber-400",
        badge: "bg-amber-500/10 border-amber-500/20",
    },
];

const rules = [
    { icon: <Layers size={14} className="text-blue-400" />, text: "Always use Plan Mode first — review before executing." },
    { icon: <Cpu size={14} className="text-orange-400" />, text: "Keep context in claude.md files per feature." },
    { icon: <GitBranch size={14} className="text-amber-400" />, text: "Use Branchlet to run 2–3 agents on separate branches." },
    { icon: <Zap size={14} className="text-purple-400" />, text: "Use Gemini for UI design, save style to claude.md." },
    { icon: <CheckCircle2 size={14} className="text-green-400" />, text: "Never one-shot a big feature. Always break it down." },
];

const TechBroSetupSlide = () => {
    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-4">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono uppercase tracking-widest mb-3"
                        >
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            Your Average Tech Bro · Jan 28, 2026
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-2"
                        >
                            Real-World<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                2026 AI Setup
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-sm max-w-md"
                        >
                            A founder who codes daily tested every AI agent for 6 months.
                            The verdict: <span className="text-white font-semibold">keep it simple, ship every week.</span>
                        </motion.p>
                    </div>

                    {/* YouTube Thumbnail */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="w-52 md:w-64 flex-shrink-0"
                    >
                        <div className="rounded-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="tool-setup.png"
                                alt="I Tried Every AI Coding Agent... Here's My 2026 Setup"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Tool Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-slate-900/60 border border-slate-700 rounded-2xl overflow-hidden"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-5 gap-0 bg-slate-800/80 px-4 py-2 border-b border-slate-700">
                        {["Tool", "What For", "Model", "✅ Pro", "⚠️ Con"].map((h, i) => (
                            <p key={i} className="text-[10px] font-black uppercase tracking-widest text-slate-400">{h}</p>
                        ))}
                    </div>

                    {/* Table Rows */}
                    {tools.map((tool, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.35 + i * 0.06 }}
                            className={`grid grid-cols-5 gap-0 px-4 py-2.5 border-b border-slate-800/50 last:border-0 ${tool.highlight ? "bg-orange-500/5" : "hover:bg-slate-800/30"} transition-colors`}
                        >
                            <div className="flex items-center gap-1.5">
                                {tool.highlight && <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />}
                                <span className={`font-bold text-xs ${tool.color}`}>{tool.name}</span>
                            </div>
                            <p className="text-slate-300 text-xs">{tool.role}</p>
                            <p className="text-slate-500 text-[10px] leading-tight">{tool.model}</p>
                            <p className="text-green-400 text-[10px] leading-tight">{tool.pro}</p>
                            <p className="text-slate-500 text-[10px] leading-tight">{tool.con}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Workflow Rules */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    {rules.map((rule, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + i * 0.07 }}
                            className="flex items-start gap-2 p-3 rounded-xl border border-white/5 bg-white/3"
                        >
                            <div className="mt-0.5 flex-shrink-0">{rule.icon}</div>
                            <p className="text-slate-300 text-[10px] leading-snug">{rule.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center pb-1"
                >
                    <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">
                        "The best workflow isn't the most complex one. It's the one that ships."
                    </p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default TechBroSetupSlide;
