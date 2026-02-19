import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { TrendingDown, Map, MapPin, AlertTriangle, ArrowRight } from 'lucide-react';

const PersonalStorySlide = () => {
    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6">

                {/* Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono mb-2 uppercase tracking-widest"
                    >
                        Real World Data • My Story
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tighter"
                    >
                        AI Killed the <span className="text-red-500 decoration-4 underline decoration-red-900">Video Star</span>
                    </motion.h1>
                    <p className="text-slate-400 text-lg mt-2 font-medium">"The Era of 'Tutorial Hell' is Over."</p>
                </div>

                {/* Main Content: Graph + Insight */}
                <div className="flex flex-col md:flex-row gap-8 w-full items-center">

                    {/* Left: The Graph */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="bg-slate-900 rounded-2xl border border-slate-700 p-2 shadow-2xl overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                            <img
                                src="/personal-story-youtube.jpg"
                                alt="YouTube Views Decline Chart"
                                className="w-full h-auto rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
                            />

                            {/* Overlay Stats */}
                            <div className="absolute bottom-4 left-4 z-20">
                                <p className="text-xs text-slate-400 uppercase tracking-widest">Yearly Peak</p>
                                <p className="text-3xl font-black text-white">752K <span className="text-sm font-normal text-slate-400">views</span></p>
                            </div>
                            <div className="absolute bottom-4 right-4 z-20 text-right">
                                <p className="text-xs text-red-400 uppercase tracking-widest flex items-center justify-end gap-1">
                                    Current Trend <TrendingDown size={14} />
                                </p>
                                <p className="text-3xl font-black text-red-500">-90% <span className="text-sm font-normal text-red-400/70">drop</span></p>
                            </div>
                        </div>
                        <p className="text-center text-slate-500 text-xs mt-2 italic">
                            *My channel views (2020–2026). The "ChatGPT Effect" is undeniable.
                        </p>
                    </motion.div>

                    {/* Right: The Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex-1 space-y-6"
                    >
                        {/* Box 1: The Old Way */}
                        <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
                            <h3 className="text-lg font-bold text-slate-300 flex items-center gap-2 mb-2">
                                <Map size={20} className="text-slate-500" /> Pre-AI: The Paper Map
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                We memorized routes. We watched 4-hour tutorials just to center a div.
                                Getting lost meant <span className="text-white font-medium">hours on StackOverflow</span>.
                                Content creators (like me) thrived on teaching syntax.
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center">
                            <ArrowRight className="text-slate-600 rotate-90 md:rotate-0" />
                        </div>

                        {/* Box 2: The New Way */}
                        <div className="bg-gradient-to-br from-red-900/10 to-purple-900/10 p-5 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-colors">
                            <h3 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-2">
                                <MapPin size={20} className="text-red-500" /> Post-AI: The GPS
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                AI is Turn-by-Turn navigation. It handles the "How" (syntax, bugs, boilerplate).
                                <br /><br />
                                <span className="text-white font-bold italic">"I don't need a tutorial to learn React syntax anymore. I just need to know WHAT to build."</span>
                            </p>
                        </div>

                    </motion.div>
                </div>

                {/* Footer Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-4 flex items-center gap-3 bg-yellow-500/10 px-6 py-3 rounded-full border border-yellow-500/20"
                >
                    <AlertTriangle size={18} className="text-yellow-500" />
                    <p className="text-yellow-200 text-sm font-medium">
                        Disruption isn't death. It's an invitation to stop hiking and start driving.
                    </p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default PersonalStorySlide;
