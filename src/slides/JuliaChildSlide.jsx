import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Users, ChefHat, Zap, TrendingUp } from 'lucide-react';

const stats = [
    { value: "~14,000", label: "AI Agents built", sub: "one per employee", color: "text-blue-400" },
    { value: "1,000", label: "New agents", sub: "in just 28 days", color: "text-purple-400" },
    { value: "1/3", label: "Used monthly", sub: "active every month", color: "text-green-400" },
    { value: "5+", label: "Agents per person", sub: "avg used per month", color: "text-orange-400" },
];

const examples = [
    {
        emoji: "💰",
        role: "Finance",
        name: "Expense Policy Agent",
        desc: "Ask about per diem, travel rules, or allowances. Auto-updates when policy changes in Confluence.",
        color: "border-green-500/20 bg-green-500/5",
    },
    {
        emoji: "👋",
        role: "HR",
        name: '"Nora" Onboarding Agent',
        desc: "Helps new hires in week 1–2. Answers questions about leave, benefits, and tools. Usage drops by week 3 — mission accomplished.",
        color: "border-blue-500/20 bg-blue-500/5",
    },
    {
        emoji: "📊",
        role: "Sales",
        name: "Customer 360 Agent",
        desc: "Ask: 'How long has this customer used Jira?' Get instant insights without disturbing other teams.",
        color: "border-purple-500/20 bg-purple-500/5",
    },
];

const JuliaChildSlide = () => {
    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-4">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono uppercase tracking-widest mb-3"
                        >
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            Diginomica · Atlassian · Feb 19, 2026
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-2"
                        >
                            14,000 Employees.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                                14,000 AI Agents.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-sm max-w-md leading-relaxed"
                        >
                            Atlassian's non-developer employees — Finance, HR, Sales — built their own AI agents.
                            <span className="text-white font-semibold"> Zero coding. In just 1 hour.</span>
                        </motion.p>
                    </div>

                    {/* Article Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 }}
                        className="w-36 md:w-44 flex-shrink-0"
                    >
                        <div className="rounded-xl overflow-hidden border border-yellow-500/20 shadow-xl shadow-yellow-500/10 transform hover:scale-105 transition-transform duration-500">
                            <img src="julia-child.png" alt="The Julia Child Method" className="w-full h-auto" />
                        </div>
                    </motion.div>
                </div>

                {/* The Analogy */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-r from-orange-900/20 to-slate-900/60 border border-orange-500/20 rounded-2xl p-4 flex items-center gap-4"
                >
                    <ChefHat className="text-orange-400 flex-shrink-0" size={32} />
                    <div>
                        <p className="text-white font-bold text-sm mb-0.5">🍰 The Julia Child Method</p>
                        <p className="text-slate-300 text-xs leading-relaxed">
                            Julia Child taught millions to cook on TV — you <em>watch it once</em>, then go home and make it yourself.
                            Atlassian copied this: a <strong className="text-white">1-hour demo</strong> where employees
                            watch someone build an AI agent in plain English — then build their own <strong className="text-white">in that same session.</strong>
                        </p>
                    </div>
                </motion.div>

                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-3">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.07 }}
                            className="bg-slate-900/60 border border-slate-700 rounded-xl p-3 text-center"
                        >
                            <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
                            <p className="text-white text-xs font-bold leading-tight">{s.label}</p>
                            <p className="text-slate-500 text-[10px]">{s.sub}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Examples */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {examples.map((ex, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + i * 0.08 }}
                            className={`rounded-xl border p-4 ${ex.color}`}
                        >
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-xl">{ex.emoji}</span>
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">{ex.role}</p>
                                    <p className="text-white font-bold text-xs">{ex.name}</p>
                                </div>
                            </div>
                            <p className="text-slate-400 text-[10px] leading-relaxed">{ex.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Takeaway */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="bg-slate-900/80 border border-slate-700 rounded-xl p-3 flex items-center gap-4"
                >
                    <div className="w-1 h-10 bg-orange-500 rounded-full flex-shrink-0" />
                    <div>
                        <p className="text-slate-200 text-sm font-semibold italic">
                            "This democratization is wild. Anyone who can <span className="text-orange-400">speak in plain words</span> can now build an AI agent. It's not just for developers anymore."
                        </p>
                        <p className="text-slate-500 text-[10px] mt-0.5 font-mono">— Tal Saraf, SVP Customer Engineering, Atlassian</p>
                    </div>
                </motion.div>

            </div>
        </Slide>
    );
};

export default JuliaChildSlide;
