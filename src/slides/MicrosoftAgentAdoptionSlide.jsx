import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Lock, BarChart3, Building2, TrendingUp, AlertTriangle } from 'lucide-react';

const MicrosoftAgentAdoptionSlide = () => {
    const bigStats = [
        {
            value: ">80%",
            label: "Fortune 500 companies",
            detail: "actively use AI agents built with low-code/no-code tools",
            color: "text-blue-400",
            bg: "bg-blue-500/10 border-blue-500/20",
            glow: "shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
        },
        {
            value: "29%",
            label: "of employees",
            detail: "use unsanctioned 'shadow AI' agents for work tasks",
            color: "text-amber-400",
            bg: "bg-amber-500/10 border-amber-500/20",
            glow: "shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]",
        },
    ];

    const industries = [
        { name: "Software / Tech", pct: "16%", width: "w-full" },
        { name: "Manufacturing", pct: "13%", width: "w-[81%]" },
        { name: "Financial", pct: "11%", width: "w-[69%]" },
        { name: "Retail", pct: "9%", width: "w-[56%]" },
    ];

    const pillars = [
        {
            icon: <Eye size={16} className="text-cyan-400" />,
            title: "Observability",
            tagline: "You can't protect what you can't see.",
            desc: "Centralized registry, real-time dashboards, threat detection.",
            color: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400",
        },
        {
            icon: <Building2 size={16} className="text-violet-400" />,
            title: "Governance",
            tagline: "Treat AI risk like financial risk.",
            desc: "Cross-functional ownership across Legal, HR, Security, and the Board.",
            color: "border-violet-500/20 bg-violet-500/5 text-violet-400",
        },
        {
            icon: <Lock size={16} className="text-emerald-400" />,
            title: "Security",
            tagline: "Zero Trust for every agent.",
            desc: "Least privilege, explicit verification, assume compromise mindset.",
            color: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",
        },
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-5">

                {/* Header */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-300 text-xs font-mono uppercase tracking-widest mb-3"
                    >
                        <ShieldCheck size={10} className="text-blue-400" />
                        Microsoft Security Blog · Vasu Jakkal · Feb 10, 2026
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none"
                    >
                        AI Agents Are{" "}
                        <span className="text-blue-400 italic">No Longer Experimental</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="text-slate-400 text-sm mt-1 max-w-2xl"
                    >
                        They're production systems embedded across operations — performing tasks at <span className="text-white font-semibold">machine speed</span> across the Fortune 500. Based on Microsoft telemetry, Nov 2025.
                    </motion.p>
                </div>

                {/* Big Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bigStats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className={`p-6 rounded-2xl border ${stat.bg} ${stat.glow} flex items-center gap-5`}
                        >
                            <BarChart3 size={36} className={`${stat.color} flex-shrink-0 opacity-50`} />
                            <div>
                                <p className={`text-5xl font-black ${stat.color} leading-none`}>{stat.value}</p>
                                <p className="text-white font-bold text-sm mt-1">{stat.label}</p>
                                <p className="text-slate-400 text-xs mt-0.5 leading-snug">{stat.detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Industries + 3 Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Leading Industries */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-slate-900/60 border border-slate-700 rounded-2xl p-5 flex flex-col gap-3"
                    >
                        <p className="text-xs font-mono uppercase tracking-widest text-slate-500 flex items-center gap-2">
                            <TrendingUp size={12} className="text-blue-400" /> Leading Industries by AI Agent Adoption
                        </p>
                        <div className="flex flex-col gap-3">
                            {industries.map((ind, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-300 text-xs font-medium">{ind.name}</span>
                                        <span className="text-blue-400 font-black text-sm">{ind.pct}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: ind.width }}
                                            transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 3 Shaping Pillars */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 }}
                        className="flex flex-col gap-3"
                    >
                        {pillars.map((pillar, i) => (
                            <div key={i} className={`border rounded-xl p-3 flex items-start gap-3 ${pillar.color.split(' ').slice(0, 2).join(' ')}`}>
                                <div className="p-1.5 rounded-lg bg-black/20 flex-shrink-0 mt-0.5">{pillar.icon}</div>
                                <div>
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <p className={`text-xs font-black uppercase tracking-widest ${pillar.color.split(' ')[2]}`}>{pillar.title}</p>
                                    </div>
                                    <p className="text-white text-xs font-semibold italic">"{pillar.tagline}"</p>
                                    <p className="text-slate-400 text-[10px] leading-snug mt-0.5">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-4 bg-gradient-to-r from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-xl p-4"
                >
                    <AlertTriangle size={20} className="text-amber-400 flex-shrink-0" />
                    <div className="flex-1">
                        <p className="text-slate-200 text-sm font-medium italic leading-snug">
                            "If we get this right, AI becomes more than a breakthrough in technology —{' '}
                            <span className="text-blue-300 font-bold not-italic">it becomes a breakthrough in human ambition.</span>"
                        </p>
                    </div>
                    <p className="text-slate-500 text-[10px] text-right flex-shrink-0 font-mono leading-tight">
                        Vasu Jakkal<br />Microsoft CVP,<br />Security
                    </p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default MicrosoftAgentAdoptionSlide;
