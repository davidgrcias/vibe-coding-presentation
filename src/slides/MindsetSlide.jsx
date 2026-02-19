import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck } from 'lucide-react';

const MindsetSlide = () => {
    return (
        <Slide title="The Mindset Shift">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                <motion.div
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-red-500/10 p-8 rounded-xl border border-red-500/20"
                >
                    <h3 className="text-2xl font-bold text-red-400 mb-4 opacity-70">Old Way</h3>
                    <ul className="space-y-4 text-slate-300">
                        <li className="flex gap-2"><span className="text-red-500">❌</span> Menghafal Syntax</li>
                        <li className="flex gap-2"><span className="text-red-500">❌</span> Coding Manual per Baris</li>
                        <li className="flex gap-2"><span className="text-red-500">❌</span> Proud of "Hard Work" (Typing)</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-green-500/10 p-8 rounded-xl border border-green-500/20"
                >
                    <h3 className="text-2xl font-bold text-green-400 mb-4">New Way (Architect)</h3>
                    <ul className="space-y-4 text-slate-300">
                        <li className="flex gap-2"><UserCheck className="text-green-500" /> Focus on Logic & System Implementation</li>
                        <li className="flex gap-2"><ShieldCheck className="text-green-500" /> Reviewer & Security Gatekeeper</li>
                        <li className="flex gap-2"><span className="text-green-500">⚡</span> Proud of "Smart Work" (Shipping)</li>
                    </ul>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-12 text-center"
            >
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    "AI is the engine, You are the pilot."
                </h2>
            </motion.div>
        </Slide>
    );
};

export default MindsetSlide;
