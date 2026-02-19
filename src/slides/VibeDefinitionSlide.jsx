import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { MessageSquare, Layout, CheckCircle2, Mic } from 'lucide-react';

const VibeDefinitionSlide = () => {
    const features = [
        {
            icon: <MessageSquare className="text-green-400" />,
            title: "Natural Language",
            desc: "Describe what you want in plain vibes. Voice-to-text (Super Whisper) supercharges it."
        },
        {
            icon: <CheckCircle2 className="text-blue-400" />,
            title: "Accept All Mindset",
            desc: "Don't read every line. Let AI generate 95%+ of the code, then 'Accept All' and test."
        },
        {
            icon: <Mic className="text-purple-400" />,
            title: "Iterative Director",
            desc: "Build by directing, not typing. Fixing bugs = describing errors back to the AI."
        },
        {
            icon: <Layout className="text-orange-400" />,
            title: "Prototyping Power",
            desc: "Flask apps, Tetris clones, full features in minutes—not weeks."
        }
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono mb-2 uppercase tracking-widest"
                    >
                        Matthew Berman • "How I Vibe Code"
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter"
                    >
                        What Is <span className="text-green-500 italic">"Vibe Coding"</span>?
                    </motion.h1>
                    <p className="text-slate-400 text-lg">"It's not 'No Code', it's 'No Manual Coding'."</p>
                </div>

                {/* Massive Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full mb-8 relative"
                >
                    <div className="bg-slate-900 rounded-3xl border-2 border-green-500/20 shadow-[0_0_80px_-20px_rgba(34,197,94,0.3)] overflow-hidden">
                        <img
                            src="what-is-vibe-coding.png"
                            alt="Matthew Berman - Vibe Coding Introduction"
                            className="w-full h-auto block"
                        />
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                            className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-black/40 group-hover:bg-green-500/20 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-[10px] font-bold text-white uppercase tracking-tight">{item.title}</h3>
                            </div>
                            <p className="text-slate-400 text-[10px] leading-snug">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-center"
                >
                    <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.2em] max-w-2xl mx-auto">
                        "I love vibe coding. You don't have to be an expert to build something amazing anymore."
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
};

export default VibeDefinitionSlide;
