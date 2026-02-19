import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Terminal, Zap, MessageSquare, Repeat, Brain, HandMetal } from 'lucide-react';

const VibeExplainerSlide = () => {
    const comparison = [
        { classic: "Think line by line", vibe: "Think in features & stories" },
        { classic: "Type every character", vibe: "Type English prompts" },
        { classic: "Fight syntax (20m)", vibe: "Syntax is AI's problem" },
        { classic: "Google every detail", vibe: "AI knows 99% of details" },
        { classic: "Control every decision", vibe: "Control direction & taste" },
        { classic: "Building with Lego", vibe: "Directing a fast Junior" }
    ];

    const examples = [
        "Make a clean todo app with dark mode & local storage.",
        "Update the landing page with a cozy autumn aesthetic.",
        "Rewrite this messy script into clean, modern Python.",
        "Add a tiny confetti animation when the goal is reached."
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-6">

                {/* Header */}
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        Vibe Coding <span className="text-primary italic">101</span>
                    </motion.h1>
                    <p className="text-slate-400 text-lg mt-2">Programming at the Speed of Thought (2025–2026 style)</p>
                </div>

                {/* Comparison Table */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/50 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-400 flex items-center gap-2 mb-4">
                            <Terminal size={20} /> Classic Coding
                        </h3>
                        {comparison.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-slate-500 line-through opacity-50">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                {item.classic}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary flex items-center gap-2 mb-4">
                            <Zap size={20} className="fill-primary" /> Vibe Coding
                        </h3>
                        {comparison.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="flex items-center gap-3 text-sm text-white font-medium"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                                {item.vibe}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Examples & Workflow */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Examples */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 rounded-2xl bg-primary/5 border border-primary/20"
                    >
                        <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                            <MessageSquare size={14} /> Real Prompts
                        </h4>
                        <div className="space-y-3">
                            {examples.map((ex, i) => (
                                <p key={i} className="text-[11px] text-slate-300 italic font-mono bg-black/30 p-2 rounded-lg border border-white/5">
                                    "{ex}"
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Rules */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20"
                    >
                        <h4 className="text-xs font-black text-purple-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Repeat size={14} /> The Rules
                        </h4>
                        <ul className="text-[10px] text-slate-300 space-y-2">
                            <li className="flex gap-2"><span>✅</span> "Good enough" is fine for v1. No over-thinking.</li>
                            <li className="flex gap-2"><span>✅</span> Ugly but working {'>'} Perfect but never finished.</li>
                            <li className="flex gap-2"><span>✅</span> Taste matters more than deep abstractions.</li>
                            <li className="flex gap-2"><span>✅</span> Steer with English. Direct the AI Junior.</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Final Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center justify-center gap-8 py-4 border-t border-white/5"
                >
                    <div className="flex flex-col items-center">
                        <div className="p-3 rounded-full bg-slate-800 mb-2 opacity-50"><Brain size={32} /></div>
                        <p className="text-[10px] uppercase font-bold text-slate-500">Old: Brain + Hands</p>
                    </div>
                    <div className="text-3xl text-slate-700 italic font-black">VS</div>
                    <div className="flex flex-col items-center">
                        <div className="p-3 rounded-full bg-primary/20 mb-2 border border-primary/30"><HandMetal size={32} className="text-primary" /></div>
                        <p className="text-[10px] uppercase font-bold text-primary">Vibe: Director Mode</p>
                    </div>
                </motion.div>

            </div>
        </Slide>
    );
};

export default VibeExplainerSlide;
