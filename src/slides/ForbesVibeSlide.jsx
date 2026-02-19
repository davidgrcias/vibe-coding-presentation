import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Rocket, ShieldAlert, Lightbulb, Clock, CheckCircle2, XCircle } from 'lucide-react';

const ForbesVibeSlide = () => {
    const isItems = [
        { icon: <Rocket size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />, text: "Rapid prototyping — go from idea to working app in hours, not months" },
        { icon: <Lightbulb size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />, text: "Internal tooling — custom dashboards, workflow automators, data sorters" },
        { icon: <Clock size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />, text: "Experimentation — test ideas without engineering bottlenecks" },
        { icon: <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />, text: "Accessibility — domain experts build what they need without knowing code" },
    ];

    const isNotItems = [
        { icon: <XCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />, text: "NOT a replacement for traditional software engineering" },
        { icon: <XCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />, text: "NOT for customer-facing or mission-critical production systems" },
        { icon: <XCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />, text: "NOT for tools that handle sensitive data or financial transactions" },
        { icon: <XCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />, text: "NOT a threat to software engineers — it makes them faster" },
    ];

    const processSteps = [
        { step: "1", label: "Define the Outcome", desc: "Describe WHAT you need and what 'good' looks like. Not HOW to code it." },
        { step: "2", label: "Give Clear Rules", desc: "Set boundaries, constraints, and expected behaviors upfront." },
        { step: "3", label: "Iterate & Refine", desc: "Assess AI output against your vision. Guide it toward the goal step by step." },
        { step: "4", label: "Ship & Learn", desc: "Deploy, gather feedback, and improve. Speed is the whole point." },
    ];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-5">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Left: Title + framing */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-widest mb-3"
                        >
                            Forbes · Bernard Marr · Feb 10, 2026
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-3"
                        >
                            Vibe Coding Will Change<br />
                            <span className="text-orange-400 italic">Every Industry</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-300 text-sm leading-relaxed max-w-xl"
                        >
                            Software is the hidden engine of modern business, yet building it has always been{" "}
                            <span className="text-white font-semibold">slow, expensive, and constrained by scarce engineering capacity.</span>
                            {" "}Vibe coding changes that equation — putting rapid prototyping and lightweight app creation within reach of{" "}
                            <span className="text-orange-400 font-semibold">far more people across the organization.</span>
                        </motion.p>

                        {/* Core Definition */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 bg-orange-500/5 border border-orange-500/20 rounded-xl p-4"
                        >
                            <p className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-1">The Core Shift</p>
                            <p className="text-slate-200 text-sm leading-relaxed">
                                Instead of telling a computer <span className="text-red-400 font-bold line-through">HOW</span> to do something (writing code),
                                you simply tell it <span className="text-emerald-400 font-bold">WHAT</span> to do.{" "}
                                <span className="text-white font-semibold">Less technical proficiency. More structured thinking, judgment, and clear communication.</span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Forbes Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="md:w-[38%] flex-shrink-0"
                    >
                        <div className="bg-slate-900 rounded-2xl border border-orange-500/20 shadow-[0_0_50px_-10px_rgba(249,115,22,0.25)] overflow-hidden">
                            <img
                                src="forbes.png"
                                alt="Forbes - Why Vibe Coding Is About To Change Work In Every Industry"
                                className="w-full h-auto block"
                            />
                        </div>
                        <p className="text-slate-600 text-[10px] text-center mt-1 italic">
                            Bernard Marr · Forbes · Feb 10, 2026
                        </p>
                    </motion.div>
                </div>

                {/* IS vs IS NOT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* IS */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5"
                    >
                        <h3 className="text-emerald-400 font-black text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                            <CheckCircle2 size={16} /> Vibe Coding IS…
                        </h3>
                        <ul className="space-y-2.5">
                            {isItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-slate-300 text-[12px] leading-snug">
                                    {item.icon}
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* IS NOT */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-5 rounded-2xl border border-red-500/30 bg-red-500/5"
                    >
                        <h3 className="text-red-400 font-black text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                            <ShieldAlert size={16} /> Vibe Coding IS NOT…
                        </h3>
                        <ul className="space-y-2.5">
                            {isNotItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-slate-300 text-[12px] leading-snug">
                                    {item.icon}
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* The Process */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-slate-900/50 border border-slate-700 rounded-2xl p-5"
                >
                    <h3 className="text-white font-black text-sm uppercase tracking-widest mb-4">
                        The Vibe Coding Process
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {processSteps.map((s, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-black flex items-center justify-center flex-shrink-0">
                                        {s.step}
                                    </span>
                                    <p className="text-white text-[11px] font-bold">{s.label}</p>
                                </div>
                                <p className="text-slate-400 text-[10px] leading-snug pl-8">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Forbes Quote / Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-4 bg-gradient-to-r from-orange-900/20 to-slate-900 border border-orange-500/20 rounded-xl p-4"
                >
                    <div className="text-4xl font-black text-orange-500/30 leading-none flex-shrink-0">"</div>
                    <p className="text-slate-200 text-sm font-medium italic flex-1">
                        Vibe coding, while undoubtedly hugely hyped right now, is a{" "}
                        <span className="text-orange-400 font-bold not-italic">fundamental shift in capability</span>{" "}
                        that <span className="text-white font-bold not-italic">no business can afford to ignore.</span>
                    </p>
                    <p className="text-slate-500 text-[10px] text-right flex-shrink-0 font-mono leading-tight">
                        Bernard Marr<br />Forbes, 2026
                    </p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default ForbesVibeSlide;
