import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Layers, Users, Zap, Globe, Cpu, ShieldCheck, Briefcase, TrendingUp } from 'lucide-react';

const AnthropicTrendsSlide = () => {
    const trendCategories = [
        {
            title: "Foundation",
            subtitle: "How we build",
            icon: <Layers size={18} className="text-purple-400" />,
            color: "bg-purple-500/10 border-purple-500/20",
            items: [
                "Software lifecycle compresses from weeks to hours",
                "Engineers shift from 'hands-on' to 'orchestrators'",
            ]
        },
        {
            title: "Capability",
            subtitle: "What agents do",
            icon: <Cpu size={18} className="text-amber-400" />,
            color: "bg-amber-500/10 border-amber-500/20",
            items: [
                "Single agents evolve into multi-agent teams",
                "Long-running agents build complete systems",
                "Human oversight scales via intelligent collaboration",
                "Agentic coding expands to legacy & new domains"
            ]
        },
        {
            title: "Impact",
            subtitle: "Business effect",
            icon: <Globe size={18} className="text-emerald-400" />,
            color: "bg-emerald-500/10 border-emerald-500/20",
            items: [
                "Productivity gains reshape dev economics",
                "Non-technical teams (Legal, Ops) adopt agents",
                "Dual-use risk requires security-first architecture"
            ]
        }
    ];

    const stats = [
        { company: "Rakuten", metric: "99.9%", desc: "Accuracy on 12.5M LOC task" },
        { company: "TELUS", metric: "500k+", desc: "Hours saved via 13k+ solutions" },
        { company: "Zapier", metric: "89%", desc: "Internal AI adoption rate" },
        { company: "Fountain", metric: "72h", desc: "Process cut from weeks" },
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-5">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono uppercase tracking-widest mb-3"
                        >
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            Anthropic · Jan 21, 2026
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-2"
                        >
                            2026 Agentic<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">Coding Trends</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-sm max-w-xl leading-relaxed"
                        >
                            The shift from <span className="text-white font-semibold">humans writing code</span> to <span className="text-purple-400 font-semibold">humans orchestrating agent teams</span>.
                            Development moves from individual contribution to high-level validation and strategy.
                        </motion.p>
                    </div>

                    {/* Report Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-48 md:w-56 flex-shrink-0"
                    >
                        <div className="rounded-xl border border-slate-700 shadow-2xl shadow-purple-500/10 overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="antrophic-report.png"
                                alt="2026 Agentic Coding Trends Report"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* 3 Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {trendCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            className={`p-5 rounded-2xl border ${cat.color} flex flex-col gap-3`}
                        >
                            <div className="flex items-center gap-3 mb-1">
                                <div className="p-2 rounded-lg bg-black/20">{cat.icon}</div>
                                <div>
                                    <h3 className="text-white font-bold text-lg leading-none">{cat.title}</h3>
                                    <p className="text-slate-400 text-[10px] uppercase tracking-wider">{cat.subtitle}</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {cat.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-300 text-[11px] leading-snug">
                                        <div className="mt-1 w-1 h-1 rounded-full bg-slate-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Real World Impact Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <TrendingUp size={16} className="text-green-400" />
                        <h3 className="text-white font-bold text-xs uppercase tracking-widest">Real-World Impact (2026)</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <p className="text-slate-500 text-[10px] uppercase font-bold mb-0.5">{stat.company}</p>
                                <p className="text-2xl font-black text-white leading-none mb-1">{stat.metric}</p>
                                <p className="text-slate-400 text-[10px] leading-tight">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </Slide>
    );
};

export default AnthropicTrendsSlide;
