import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Bot, Users, Zap, Shield, TrendingUp, GitBranch, Code2, Cpu } from 'lucide-react';

const BigThreeToolsSlide = () => {
    const tools = [
        {
            number: "Tool #1",
            name: "GitHub Copilot",
            tagline: "The AI-Assistant",
            roleDesc: "Stays in your IDE. Helps you write better, faster.",
            color: "border-blue-500/30 bg-blue-500/5",
            textColor: "text-blue-400",
            glowColor: "shadow-[0_0_30px_-5px_rgba(59,130,246,0.25)]",
            icon: <Zap className="text-blue-400" size={20} />,
            stats: [
                { value: "20M+", label: "Active Users" },
                { value: "~90%", label: "Fortune 100 Companies" },
                { value: "+51%", label: "Coding Speed" },
                { value: "88%", label: "Suggestion Retention" },
            ],
            points: [
                "Lives inside VS Code, JetBrains, and other mainstream IDEs",
                "Chat with your codebase in plain English — surface bugs, draft docs, explain code",
                "Trained on 395M public GitHub repos for broad, real-world understanding",
                "Taps into YOUR private repos for hyper-personalized suggestions",
            ],
            highlight: "The obvious choice — that you'd be crazy to skip.",
        },
        {
            number: "Tool #2",
            name: "Cursor",
            tagline: "The AI-Teammate",
            roleDesc: "Acts like a pair programmer in the chair next to you.",
            color: "border-violet-500/30 bg-violet-500/5",
            textColor: "text-violet-400",
            glowColor: "shadow-[0_0_30px_-5px_rgba(139,92,246,0.25)]",
            icon: <Code2 className="text-violet-400" size={20} />,
            stats: [
                { value: "+39%", label: "More Merged PRs" },
                { value: "61%", label: "Convos Start with 'Implement'" },
            ],
            points: [
                "Built as a fork of VS Code — feels familiar, but AI is built in from the ground up",
                "Tracks context across multiple files, not just one line",
                "Treats AI like a guided builder: you direct, it implements",
                "Agent mode: delegates real implementation work, not just suggestions",
            ],
            highlight: "A force multiplier for the individual engineer.",
        },
        {
            number: "Tool #3",
            name: "Windsurf",
            tagline: "The AI-Team",
            roleDesc: "You become the manager of your own AI engineering squad.",
            color: "border-cyan-500/30 bg-cyan-500/5",
            textColor: "text-cyan-400",
            glowColor: "shadow-[0_0_30px_-5px_rgba(34,211,238,0.25)]",
            icon: <Users className="text-cyan-400" size={20} />,
            stats: [
                { value: "57M+", label: "Lines of Code Per Day" },
                { value: "~90%", label: "Code Per Person" },
            ],
            points: [
                "Cascade: an agentic AI engine that behaves like a team of senior engineers",
                "You set intent, boundaries, and priorities — agents execute complex multi-step flows",
                "Elite use requires a new skillset: goal setting, AI systems thinking, human-AI coordination",
                "The workflow: YOU identify challenge → SHAPE plan → IT executes under YOUR expert eye",
            ],
            highlight: "Stop optimizing individual output. Start scaling it with an AI team.",
        },
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-5">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest mb-2"
                        >
                            <TrendingUp size={12} /> Crossover • 2026
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none"
                        >
                            The <span className="text-blue-400 italic">Big 3</span> AI Tools<br />
                            <span className="text-2xl md:text-3xl font-bold text-slate-300">for Software Development in 2026</span>
                        </motion.h1>
                    </div>
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="md:w-1/3 flex-shrink-0"
                    >
                        <div className="bg-slate-900 rounded-2xl border border-blue-500/20 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] overflow-hidden">
                            <img
                                src="big-ai-tools.png"
                                alt="The Big 3 AI Tools for Software Development in 2026"
                                className="w-full h-auto block"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Framing line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 text-sm max-w-3xl"
                >
                    These aren't just "useful tools" — they represent{" "}
                    <span className="text-white font-semibold">3 fundamentally different ways</span> engineers are choosing to engage with AI.
                    From staying close to the code, to pairing with an AI teammate, to directing an AI team that executes at scale.
                </motion.p>

                {/* 3 Tool Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className={`p-5 rounded-2xl border ${tool.color} ${tool.glowColor} flex flex-col gap-3`}
                        >
                            {/* Card Header */}
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-xl bg-black/30 mt-0.5">{tool.icon}</div>
                                <div>
                                    <p className={`text-[10px] font-mono uppercase tracking-widest ${tool.textColor}`}>{tool.number}</p>
                                    <h3 className="text-xl font-black text-white leading-tight">{tool.name}</h3>
                                    <p className={`text-xs font-bold uppercase tracking-wider ${tool.textColor}`}>{tool.tagline}</p>
                                </div>
                            </div>

                            {/* Role description */}
                            <p className="text-slate-200 text-sm font-medium italic">{tool.roleDesc}</p>

                            {/* Stats Row */}
                            <div className={`grid grid-cols-2 gap-2`}>
                                {tool.stats.map((s, i) => (
                                    <div key={i} className="bg-black/20 rounded-lg px-3 py-2">
                                        <p className={`text-lg font-black ${tool.textColor}`}>{s.value}</p>
                                        <p className="text-slate-500 text-[9px] uppercase tracking-wider leading-tight">{s.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Bullet Points */}
                            <ul className="space-y-1.5">
                                {tool.points.map((pt, i) => (
                                    <li key={i} className="flex gap-2 text-slate-400 text-[11px] leading-snug">
                                        <span className={`mt-0.5 flex-shrink-0 w-1 h-1 rounded-full ${tool.textColor} bg-current`} />
                                        {pt}
                                    </li>
                                ))}
                            </ul>

                            {/* Bottom highlight */}
                            <div className={`mt-auto pt-3 border-t border-white/5 text-[11px] italic font-medium ${tool.textColor}`}>
                                "{tool.highlight}"
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom: Enterprise Security Proof */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700 rounded-xl p-4"
                >
                    <div className="p-3 flex-shrink-0 bg-green-500/10 rounded-xl">
                        <Shield className="text-green-400" size={24} />
                    </div>
                    <div className="flex-1">
                        <p className="text-white font-bold text-sm mb-1">
                            "But what about security?" — The data already answered this.
                        </p>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            If AI coding tools were a hard security blocker, <span className="text-white font-semibold">Fortune 500 companies wouldn't be at 80–90% adoption rates.</span>{" "}
                            They've moved fast with privacy modes, on-prem deployments, automated security agents, Zero Trust architecture,
                            and human oversight loops. The consensus: <span className="text-green-400 font-semibold">the competitive disadvantage of NOT using AI
                                is now bigger than the security risk.</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-2 ml-auto flex-shrink-0">
                        <GitBranch className="text-green-400" size={16} />
                        <span className="text-green-400 font-black text-sm whitespace-nowrap">All-in: 2026</span>
                    </div>
                </motion.div>

            </div>
        </Slide>
    );
};

export default BigThreeToolsSlide;
