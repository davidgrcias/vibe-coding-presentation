import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Bot, Github, Terminal, Globe, Cpu, ArrowRight, Workflow } from 'lucide-react';

const AgentDemoSlide = () => {
    const agents = [
        {
            name: "Devin",
            by: "Cognition AI",
            icon: <Bot size={28} className="text-cyan-400" />,
            color: "border-cyan-500/30 bg-cyan-500/5",
            accent: "text-cyan-400",
            capability: "Full autonomous dev agent",
            flow: ["Reads GitHub Issue", "Plans solution", "Writes code", "Runs tests", "Opens PR"],
            highlight: "World's first fully autonomous software engineer. Handles entire tickets end-to-end."
        },
        {
            name: "Claude Code",
            by: "Anthropic",
            icon: <Terminal size={28} className="text-amber-400" />,
            color: "border-amber-500/30 bg-amber-500/5",
            accent: "text-amber-400",
            capability: "Terminal-native AI engineer",
            flow: ["Reads codebase", "Plans changes", "Edits files", "Runs commands", "Verifies output"],
            highlight: "Lives in your terminal. Understands your entire project context and works autonomously."
        },
        {
            name: "Copilot Workspace",
            by: "GitHub",
            icon: <Github size={28} className="text-purple-400" />,
            color: "border-purple-500/30 bg-purple-500/5",
            accent: "text-purple-400",
            capability: "Issue → implementation pipeline",
            flow: ["Reads issue", "Proposes plan", "Implements", "Creates PR", "Reviews"],
            highlight: "From GitHub Issue to merged PR, all within GitHub's interface. No IDE needed."
        },
        {
            name: "Replit Agent",
            by: "Replit",
            icon: <Globe size={28} className="text-green-400" />,
            color: "border-green-500/30 bg-green-500/5",
            accent: "text-green-400",
            capability: "Sentence → deployed app",
            flow: ["Natural language", "Scaffolds app", "Installs deps", "Writes code", "Deploys live"],
            highlight: "One sentence. One click. Live deployed full-stack app. Zero config. Zero setup."
        }
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-6">

                {/* Header */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3"
                    >
                        <Workflow size={12} /> Already In The Wild
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                        AI Agents <span className="text-cyan-400">In Production</span>
                    </h1>
                    <p className="text-slate-400 text-base mt-2">
                        These are not demos — real teams ship real code with these, right now.
                    </p>
                </div>

                {/* Agent Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {agents.map((agent, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.12 }}
                            className={`rounded-2xl border ${agent.color} p-5 flex flex-col gap-4`}
                        >
                            {/* Agent Header */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-black/30">
                                    {agent.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-black text-white">{agent.name}</h3>
                                        <span className="text-[10px] text-slate-600 font-mono">{agent.by}</span>
                                    </div>
                                    <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${agent.accent}`}>{agent.capability}</p>
                                </div>
                            </div>

                            {/* Flow */}
                            <div className="flex items-center gap-1 flex-wrap">
                                {agent.flow.map((step, si) => (
                                    <React.Fragment key={si}>
                                        <span className="text-[9px] text-slate-400 bg-black/30 px-2 py-1 rounded-md whitespace-nowrap">{step}</span>
                                        {si < agent.flow.length - 1 && <ArrowRight size={10} className="text-slate-700 flex-shrink-0" />}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* Highlight */}
                            <p className="text-slate-400 text-xs leading-relaxed border-l-2 border-white/10 pl-3">
                                {agent.highlight}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                    <Cpu className="text-primary flex-shrink-0" size={20} />
                    <p className="text-sm text-slate-300">
                        <span className="text-white font-bold">The pattern is clear:</span> Agents read context → plan → act → verify → ship. The human's job is to <span className="text-primary font-bold">direct, review, and steer</span>.
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
};

export default AgentDemoSlide;
