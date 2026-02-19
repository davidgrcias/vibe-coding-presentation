import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, DollarSign, Star, ArrowRight } from 'lucide-react';

const AgentTrendSlide = () => {
    const stats = [
        { icon: <Users size={24} className="text-blue-400" />, value: "20M+", label: "Devs using GitHub Copilot", color: "border-blue-500/30 bg-blue-500/5" },
        { icon: <Star size={24} className="text-yellow-400" />, value: "1M+", label: "Cursor IDE active users", color: "border-yellow-500/30 bg-yellow-500/5" },
        { icon: <Zap size={24} className="text-green-400" />, value: "46%", label: "Code written by AI (Copilot avg)", color: "border-green-500/30 bg-green-500/5" },
        { icon: <DollarSign size={24} className="text-purple-400" />, value: "$20B+", label: "AI dev tools market by 2027", color: "border-purple-500/30 bg-purple-500/5" },
    ];

    const evolution = [
        { label: "Autocomplete", desc: "Tab-complete a line", tool: "2021", color: "text-slate-500" },
        { label: "Copilot", desc: "Suggest whole functions", tool: "2022", color: "text-blue-400" },
        { label: "Chat AI", desc: "Ask, explain, refactor", tool: "2023", color: "text-green-400" },
        { label: "Vibe Coding", desc: "Describe → full app", tool: "2024", color: "text-primary" },
        { label: "AI Agents", desc: "Autonomous end-to-end", tool: "2025+", color: "text-yellow-400" },
    ];

    const yc = {
        quote: "Startups in our batch are shipping features at 10x speed, with some codebases now being 95% AI-generated.",
        source: "Y Combinator Insights, 2025"
    };

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col h-full gap-6">

                {/* Header */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-3"
                    >
                        <TrendingUp size={12} /> Not A Fad — It Is The Standard
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                        The AI Agent <span className="text-primary">Explosion</span>
                    </h1>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                            className={`p-5 rounded-2xl border ${stat.color} flex flex-col gap-3`}
                        >
                            {stat.icon}
                            <div>
                                <p className="text-3xl font-black text-white">{stat.value}</p>
                                <p className="text-slate-400 text-xs mt-1 leading-tight">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Evolution Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-slate-900/60 rounded-2xl border border-white/10 p-5"
                >
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-4">Evolution of AI Coding</p>
                    <div className="flex items-center gap-1 flex-wrap md:flex-nowrap">
                        {evolution.map((step, i) => (
                            <React.Fragment key={i}>
                                <div className="flex flex-col items-center text-center min-w-[80px]">
                                    <span className={`text-[10px] font-bold uppercase tracking-wider ${step.color} mb-1`}>{step.tool}</span>
                                    <span className={`text-sm font-black ${step.color}`}>{step.label}</span>
                                    <span className="text-slate-600 text-[10px] mt-1 leading-tight">{step.desc}</span>
                                </div>
                                {i < evolution.length - 1 && (
                                    <ArrowRight size={16} className="text-slate-700 flex-shrink-0 mx-1" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

                {/* YC Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="p-5 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 flex items-start gap-4"
                >
                    <div className="w-1 h-full min-h-[40px] bg-yellow-500 rounded-full flex-shrink-0"></div>
                    <div>
                        <p className="text-white text-sm md:text-base font-medium italic leading-relaxed">"{yc.quote}"</p>
                        <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mt-2">— {yc.source}</p>
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
};

export default AgentTrendSlide;
