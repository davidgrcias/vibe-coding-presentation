import React, { useState } from 'react';
import Slide from '../components/Slide';
import { motion, AnimatePresence } from 'framer-motion';
import { MonitorCheck, Bug, Lightbulb, Wrench, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
    {
        icon: <MonitorCheck size={18} />,
        label: "1. The Prompt",
        color: "from-blue-500 to-cyan-500",
        borderColor: "border-blue-500/30",
        heading: "\"Can you check everything via DevTools?\"",
        desc: "A single prompt to GitHub Copilot Agent (Claude Sonnet). It has access to Chrome DevTools via MCP — Console, Network, DOM — all of it, without you doing anything.",
        imageKey: "prompt-mcp-devtools.png",
        imageAlt: "User prompt asking Copilot to use MCP DevTools",
    },
    {
        icon: <Bug size={18} />,
        label: "2. AI Inspects (Network)",
        color: "from-yellow-500 to-orange-500",
        borderColor: "border-yellow-500/30",
        heading: "Agent finds the root cause",
        desc: "Copilot autonomously reads every network request. It maps status codes, identifies the 404 on the backend API (_amount), and explains what's normal vs what's broken.",
        imageKey: "output-1.png",
        imageAlt: "Network Summary output from AI review",
    },
    {
        icon: <Lightbulb size={18} />,
        label: "3. Recommendations",
        color: "from-purple-500 to-pink-500",
        borderColor: "border-purple-500/30",
        heading: "Prioritized fix list, not a wall of text",
        desc: "The agent produces a structured action plan — HIGH, MEDIUM, LOW priority bugs — each with a precise fix suggestion. No guessing. No Stack Overflow.",
        imageKey: "output-2.png",
        imageAlt: "AI recommendations table with priorities",
    },
    {
        icon: <Wrench size={18} />,
        label: "4. The Command",
        color: "from-red-500 to-orange-500",
        borderColor: "border-red-500/30",
        heading: "\"Okay, fix all of that properly!\"",
        desc: "One more prompt. No need to explain context — the agent remembers everything from the inspection. You just give the order.",
        imageKey: "prompt-continue.png",
        imageAlt: "Follow-up prompt: please fix all of that",
    },
    {
        icon: <CheckCircle2 size={18} />,
        label: "5. Done ✅",
        color: "from-green-500 to-emerald-500",
        borderColor: "border-green-500/30",
        heading: "4 files fixed. Testing guide included.",
        desc: "Agent applies all fixes across frontend & backend simultaneously. Changes are production-ready. It even writes a testing guide so you can verify it worked.",
        imageKey: "output-after-continue.png",
        imageAlt: "After fix: 4 files changed, testing guide shown",
    },
];

const MCPDevToolsSlide = () => {
    const [activeStep, setActiveStep] = useState(0);
    const step = steps[activeStep];

    return (
        <Slide className="!p-4 md:!p-8 overflow-y-auto">
            <div className="max-w-[1400px] mx-auto flex flex-col h-full gap-4">

                {/* Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2"
                    >
                        <MonitorCheck size={14} /> Copilot Agent + MCP Chrome DevTools
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tighter"
                    >
                        Your AI Now Has{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Eyes on Your Browser.
                        </span>
                    </motion.h1>
                    <p className="text-slate-400 text-sm mt-1">Inspect → Diagnose → Fix. One prompt loop.</p>
                </div>

                {/* Step Pills */}
                <div className="flex justify-center gap-2 flex-wrap">
                    {steps.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveStep(i)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${activeStep === i
                                    ? `bg-gradient-to-r ${s.color} text-white border-transparent shadow-lg`
                                    : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                                }`}
                        >
                            {s.icon}
                            <span className="hidden sm:inline">{s.label}</span>
                            <span className="sm:hidden">{i + 1}</span>
                        </button>
                    ))}
                </div>

                {/* Active Step Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center flex-1 bg-white/[0.03] rounded-2xl border ${step.borderColor} p-5`}
                    >
                        {/* Left: Explanation */}
                        <div className="flex flex-col gap-4">
                            <div className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                                {step.icon}
                                {step.label}
                            </div>
                            <h2 className="text-xl md:text-2xl font-black text-white leading-tight">
                                {step.heading}
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {step.desc}
                            </p>

                            {/* Navigation Buttons */}
                            <div className="flex gap-3 mt-auto pt-4">
                                <button
                                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                                    disabled={activeStep === 0}
                                    className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronLeft size={14} /> Prev
                                </button>
                                <button
                                    onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                                    disabled={activeStep === steps.length - 1}
                                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs text-white bg-gradient-to-r ${step.color} hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all`}
                                >
                                    Next <ChevronRight size={14} />
                                </button>
                                <span className="ml-auto text-[10px] text-slate-600 self-center font-mono">
                                    {activeStep + 1} / {steps.length}
                                </span>
                            </div>
                        </div>

                        {/* Right: Screenshot */}
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl">
                            <img
                                src={step.imageKey}
                                alt={step.imageAlt}
                                className="w-full h-auto object-contain max-h-72 md:max-h-80"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Footer */}
                <div className="text-center text-xs text-slate-600">
                    MCP (Model Context Protocol) gives AI agents real-time access to Browser APIs, Console, Network, and DOM. <span className="text-slate-400">No screenshots needed.</span>
                </div>

            </div>
        </Slide>
    );
};

export default MCPDevToolsSlide;
