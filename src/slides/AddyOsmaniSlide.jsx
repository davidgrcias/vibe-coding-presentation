import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { FileText, Scissors, BrainCircuit, Bot, GitCommit, ShieldCheck } from 'lucide-react';

const AddyOsmaniSlide = () => {
    const rules = [
        {
            num: "01",
            icon: <FileText size={18} className="text-blue-400" />,
            title: "Spec First, Code Later",
            desc: "Brainstorm the full plan with AI before writing a single line. Save it to spec.md.",
            color: "border-blue-500/20 bg-blue-500/5",
            accent: "text-blue-400",
        },
        {
            num: "02",
            icon: <Scissors size={18} className="text-purple-400" />,
            title: "Work in Small Chunks",
            desc: "One small task at a time. Write tests first, then implement. No massive prompts.",
            color: "border-purple-500/20 bg-purple-500/5",
            accent: "text-purple-400",
        },
        {
            num: "03",
            icon: <BrainCircuit size={18} className="text-cyan-400" />,
            title: "Give AI Full Context",
            desc: "Share your codebase, constraints, goals. AI works best when it knows the whole picture.",
            color: "border-cyan-500/20 bg-cyan-500/5",
            accent: "text-cyan-400",
        },
        {
            num: "04",
            icon: <Bot size={18} className="text-amber-400" />,
            title: "Pick the Right Model",
            desc: "No single model wins everything. Mix Claude, Gemini, Copilot. Use the best tool for the job.",
            color: "border-amber-500/20 bg-amber-500/5",
            accent: "text-amber-400",
        },
        {
            num: "05",
            icon: <ShieldCheck size={18} className="text-green-400" />,
            title: "Always Verify & Review",
            desc: "Treat AI output like a junior dev's code. Never commit code you don't 100% understand.",
            color: "border-green-500/20 bg-green-500/5",
            accent: "text-green-400",
        },
        {
            num: "06",
            icon: <GitCommit size={18} className="text-orange-400" />,
            title: "Commit After Every Task",
            desc: "Each completed task = a commit. Git history is your safety net — and your AI's context.",
            color: "border-orange-500/20 bg-orange-500/5",
            accent: "text-orange-400",
        },
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-5">

                {/* Header + Image */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono uppercase tracking-widest mb-3"
                        >
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            Addy Osmani · Head of Chrome DevRel · Dec 2025
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-2"
                        >
                            The 6 Rules of<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">AI-Powered Coding</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-sm max-w-xl"
                        >
                            After 1+ year of experimenting, the Head of Chrome DevRel distilled the perfect AI workflow.
                            The key insight: <span className="text-white font-semibold">you are still the Senior Engineer.</span>
                        </motion.p>
                    </div>

                    {/* Article Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-44 md:w-52 flex-shrink-0"
                    >
                        <div className="rounded-xl border border-orange-500/20 shadow-2xl shadow-orange-500/10 overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="llm-coding.webp"
                                alt="My LLM Coding Workflow Going Into 2026 - Addy Osmani"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* 6 Rules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {rules.map((rule, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.08 }}
                            className={`p-4 rounded-xl border ${rule.color} flex gap-3`}
                        >
                            <div className="flex-shrink-0 mt-0.5">
                                <div className="p-2 rounded-lg bg-black/30">
                                    {rule.icon}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className={`text-[10px] font-black font-mono ${rule.accent}`}>{rule.num}</span>
                                    <h3 className="text-sm font-bold text-white">{rule.title}</h3>
                                </div>
                                <p className="text-slate-400 text-xs leading-relaxed">{rule.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="bg-gradient-to-r from-orange-900/20 to-slate-900 border border-orange-500/20 rounded-xl p-4 flex items-center gap-4"
                >
                    <div className="w-1 h-12 bg-orange-500 rounded-full flex-shrink-0" />
                    <p className="text-slate-200 text-sm font-medium italic leading-snug">
                        "AI amplifies your skills — it doesn't replace them. You're still the{' '}
                        <span className="text-orange-400 font-bold not-italic">Director.</span>{' '}
                        AI is your power tool."
                    </p>
                    <p className="text-slate-500 text-[10px] text-right flex-shrink-0 font-mono leading-tight">
                        Addy Osmani<br />Google Chrome<br />Head of DevRel
                    </p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default AddyOsmaniSlide;
