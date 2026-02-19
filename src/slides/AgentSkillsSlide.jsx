import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, Zap, ShieldAlert, Cpu } from 'lucide-react';

const AgentSkillsSlide = () => {
    const eraContrast = [
        {
            icon: <MessageSquare className="text-slate-400" />,
            era: "Era 1: Chat AI",
            label: "Passive & Reactive",
            points: [
                "Knowledge-based responses",
                "Needs constant human guidance",
                "Wait for commands (Tanya-Jawab)",
                "No planning or tool actions"
            ],
            color: "border-slate-500/20 bg-slate-500/5"
        },
        {
            icon: <Bot className="text-cyan-400" />,
            era: "Era 2: Agentic AI",
            label: "Active & Autonomous",
            points: [
                "Autonomous decision making",
                "Reasoning loops (Self-Correction)",
                "Planning & using tools (Terminal, APIs)",
                "Productivity Multiplier (Minutes not Hours)"
            ],
            color: "border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_30px_-5px_rgba(34,211,238,0.2)]"
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
                        className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-2 uppercase tracking-widest"
                    >
                        Programmer Zaman Now • Eko K. Khannedy
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter"
                    >
                        Kenapa Kita Wajib Punya <span className="text-cyan-400 italic">Agent Skills?</span>
                    </motion.h1>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full mb-8"
                >
                    <div className="bg-slate-900 rounded-3xl border-2 border-cyan-500/20 shadow-[0_0_80px_-20px_rgba(34,211,238,0.4)] overflow-hidden">
                        <img
                            src="/programmerzamannow.png"
                            alt="Programmer Zaman Now - AI Agent Skills"
                            className="w-full h-auto block"
                        />
                    </div>
                </motion.div>

                {/* Era Contrast Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {eraContrast.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className={`p-6 rounded-2xl border ${item.color} flex flex-col gap-4`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-black/20">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest">{item.era}</h3>
                                    <p className="text-xl font-black text-white uppercase tracking-tight">{item.label}</p>
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {item.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                                        <Zap size={12} className={index === 1 ? "text-cyan-400" : "text-slate-600"} />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Summary Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8 p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md text-center max-w-2xl"
                >
                    <p className="text-lg text-white font-medium italic">
                        "The competition isn't Human vs Human anymore — it's <span className="text-cyan-400">Human + AI Agents</span> vs Human without AI."
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
};

export default AgentSkillsSlide;
