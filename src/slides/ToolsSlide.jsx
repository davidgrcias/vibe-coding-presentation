import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const ToolsSlide = () => {
    const tools = [
        { name: "GitHub Copilot", desc: "Industry Standard Autocomplete", color: "bg-slate-700" },
        { name: "Google Antigravity", desc: "Advanced Agentic Coding", color: "bg-blue-600" },
        { name: "Cursor / Trae", desc: "AI-Native Code Editors", color: "bg-purple-600" },
        { name: "Claude Dev / Cline", desc: "Autonomous Coding Agents", color: "bg-orange-600" },
    ];

    return (
        <Slide title="Tools & Ecosystem">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {tools.map((tool, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className={`p-6 rounded-xl border border-white/10 hover:scale-105 transition-transform cursor-default relative overflow-hidden group`}
                    >
                        <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${tool.color}`}></div>
                        <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{tool.name}</h3>
                        <p className="text-slate-300 relative z-10">{tool.desc}</p>
                    </motion.div>
                ))}
            </div>
            <div className="mt-12 p-6 bg-slate-900/50 rounded-xl border border-slate-800 text-center">
                <p className="text-xl text-slate-400">
                    "Limitasi tool itu cuma di <span className="text-primary font-bold">kreativitas kita</span> dan... <br /> seberapa jago kita <span className="text-secondary font-bold">nge-prompt</span>."
                </p>
            </div>
        </Slide>
    );
};

export default ToolsSlide;
