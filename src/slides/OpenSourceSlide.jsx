import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Github, Layers, Sparkles, Code2, Palette, Rocket } from 'lucide-react';

const OpenSourceSlide = () => {
    const features = [
        {
            icon: <Sparkles size={20} className="text-primary" />,
            title: "AI-First Design",
            desc: "Describe your slide in plain text — AI handles layout, colors & animations.",
        },
        {
            icon: <Palette size={20} className="text-purple-400" />,
            title: "Beautiful by Default",
            desc: "Polished dark theme, gradient text, smooth transitions — no Canva needed.",
        },
        {
            icon: <Layers size={20} className="text-blue-400" />,
            title: "Component Library",
            desc: "Reusable Slide, Deck, and layout primitives. Drop them in, plug in your content.",
        },
        {
            icon: <Code2 size={20} className="text-green-400" />,
            title: "100% Open Source",
            desc: "React + Vite + Tailwind. Fork it, theme it, ship it — your rules.",
        },
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">

                {/* Eyebrow badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest"
                >
                    <Github size={14} /> Open Source Idea
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center space-y-3"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                        Vibe Coding{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Presentation Kit
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        Slide deck ini dibuat <span className="text-white font-semibold">tanpa Canva</span>, hanya
                        dengan React + AI. Bagaimana kalau kita jadikan{' '}
                        <span className="text-primary font-semibold">open source library</span>-nya?
                    </p>
                </motion.div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/8 transition-all"
                        >
                            <div className="p-2.5 rounded-xl bg-black/40 shrink-0 self-start">
                                {f.icon}
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white mb-1">{f.title}</h3>
                                <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA row */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-2"
                >
                    <a
                        href="https://github.com/davidgrcias/vibe-coding-presentation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-black text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
                    >
                        <Github size={16} /> Star on GitHub
                    </a>
                    <span className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary text-sm font-bold">
                        <Rocket size={16} /> Contribute & Fork
                    </span>
                </motion.div>

                {/* Quote */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-slate-500 text-xs font-mono uppercase tracking-[0.3em] text-center mt-2"
                >
                    "Semua materi sudah diatur — desain bagus, menarik, no ribet."
                </motion.p>
            </div>
        </Slide>
    );
};

export default OpenSourceSlide;
