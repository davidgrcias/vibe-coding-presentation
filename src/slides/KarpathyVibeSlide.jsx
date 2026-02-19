import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Code2, Users, Globe } from 'lucide-react';

const KarpathyVibeSlide = () => {
    const impacts = [
        {
            icon: <Users size={16} className="text-cyan-400" />,
            title: "Democratizes Programming",
            desc: "Not strictly reserved for highly trained professionals. Anyone can build."
        },
        {
            icon: <Code2 size={16} className="text-violet-400" />,
            title: "Code is Free. Ephemeral. Disposable.",
            desc: "Engineers write far more software that would otherwise never be written."
        },
        {
            icon: <Globe size={16} className="text-rose-400" />,
            title: "Power to Regular People",
            desc: "Regular people benefit MORE from LLMs compared to corporations & professionals."
        },
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-5">

                {/* Source Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono uppercase tracking-widest">
                        <Sparkles size={10} className="text-yellow-400" />
                        Andrej Karpathy · Dec 19, 2025 · karpathy.bearblog.dev
                    </span>
                </motion.div>

                {/* Main Content: 2-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">

                    {/* LEFT: Image + Identity */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-4"
                    >
                        {/* Karpathy image */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-transparent to-cyan-600/20 rounded-2xl pointer-events-none" />
                            <img
                                src="karpathy.webp"
                                alt="2025 LLM Year in Review - Andrej Karpathy"
                                className="w-full rounded-2xl border border-slate-700 shadow-2xl shadow-violet-900/30"
                            />
                        </div>

                        {/* Identity card */}
                        <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 flex flex-col gap-1">
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Who is Andrej Karpathy?</p>
                            <p className="text-white font-bold text-sm">Co-founder of OpenAI · Former Tesla AI Director</p>
                            <p className="text-slate-400 text-xs leading-relaxed mt-1">
                                One of the world's foremost AI researchers. He coined the term <span className="text-violet-400 font-semibold">"vibe coding"</span> in a tweet — completely oblivious to how far it would go.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-4"
                    >
                        {/* Big headline */}
                        <div>
                            <p className="text-xs font-mono uppercase text-violet-400 tracking-widest mb-1">Section #5 · 2025 LLM Year in Review</p>
                            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
                                Vibe Coding
                            </h1>
                            <p className="text-slate-400 text-sm mt-1">
                                "2025 is the year AI crossed a capability threshold"
                            </p>
                        </div>

                        {/* The defining quote */}
                        <div className="bg-gradient-to-br from-violet-500/10 to-cyan-500/5 border border-violet-500/25 rounded-xl p-4">
                            <Quote size={16} className="text-violet-400 mb-2" />
                            <p className="text-slate-100 text-sm leading-relaxed font-medium italic">
                                "AI crossed a capability threshold necessary to build all kinds of impressive programs simply via English,{" "}
                                <span className="text-violet-300 font-bold not-italic">forgetting that code even exists.</span>"
                            </p>
                            <p className="text-right text-slate-500 text-[10px] mt-2">— Andrej Karpathy</p>
                        </div>

                        {/* 3 Impact points */}
                        <div className="flex flex-col gap-3">
                            {impacts.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-start gap-3 bg-slate-900/60 border border-slate-800 rounded-xl p-3"
                                >
                                    <div className="p-1.5 rounded-lg bg-slate-800 flex-shrink-0 mt-0.5">{item.icon}</div>
                                    <div>
                                        <p className="text-white text-xs font-bold mb-0.5">{item.title}</p>
                                        <p className="text-slate-400 text-[11px] leading-snug">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom: Closing powerful statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-between gap-4 bg-gradient-to-r from-violet-900/30 via-slate-900/50 to-cyan-900/20 border border-slate-700 rounded-xl p-4"
                >
                    <p className="text-white font-black text-lg tracking-tight leading-tight">
                        "Vibe coding will <span className="text-violet-400">terraform software</span>{" "}
                        and <span className="text-cyan-400">alter job descriptions.</span>"
                    </p>
                    <p className="text-slate-500 text-[10px] font-mono text-right flex-shrink-0 uppercase tracking-wider">
                        Andrej Karpathy<br />Dec 2025
                    </p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default KarpathyVibeSlide;
