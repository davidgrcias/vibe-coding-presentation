import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Github, MousePointer2, Brain, Terminal, Bot } from 'lucide-react';

const HeroSlide = () => {
    const agents = [
        { name: "GitHub Copilot", icon: <Github size={32} /> },
        { name: "Cursor / Trae", icon: <MousePointer2 size={32} /> },
        { name: "Claude Code", icon: <Brain size={32} /> },
        { name: "Replit Agent", icon: <Terminal size={32} /> },
        { name: "Devin", icon: <Bot size={32} /> },
    ];

    return (
        <Slide className="text-center items-center justify-center">
            <div className="flex flex-col items-center gap-8 md:gap-12 relative z-10">

                <div className="space-y-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block px-4 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-mono text-primary mb-4"
                    >
                        The Next Evolution of Software Engineering
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
                        AI-Assisted <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-secondary">Development</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto">
                        Transforming how we build, debug, and ship software. <br />
                        From <span className="text-white font-medium">Syntax Writers</span> to <span className="text-white font-medium">System Architects</span>.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 flex flex-wrap justify-center gap-6"
                >
                    {agents.map((agent, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, translateY: -5 }}
                            className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all cursor-default w-32"
                        >
                            <div className="text-primary">{agent.icon}</div>
                            <span className="text-sm font-medium text-slate-300">{agent.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Ambient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]"></div>
            </div>
        </Slide>
    );
};

export default HeroSlide;
